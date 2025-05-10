document.addEventListener('DOMContentLoaded', function() {
    // Centers data
    const centers = [
        {
            id: 1,
            name: "المنيا",
            image: "minya-center.png",
            population: "789,000 نسمة",
            coordinates: [28.1099, 30.7503],
            description: "مركز المنيا هو عاصمة المحافظة وأكبر مراكزها من حيث عدد السكان والنشاط الاقتصادي. يقع على الضفة الغربية لنهر النيل ويضم مدينة المنيا وعدداً من القرى التابعة.",
            villages: ["أبو قرقاص", "دماريس", "نزلة حسين", "بني أحمد", "تلة", "منشأة المغالقة", "البرجاية", "العوام", "صفط اللبن"],
            attractions: ["كورنيش النيل", "قصر ثقافة المنيا", "متحف آثار المنيا", "مسجد الرفاعي", "كنيسة العذراء"]
        },
        {
            id: 2,
            name: "مغاغة",
            image: "maghagha-center.png",
            population: "503,000 نسمة",
            coordinates: [28.6490, 30.7493],
            description: "مركز مغاغة هو أقصى مراكز المحافظة شمالاً، ويقع على بعد حوالي 55 كم شمال مدينة المنيا. يشتهر المركز بزراعة القمح وقصب السكر والقطن، وبه عدد من المصانع الزراعية.",
            villages: ["برطباط", "أشروبة", "الرودة", "شاروبيم", "عزبة الكيلو", "نزلة أبو عزيز", "بني والمس", "بردونة", "منشأة النصر"],
            attractions: ["مسجد مغاغة الكبير", "مبنى محطة السكة الحديد التاريخي", "كنيسة مارجرجس"]
        },
        {
            id: 3,
            name: "بني مزار",
            image: "beni-mazar-center.png",
            population: "532,000 نسمة",
            coordinates: [28.5013, 30.8001],
            description: "مركز بني مزار يقع في شمال المحافظة على بعد حوالي 30 كم من مدينة المنيا. يشتهر بزراعة القطن والذرة وقصب السكر. يضم المركز بعض المواقع الأثرية الهامة مثل منطقة البهنسا التاريخية.",
            villages: ["أبو جرج", "نزلة حاتم", "تلت", "رطل", "الناصرية", "أبشادات", "الكوم الأحمر", "قفادة", "البهنسا"],
            attractions: ["آثار البهنسا", "مسجد بني مزار الكبير", "متحف البهنسا للتراث الإسلامي"]
        },
        {
            id: 4,
            name: "مطاي",
            image: "matay-center.png",
            population: "421,000 نسمة",
            coordinates: [28.4188, 30.7785],
            description: "مركز مطاي يقع في شمال المحافظة وتحده محافظة بني سويف من الشمال. يشتهر بزراعة الخضروات والفاكهة وبه نشاط صناعي متنوع يشمل صناعة الأثاث والمنسوجات.",
            villages: ["الكوم الأخضر", "منشأة منبال", "صفط الخمار", "الروضة", "بلهاسة", "عزبة المهندس", "الفكرية", "اسطال", "الراهب"],
            attractions: ["قصر ثقافة مطاي", "مسجد الفتح الإسلامي", "الحديقة المركزية"]
        },
        {
            id: 5,
            name: "سمالوط",
            image: "samalut-center.png",
            population: "478,000 نسمة",
            coordinates: [28.3118, 30.7130],
            description: "مركز سمالوط يقع جنوب مدينة المنيا بحوالي 25 كم. يشتهر المركز بمصانع الطوب والأدوات الفخارية وزراعة القمح والذرة. يضم المركز دير السيدة العذراء بجبل الطير الذي يعد من أهم المزارات السياحية بالمحافظة.",
            villages: ["اسطال", "الشيخ زياد", "قلوصنا", "منقطين", "طوة", "دفش", "بني غني", "مهدية", "البيهو"],
            attractions: ["دير السيدة العذراء بجبل الطير", "كنيسة القديس يوحنا المعمدان", "مسجد الفاروق"]
        },
        {
            id: 6,
            name: "أبو قرقاص",
            image: "abu-qurqas-center.png",
            population: "459,000 نسمة",
            coordinates: [27.9315, 30.8367],
            description: "مركز أبو قرقاص يقع جنوب مدينة المنيا بحوالي 17 كم. يشتهر بزراعة القمح والقطن، وبه صناعات متنوعة مثل الغزل والنسيج ومنتجات الألبان. يضم المركز منطقة بني حسن الأثرية الشهيرة.",
            villages: ["ساقية موسى", "نزلة العوام", "صفانية", "بني والمس", "الشيخ عبادة", "الشيخ حسين", "تندة", "بني خالد", "نزلة المشارقة"],
            attractions: ["مقابر بني حسن الأثرية", "دير أبو فانا", "مسجد أبو قرقاص الكبير"]
        },
        {
            id: 7,
            name: "ملوي",
            image: "mallawi-center.png",
            population: "622,000 نسمة",
            coordinates: [27.7254, 30.8431],
            description: "مركز ملوي هو ثاني أكبر مراكز المحافظة من حيث عدد السكان، ويقع في جنوب المنيا. يشتهر بزراعة قصب السكر وبه العديد من المصانع أهمها مصنع سكر ملوي. كما يضم المركز مواقع أثرية هامة مثل منطقة الأشمونين وتل العمارنة.",
            villages: ["القيس", "دلجا", "منشأة الشيخ رجب", "دير أبو حنس", "الرودة", "الشيخ شبيكة", "نزلة تونا", "قلندول", "ديروط أم نخلة"],
            attractions: ["آثار تل العمارنة", "آثار الأشمونين", "متحف ملوي", "مسجد العمري", "كنيسة العذراء"]
        },
        {
            id: 8,
            name: "دير مواس",
            image: "deir-mawas-center.png",
            population: "385,000 نسمة",
            coordinates: [27.5723, 30.8056],
            description: "مركز دير مواس هو أقصى مراكز المحافظة جنوباً ويحده محافظة أسيوط من الجنوب. يشتهر بزراعة قصب السكر والذرة وبه صناعات حرفية تقليدية متنوعة. كما يضم المركز منطقة تونا الجبل الأثرية الشهيرة.",
            villages: ["دير الجرنوس", "مهريق", "الناصرية", "دلجا", "نزلة العزباوية", "البرشا", "عزبة خليل", "بلاد المطاهرة", "دير أبو حنس الصغير"],
            attractions: ["آثار تونا الجبل", "دير القديسة دميانة", "دير أبو حنس", "مسجد دير مواس الكبير"]
        }
    ];

    // Initialize map
    const map = L.map('minya-map').setView([28.1099, 30.7503], 9);
    
    // Add tile layer (map background)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Custom icon for markers
    const centerIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    // Add markers for each center
    centers.forEach(center => {
        const marker = L.marker(center.coordinates, {icon: centerIcon}).addTo(map);
        
        // Create popup content
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
            <img src="${center.image}" alt="${center.name}" class="popup-image">
            <div class="popup-content">
                <h3 class="popup-title">${center.name}</h3>
                <p class="popup-details">${center.population}</p>
                <button class="popup-button" data-id="${center.id}">عرض التفاصيل</button>
            </div>
        `;
        
        // Add click event to popup button
        popupContent.querySelector('.popup-button').addEventListener('click', function() {
            const centerId = parseInt(this.getAttribute('data-id'));
            showCenterInfo(centerId);
        });
        
        // Create popup with custom class
        const popup = L.popup({
            closeButton: true,
            className: 'custom-popup'
        }).setContent(popupContent);
        
        marker.bindPopup(popup);
        
        // Add hover events
        marker.on('mouseover', function() {
            this.openPopup();
        });
    });
    
    // Function to show center info in the panel
    function showCenterInfo(centerId) {
        const center = centers.find(c => c.id === centerId);
        if (!center) return;
        
        const infoPanel = document.getElementById('info-panel');
        const infoDefault = document.querySelector('.info-default');
        const infoContent = document.getElementById('info-content');
        
        // Hide default info and show center info
        infoDefault.style.display = 'none';
        infoContent.style.display = 'block';
        
        // Update info content
        infoContent.innerHTML = `
            <div class="center-header">
                <img src="${center.image}" alt="${center.name}">
                <div class="center-info">
                    <h2>${center.name}</h2>
                    <p class="center-population">${center.population}</p>
                </div>
            </div>
            <div class="center-details">
                <p>${center.description}</p>
            </div>
            <div class="center-villages">
                <span class="info-label">القرى الرئيسية:</span>
                <ul class="villages-list">
                    ${center.villages.map(village => `<li>${village}</li>`).join('')}
                </ul>
            </div>
            <div class="center-attractions">
                <span class="info-label">أهم المعالم:</span>
                <ul class="villages-list">
                    ${center.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
                </ul>
            </div>
            <a href="attractions.html" class="center-link">عرض معالم المركز</a>
        `;
        
        // Pan map to center location
        map.flyTo(center.coordinates, 10);
    }
    
    // Load centers grid
    function loadCentersGrid() {
        const centersGrid = document.getElementById('centers-grid');
        
        centers.forEach(center => {
            const centerCard = document.createElement('div');
            centerCard.className = 'center-card';
            centerCard.dataset.id = center.id;
            centerCard.innerHTML = `
                <img src="${center.image}" alt="${center.name}">
                <div class="center-card-content">
                    <h3>${center.name}</h3>
                    <p><i class="fas fa-users"></i> ${center.population}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${center.villages.length} قرية تابعة</p>
                    <button class="btn-small">عرض التفاصيل</button>
                </div>
            `;
            
            centersGrid.appendChild(centerCard);
            
            // Add click event to center card
            centerCard.addEventListener('click', function() {
                const centerId = parseInt(this.dataset.id);
                showCenterInfo(centerId);
                
                // Scroll to map section
                document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    
    // Initialize page
    loadCentersGrid();
});

