document.addEventListener('DOMContentLoaded', function() {
    // Timeline Period Selection
    const periodMarkers = document.querySelectorAll('.period-marker');
    const periodContents = document.querySelectorAll('.period-content');
    
    // Set the first period (prehistoric) as active by default
    document.querySelector('.period-marker[data-period="prehistoric"]').classList.add('active');
    document.getElementById('prehistoric-content').classList.add('active');
    
    // Period markers click event
    periodMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const period = this.getAttribute('data-period');
            
            // Remove active class from all markers and contents
            periodMarkers.forEach(m => m.classList.remove('active'));
            periodContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to selected marker and content
            this.classList.add('active');
            document.getElementById(`${period}-content`).classList.add('active');
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('timeline-search-input');
    const searchButton = document.getElementById('timeline-search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') return;
        
        // Simple search implementation - find the first section that contains the query
        let found = false;
        
        periodContents.forEach(content => {
            if (content.textContent.toLowerCase().includes(query)) {
                if (!found) {
                    // Remove active class from all markers and contents
                    periodMarkers.forEach(m => m.classList.remove('active'));
                    periodContents.forEach(c => c.classList.remove('active'));
                    
                    // Add active class to this content and its marker
                    content.classList.add('active');
                    const period = content.id.replace('-content', '');
                    document.querySelector(`.period-marker[data-period="${period}"]`).classList.add('active');
                    
                    // Highlight search terms
                    highlightSearchTerms(content, query);
                    
                    found = true;
                }
            }
        });
        
        if (!found) {
            alert('لم يتم العثور على نتائج للبحث. يرجى تجربة كلمات مختلفة.');
        }
    }
    
    // Highlight search terms in content
    function highlightSearchTerms(content, query) {
        const textNodes = getTextNodes(content);
        
        textNodes.forEach(node => {
            const text = node.nodeValue;
            if (text.toLowerCase().includes(query)) {
                const span = document.createElement('span');
                const regex = new RegExp(`(${query})`, 'gi');
                span.innerHTML = text.replace(regex, '<mark>$1</mark>');
                node.parentNode.replaceChild(span, node);
            }
        });
        
        // Remove highlights after 5 seconds
        setTimeout(() => {
            const highlights = content.querySelectorAll('mark');
            highlights.forEach(h => {
                const textNode = document.createTextNode(h.textContent);
                h.parentNode.replaceChild(textNode, h);
            });
        }, 5000);
    }
    
    // Helper function to get text nodes
    function getTextNodes(element) {
        let textNodes = [];
        
        function getNodes(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else {
                const children = node.childNodes;
                for (let i = 0; i < children.length; i++) {
                    getNodes(children[i]);
                }
            }
        }
        
        getNodes(element);
        return textNodes;
    }
    
    // Search on button click
    searchButton.addEventListener('click', performSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filters functionality
    const filterType = document.getElementById('filter-type');
    const filterPeriod = document.getElementById('filter-period');
    
    function applyFilters() {
        const typeValue = filterType.value;
        const periodValue = filterPeriod.value;
        
        // If period filter is not "all", switch to that period
        if (periodValue !== 'all') {
            // Remove active class from all markers and contents
            periodMarkers.forEach(m => m.classList.remove('active'));
            periodContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to selected period
            document.querySelector(`.period-marker[data-period="${periodValue}"]`).classList.add('active');
            document.getElementById(`${periodValue}-content`).classList.add('active');
        }
        
        // If type filter is not "all", show only elements of that type
        if (typeValue !== 'all') {
            // Hide all type sections first
            document.querySelectorAll('.section-subtitle').forEach(subtitle => {
                const subtitleText = subtitle.textContent.toLowerCase();
                const section = subtitle.nextElementSibling;
                
                if (typeValue === 'location' && subtitleText.includes('المواقع')) {
                    subtitle.style.display = 'block';
                    section.style.display = 'block';
                } else if (typeValue === 'personality' && subtitleText.includes('الشخصيات')) {
                    subtitle.style.display = 'block';
                    section.style.display = 'block';
                } else if (typeValue === 'event' && (subtitleText.includes('الأحداث') || subtitleText.includes('الأنشطة'))) {
                    subtitle.style.display = 'block';
                    section.style.display = 'block';
                } else {
                    subtitle.style.display = 'none';
                    section.style.display = 'none';
                }
            });
        } else {
            // Show all sections
            document.querySelectorAll('.section-subtitle, .locations-grid, .personalities-list, .activities-list').forEach(el => {
                el.style.display = 'block';
            });
        }
    }
    
    // Apply filters on change
    filterType.addEventListener('change', applyFilters);
    filterPeriod.addEventListener('change', applyFilters);
    
    // PDF Download functionality
    const downloadPdfButton = document.getElementById('download-pdf');
    
    downloadPdfButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Get active period content
        const activePeriod = document.querySelector('.period-content.active');
        const periodTitle = activePeriod.querySelector('.period-title h2').textContent;
        const periodDescription = activePeriod.querySelector('.period-description').textContent;
        
        // Add content to PDF
        doc.addFont('Cairo-Regular.ttf', 'Cairo', 'normal');
        doc.setFont('Cairo');
        doc.setR2L(true);
        
        doc.setFontSize(22);
        doc.text('آلة الزمن - تاريخ المنيا عبر العصور', 105, 20, {align: 'center'});
        
        doc.setFontSize(18);
        doc.text(periodTitle, 105, 40, {align: 'center'});
        
        doc.setFontSize(12);
        const textLines = doc.splitTextToSize(periodDescription, 180);
        doc.text(textLines, 15, 60);
        
        // Add all section titles and content
        let yPosition = 120;
        const sections = activePeriod.querySelectorAll('.section-subtitle');
        
        sections.forEach(section => {
            if (yPosition > 270) {
                doc.addPage();
                yPosition = 20;
            }
            
            const sectionTitle = section.textContent;
            doc.setFontSize(14);
            doc.text(sectionTitle, 15, yPosition);
            yPosition += 10;
            
            const sectionContent = section.nextElementSibling.textContent;
            doc.setFontSize(12);
            const contentLines = doc.splitTextToSize(sectionContent, 180);
            doc.text(contentLines, 15, yPosition);
            
            yPosition += contentLines.length * 7 + 15;
        });
        
        // Save the PDF
        doc.save(`تاريخ-المنيا-${periodTitle}.pdf`);
    });
    
    // Map Toggle functionality
    const toggleMapButton = document.getElementById('toggle-map');
    const timelineMap = document.getElementById('timeline-map');
    let map = null;
    
    toggleMapButton.addEventListener('click', function() {
        if (timelineMap.style.display === 'none') {
            timelineMap.style.display = 'block';
            initMap();
            this.innerHTML = '<i class="fas fa-times"></i> إخفاء الخريطة';
        } else {
            timelineMap.style.display = 'none';
            this.innerHTML = '<i class="fas fa-map"></i> الخريطة التاريخية';
        }
    });
    
    // Initialize map
    function initMap() {
        if (map) return; // Map already initialized
        
        map = L.map('timeline-map').setView([28.1099, 30.7503], 9);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add markers for historical sites
        const historicalSites = [
            {name: 'تل العمارنة', coords: [27.6456, 30.8981], period: 'pharaonic'},
            {name: 'بني حسن', coords: [27.9322, 30.8914], period: 'pharaonic'},
            {name: 'تونة الجبل', coords: [27.7711, 30.7014], period: 'pharaonic'},
            {name: 'الأشمونين', coords: [27.7798, 30.8041], period: 'pharaonic'},
            {name: 'دير السيدة العذراء بجبل الطير', coords: [28.1815, 30.7863], period: 'coptic'},
            {name: 'دير أبو فانا', coords: [27.7254, 30.7431], period: 'coptic'},
            {name: 'البهنسا', coords: [28.5370, 30.6507], period: 'islamic'}
        ];
        
        // Custom icons for different periods
        const periodIcons = {
            prehistoric: L.divIcon({
                className: 'custom-marker-prehistoric',
                html: '<i class="fas fa-campground" style="color: #8d6e63;"></i>',
                iconSize: [20, 20]
            }),
            pharaonic: L.divIcon({
                className: 'custom-marker-pharaonic',
                html: '<i class="fas fa-landmark" style="color: #2e7d32;"></i>',
                iconSize: [20, 20]
            }),
            greek: L.divIcon({
                className: 'custom-marker-greek',
                html: '<i class="fas fa-columns" style="color: #1976d2;"></i>',
                iconSize: [20, 20]
            }),
            coptic: L.divIcon({
                className: 'custom-marker-coptic',
                html: '<i class="fas fa-church" style="color: #7b1fa2;"></i>',
                iconSize: [20, 20]
            }),
            islamic: L.divIcon({
                className: 'custom-marker-islamic',
                html: '<i class="fas fa-mosque" style="color: #c62828;"></i>',
                iconSize: [20, 20]
            }),
            modern: L.divIcon({
                className: 'custom-marker-modern',
                html: '<i class="fas fa-city" style="color: #424242;"></i>',
                iconSize: [20, 20]
            })
        };
        
        // Add markers to map
        historicalSites.forEach(site => {
            const marker = L.marker(site.coords, {
                icon: periodIcons[site.period] || L.divIcon({className: 'custom-marker'})
            }).addTo(map);
            
            marker.bindPopup(`<b>${site.name}</b><br>العصر: ${getPeriodName(site.period)}`);
        });
        
        // Add boundary polygons for different historical periods
        const periodBoundaries = {
            prehistoric: [
                [28.3, 30.6], [28.0, 30.6], [27.7, 30.7], [27.5, 30.8], 
                [27.5, 31.0], [27.8, 31.1], [28.2, 31.0], [28.3, 30.6]
            ],
            pharaonic: [
                [28.4, 30.5], [27.9, 30.5], [27.4, 30.6], [27.2, 30.8], 
                [27.3, 31.1], [27.8, 31.2], [28.3, 31.1], [28.4, 30.5]
            ],
            modern: [
                [28.6, 30.4], [27.8, 30.4], [27.2, 30.5], [27.0, 30.7], 
                [27.1, 31.2], [27.9, 31.3], [28.5, 31.2], [28.6, 30.4]
            ]
        };
        
        // Add polygons with different colors and low opacity
        const colors = {
            prehistoric: '#8d6e63',
            pharaonic: '#2e7d32',
            greek: '#1976d2',
            coptic: '#7b1fa2',
            islamic: '#c62828',
            modern: '#424242'
        };
        
        for (const period in periodBoundaries) {
            L.polygon(periodBoundaries[period], {
                color: colors[period],
                fillOpacity: 0.2,
                weight: 1
            }).addTo(map).bindPopup(`حدود المنيا في ${getPeriodName(period)}`);
        }
        
        // Legend
        const legend = L.control({position: 'bottomright'});
        
        legend.onAdd = function() {
            const div = L.DomUtil.create('div', 'map-legend');
            div.innerHTML = `
                <div style="background: white; padding: 10px; border-radius: 5px; direction: rtl; text-align: right;">
                    <h4 style="margin: 0 0 10px 0;">مفتاح الخريطة</h4>
                    <div style="margin-bottom: 5px;"><i class="fas fa-campground" style="color: #8d6e63;"></i> عصور ما قبل الأسرات</div>
                    <div style="margin-bottom: 5px;"><i class="fas fa-landmark" style="color: #2e7d32;"></i> العصر الفرعوني</div>
                    <div style="margin-bottom: 5px;"><i class="fas fa-columns" style="color: #1976d2;"></i> العصر اليوناني-الروماني</div>
                    <div style="margin-bottom: 5px;"><i class="fas fa-church" style="color: #7b1fa2;"></i> العصر القبطي</div>
                    <div style="margin-bottom: 5px;"><i class="fas fa-mosque" style="color: #c62828;"></i> العصر الإسلامي</div>
                    <div><i class="fas fa-city" style="color: #424242;"></i> العصر الحديث</div>
                </div>
            `;
            return div;
        };
        
        legend.addTo(map);
    }
    
    // Helper function to get period name in Arabic
    function getPeriodName(period) {
        const names = {
            prehistoric: 'عصور ما قبل الأسرات',
            pharaonic: 'العصر الفرعوني',
            greek: 'العصر اليوناني-الروماني',
            coptic: 'العصر القبطي',
            islamic: 'العصر الإسلامي',
            modern: 'العصر الحديث والمعاصر'
        };
        
        return names[period] || period;
    }
    
    // 3D Viewer functionality
    const modal3d = document.getElementById('modal-3d');
    const viewer3d = document.getElementById('viewer-3d');
    const close3dModal = document.querySelector('.close-3d-modal');
    const view3dButtons = document.querySelectorAll('.view-3d-btn');
    
    // 3D Viewer URLs (these would be replaced with actual 3D model URLs in production)
    const model3dUrls = {
        'beni-hassan-prehistoric': 'https://sketchfab.com/models/3a40c32c30f14c31b0eaaab95bde0b0f/embed',
        'badraman': 'https://sketchfab.com/models/7cce4c34e5fb46e8a5dfa8d3f78996a8/embed',
        'eastern-desert': 'https://sketchfab.com/models/b2f3e84a1a5a40c6a93fc3c3dbe8627b/embed',
        'amarna': 'https://sketchfab.com/models/75943e58586b4e09a0bc5446e854c5e1/embed',
        'tuna-el-gebel': 'https://sketchfab.com/models/3a40c32c30f14c31b0eaaab95bde0b0f/embed',
        'beni-hassan': 'https://sketchfab.com/models/b2f3e84a1a5a40c6a93fc3c3dbe8627b/embed',
        'ashmunein': 'https://sketchfab.com/models/7cce4c34e5fb46e8a5dfa8d3f78996a8/embed'
    };
    
    // Open 3D viewer modal when clicking view 3D button
    view3dButtons.forEach(button => {
        button.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            const modelUrl = model3dUrls[location] || 'https://sketchfab.com/models/b2f3e84a1a5a40c6a93fc3c3dbe8627b/embed';
            
            viewer3d.src = modelUrl;
            modal3d.style.display = 'block';
        });
    });
    
    // Close 3D viewer modal
    close3dModal.addEventListener('click', function() {
        modal3d.style.display = 'none';
        viewer3d.src = '';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal3d) {
            modal3d.style.display = 'none';
            viewer3d.src = '';
        }
    });
    
    // Audio Player functionality
    const audioPlayer = document.getElementById('audio-player');
    const playPauseButton = document.getElementById('play-pause');
    const stopButton = document.getElementById('stop-audio');
    const audioTitle = document.getElementById('audio-title');
    const audioButtons = document.querySelectorAll('.audio-button');
    
    // Audio data object
    const audioPeriods = {
        'prehistoric': {
            title: 'عصور ما قبل الأسرات',
            audio: new Audio('prehistoric-audio.mp3') // This would be replaced with actual audio file
        },
        'pharaonic': {
            title: 'العصر الفرعوني',
            audio: new Audio('pharaonic-audio.mp3') // This would be replaced with actual audio file
        }
        // Add more periods and their audio files
    };
    
    let currentAudio = null;
    
    // Initialize audio objects with empty sources for now
    for (const period in audioPeriods) {
        audioPeriods[period].audio.src = '';
    }
    
    // Play audio when clicking the audio button
    audioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const period = this.getAttribute('data-content');
            
            // Stop any currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            }
            
            // Set current audio
            currentAudio = audioPeriods[period].audio;
            audioTitle.textContent = audioPeriods[period].title;
            
            // Play audio and show player
            currentAudio.play();
            audioPlayer.classList.add('active');
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
            
            // Update UI when audio ends
            currentAudio.addEventListener('ended', function() {
                playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
            });
        });
    });
    
    // Play/Pause button
    playPauseButton.addEventListener('click', function() {
        if (!currentAudio) return;
        
        if (currentAudio.paused) {
            currentAudio.play();
            this.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            currentAudio.pause();
            this.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Stop button
    stopButton.addEventListener('click', function() {
        if (!currentAudio) return;
        
        currentAudio.pause();
        currentAudio.currentTime = 0;
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        audioPlayer.classList.remove('active');
    });
    
    // Star Rating functionality
    const stars = document.querySelectorAll('.star');
    let currentRating = 0;
    
    stars.forEach(star => {
        // Hover effect
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
        
        star.addEventListener('mouseout', function() {
            highlightStars(currentRating);
        });
        
        // Click to rate
        star.addEventListener('click', function() {
            currentRating = parseInt(this.getAttribute('data-rating'));
            highlightStars(currentRating);
        });
    });
    
    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    // Feedback submission
    const submitFeedback = document.querySelector('.submit-feedback');
    const feedbackComment = document.querySelector('.feedback-comment');
    
    submitFeedback.addEventListener('click', function() {
        const comment = feedbackComment.value.trim();
        
        if (currentRating === 0 && comment === '') {
            alert('يرجى تقييم تجربتك أو كتابة تعليق قبل الإرسال.');
            return;
        }
        
        // In a real implementation, this would send the feedback to a server
        alert(`شكراً لك! تم إرسال تقييمك (${currentRating} نجوم) وتعليقك بنجاح.`);
        
        // Reset form
        currentRating = 0;
        highlightStars(0);
        feedbackComment.value = '';
    });
});