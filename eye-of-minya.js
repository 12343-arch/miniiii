// DOM elements
const reportProblemBtn = document.getElementById('report-problem-btn');
const viewMapBtn = document.getElementById('view-map-btn');
const reportModal = document.getElementById('report-modal');
const closeModal = document.querySelector('.close-modal');
const reportForm = document.getElementById('report-form');
const problemTypeSelect = document.getElementById('problem-type');
const otherProblemContainer = document.getElementById('other-problem-container');
const reportsList = document.getElementById('reports-list');
const noReports = document.getElementById('no-reports');
const totalReportsEl = document.getElementById('total-reports');
const topAreaEl = document.getElementById('top-area');
const solvedPercentageEl = document.getElementById('solved-percentage');

// Filters
const problemTypeFilter = document.getElementById('problem-type-filter');
const areaFilter = document.getElementById('area-filter');
const severityFilter = document.getElementById('severity-filter');
const reportSearch = document.getElementById('report-search');
const searchBtn = document.getElementById('search-btn');

// Initialize map
const map = L.map('problems-map').setView([28.1099, 30.7503], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sample data for reports (in a real app, this would come from a database)
const reportsData = [
    {
        id: 1,
        type: 'roads',
        typeName: 'طرق مكسورة',
        location: 'شارع طه حسين، مدينة المنيا',
        description: 'حفرة عميقة في منتصف الطريق تسبب حوادث متكررة للسيارات',
        severity: 'high',
        severityText: 'عاجلة',
        image: null,
        date: '2025-05-15T09:30:00',
        status: 'pending',
        statusText: 'قيد المراجعة',
        coordinates: [28.1150, 30.7520],
        contact: null,
        area: 'minya-city'
    },
    {
        id: 2,
        type: 'electricity',
        typeName: 'أعمدة إنارة تالفة',
        location: 'شارع الجمهورية، مدينة ملوي',
        description: 'عامود إنارة متهالك يميل بشكل خطير ويهدد المارة',
        severity: 'medium',
        severityText: 'متوسطة',
        image: null,
        date: '2025-05-14T14:45:00',
        status: 'processing',
        statusText: 'جاري العمل',
        coordinates: [27.7306, 30.8442],
        contact: null,
        area: 'mallawi'
    },
    {
        id: 3,
        type: 'water',
        typeName: 'نقص مياه',
        location: 'قرية أبيوها، مركز مطاي',
        description: 'انقطاع المياه لمدة 3 أيام متتالية بدون سابق إنذار',
        severity: 'high',
        severityText: 'عاجلة',
        image: null,
        date: '2025-05-15T11:15:00',
        status: 'solved',
        statusText: 'تم الحل',
        coordinates: [28.4150, 30.7788],
        contact: null,
        area: 'matay'
    },
    {
        id: 4,
        type: 'traffic',
        typeName: 'تكدس مروري',
        location: 'تقاطع شارع الحرية مع شارع النصر، المنيا',
        description: 'تكدس مروري شديد بسبب تعطل الإشارة لأكثر من أسبوع',
        severity: 'medium',
        severityText: 'متوسطة',
        image: null,
        date: '2025-05-13T08:00:00',
        status: 'processing',
        statusText: 'جاري العمل',
        coordinates: [28.1110, 30.7505],
        contact: null,
        area: 'minya-city'
    },
    {
        id: 5,
        type: 'schools',
        typeName: 'مشكلة مدرسية',
        location: 'مدرسة سمالوط الثانوية بنين',
        description: 'تسرب مياه في سقف أحد الفصول وتعرض الطلاب والمعلمين للخطر',
        severity: 'high',
        severityText: 'عاجلة',
        image: null,
        date: '2025-05-12T10:30:00',
        status: 'pending',
        statusText: 'قيد المراجعة',
        coordinates: [28.3120, 30.7132],
        contact: null,
        area: 'samalut'
    },
    {
        id: 6,
        type: 'prices',
        typeName: 'ارتفاع أسعار',
        location: 'سوق الخضار المركزي، مدينة بني مزار',
        description: 'ارتفاع غير مبرر في أسعار الخضروات الأساسية بنسبة تفوق 40% خلال أسبوع واحد',
        severity: 'medium',
        severityText: 'متوسطة',
        image: null,
        date: '2025-05-11T16:20:00',
        status: 'pending',
        statusText: 'قيد المراجعة',
        coordinates: [28.5020, 30.8003],
        contact: null,
        area: 'beni-mazar'
    }
];

// Function to initialize the dashboard
function initDashboard() {
    // Update stats
    updateStats();
    
    // Load reports
    loadReports(reportsData);
    
    // Add markers to map
    addMarkersToMap(reportsData);
}

// Function to update dashboard statistics
function updateStats() {
    // Total reports
    totalReportsEl.textContent = reportsData.length;
    
    // Top area with problems
    const areaCounts = {};
    reportsData.forEach(report => {
        if (areaCounts[report.area]) {
            areaCounts[report.area]++;
        } else {
            areaCounts[report.area] = 1;
        }
    });
    
    let topArea = 'N/A';
    let maxCount = 0;
    
    for (const area in areaCounts) {
        if (areaCounts[area] > maxCount) {
            maxCount = areaCounts[area];
            topArea = area;
        }
    }
    
    // Convert area code to readable name
    const areaNames = {
        'minya-city': 'مدينة المنيا',
        'new-minya': 'المنيا الجديدة',
        'mallawi': 'ملوي',
        'samalut': 'سمالوط',
        'matay': 'مطاي',
        'beni-mazar': 'بني مزار',
        'maghagha': 'مغاغة',
        'deir-mawas': 'دير مواس',
        'abu-qurqas': 'أبو قرقاص'
    };
    
    topAreaEl.textContent = areaNames[topArea] || topArea;
    
    // Solved percentage
    const solvedReports = reportsData.filter(report => report.status === 'solved').length;
    const solvedPercentage = Math.round((solvedReports / reportsData.length) * 100);
    solvedPercentageEl.textContent = solvedPercentage + '%';
}

// Function to load reports into the list
function loadReports(reports) {
    if (reports.length === 0) {
        reportsList.innerHTML = '';
        noReports.style.display = 'block';
        return;
    }
    
    noReports.style.display = 'none';
    reportsList.innerHTML = '';
    
    reports.forEach(report => {
        const reportCard = document.createElement('div');
        reportCard.className = 'report-card';
        reportCard.setAttribute('data-id', report.id);
        
        const statusClass = report.status === 'pending' ? 'status-pending' : 
                          report.status === 'processing' ? 'status-processing' : 'status-solved';
        
        const severityClass = report.severity === 'low' ? 'severity-low' : 
                            report.severity === 'medium' ? 'severity-medium' : 'severity-high';
        
        reportCard.innerHTML = `
            <div class="report-header">
                <span class="report-type ${report.type}">${report.typeName}</span>
                <span class="report-severity">
                    <span class="severity-indicator ${severityClass}"></span>
                    ${report.severityText}
                </span>
            </div>
            <div class="report-content">
                <div class="report-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${report.location}</span>
                </div>
                <p class="report-description">${report.description}</p>
                ${report.image ? `<img src="${report.image}" alt="${report.typeName}" class="report-image">` : ''}
            </div>
            <div class="report-footer">
                <span class="report-date">
                    <i class="far fa-calendar-alt"></i>
                    ${formatDate(report.date)}
                </span>
                <span class="report-status ${statusClass}">
                    <i class="fas fa-circle"></i>
                    ${report.statusText}
                </span>
            </div>
        `;
        
        reportsList.appendChild(reportCard);
        
        // Add click event to show on map
        reportCard.addEventListener('click', function() {
            // Fly to the report location on the map
            map.flyTo(report.coordinates, 15);
            
            // Find the marker and open its popup
            const markers = document.querySelectorAll('.leaflet-marker-icon');
            markers.forEach(marker => {
                if (marker._leaflet_id === report.id) {
                    marker.click();
                }
            });
        });
    });
}

// Function to add markers to the map
function addMarkersToMap(reports) {
    // Clear existing markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });
    
    // Create a marker for each report
    reports.forEach(report => {
        const markerIcon = L.divIcon({
            className: `custom-marker ${report.type}`,
            html: `<i class="fas fa-exclamation-circle"></i>`,
            iconSize: [30, 30]
        });
        
        const marker = L.marker(report.coordinates, { icon: markerIcon }).addTo(map);
        
        // Create popup content
        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        
        const typeClass = report.type;
        const severityClass = report.severity === 'low' ? 'severity-low' : 
                            report.severity === 'medium' ? 'severity-medium' : 'severity-high';
        const statusClass = report.status === 'pending' ? 'status-pending' : 
                          report.status === 'processing' ? 'status-processing' : 'status-solved';
        
        popupContent.innerHTML = `
            <span class="popup-type ${typeClass}">${report.typeName}</span>
            <p class="popup-location">${report.location}</p>
            <p class="popup-description">${report.description}</p>
            <div class="popup-severity">
                <span class="severity-indicator ${severityClass}"></span>
                الخطورة: ${report.severityText}
            </div>
            <div class="popup-status ${statusClass}">
                <i class="fas fa-circle"></i>
                الحالة: ${report.statusText}
            </div>
        `;
        
        // Create custom popup
        const popup = L.popup({
            closeButton: true,
            className: 'custom-popup'
        }).setContent(popupContent);
        
        marker.bindPopup(popup);
    });
}

// Function to handle form submission
function handleReportSubmission(e) {
    e.preventDefault();
    
    // Get form values
    const problemType = problemTypeSelect.value;
    const problemTypeName = problemTypeSelect.options[problemTypeSelect.selectedIndex].text;
    const otherProblem = document.getElementById('other-problem').value;
    const problemLocation = document.getElementById('problem-location').value;
    const problemDescription = document.getElementById('problem-description').value;
    const problemSeverity = document.getElementById('problem-severity').value;
    const problemSeverityText = document.getElementById('problem-severity').options[document.getElementById('problem-severity').selectedIndex].text;
    const reporterContact = document.getElementById('reporter-contact').value;
    
    // Get image file (would be uploaded to server in a real app)
    const imageFile = document.getElementById('problem-image').files[0];
    let imageUrl = null;
    
    // In a real app, you would upload the image to a server and get the URL
    
    // Generate random coordinates near Minya (for demo purposes)
    const baseLat = 28.1099;
    const baseLng = 30.7503;
    const lat = baseLat + (Math.random() * 0.1 - 0.05);
    const lng = baseLng + (Math.random() * 0.1 - 0.05);
    
    // Create new report object
    const newReport = {
        id: reportsData.length + 1,
        type: problemType === 'other' ? 'other' : problemType,
        typeName: problemType === 'other' ? otherProblem : problemTypeName,
        location: problemLocation,
        description: problemDescription,
        severity: problemSeverity,
        severityText: problemSeverityText,
        image: imageUrl,
        date: new Date().toISOString(),
        status: 'pending',
        statusText: 'قيد المراجعة',
        coordinates: [lat, lng],
        contact: reporterContact,
        area: 'minya-city' // Default area (would be determined from location in a real app)
    };
    
    // Add new report to data
    reportsData.unshift(newReport);
    
    // Update dashboard
    updateStats();
    loadReports(reportsData);
    addMarkersToMap(reportsData);
    
    // Show success message
    alert('تم إرسال البلاغ بنجاح! سيتم مراجعته قريبًا.');
    
    // Close modal
    reportModal.style.display = 'none';
    
    // Reset form
    reportForm.reset();
    otherProblemContainer.style.display = 'none';
}

// Function to filter reports
function filterReports() {
    const typeValue = problemTypeFilter.value;
    const areaValue = areaFilter.value;
    const severityValue = severityFilter.value;
    const searchValue = reportSearch.value.toLowerCase();
    
    let filteredReports = [...reportsData];
    
    // Filter by type
    if (typeValue !== 'all') {
        filteredReports = filteredReports.filter(report => report.type === typeValue);
    }
    
    // Filter by area
    if (areaValue !== 'all') {
        filteredReports = filteredReports.filter(report => report.area === areaValue);
    }
    
    // Filter by severity
    if (severityValue !== 'all') {
        filteredReports = filteredReports.filter(report => report.severity === severityValue);
    }
    
    // Filter by search term
    if (searchValue) {
        filteredReports = filteredReports.filter(report => 
            report.location.toLowerCase().includes(searchValue) || 
            report.description.toLowerCase().includes(searchValue) ||
            report.typeName.toLowerCase().includes(searchValue)
        );
    }
    
    // Update reports list and map
    loadReports(filteredReports);
    addMarkersToMap(filteredReports);
}

// Format date helper function
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Event listeners
reportProblemBtn.addEventListener('click', function() {
    reportModal.style.display = 'block';
});

viewMapBtn.addEventListener('click', function() {
    const mapContainer = document.getElementById('problems-map');
    mapContainer.scrollIntoView({ behavior: 'smooth' });
    
    // Invalidate map size to ensure proper rendering
    map.invalidateSize();
});

closeModal.addEventListener('click', function() {
    reportModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === reportModal) {
        reportModal.style.display = 'none';
    }
});

// Show/hide "other problem" field based on selection
problemTypeSelect.addEventListener('change', function() {
    if (this.value === 'other') {
        otherProblemContainer.style.display = 'block';
    } else {
        otherProblemContainer.style.display = 'none';
    }
});

// Filter events
problemTypeFilter.addEventListener('change', filterReports);
areaFilter.addEventListener('change', filterReports);
severityFilter.addEventListener('change', filterReports);
searchBtn.addEventListener('click', filterReports);
reportSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterReports();
    }
});

// Form submission
reportForm.addEventListener('submit', handleReportSubmission);

// Initialize dashboard on page load
initDashboard();

// Fix for map not displaying correctly initially
setTimeout(() => {
    map.invalidateSize();
}, 500);