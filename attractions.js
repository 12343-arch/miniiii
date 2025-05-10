document.addEventListener('DOMContentLoaded', function() {
    // Array of attraction data
    const attractions = [
        {
            id: 1,
            name: "تونا الجبل",
            image: "tuna-elgabal.png",
            type: "فرعوني",
            location: "67 كم جنوب غرب المنيا",
            coordinates: [28.1711, 30.7014],
            summary: "مدينة أثرية مصرية قديمة، كانت العاصمة الدينية لإقليم الأشمونين في مصر القديمة. تضم مقابر ومعابد ترجع للعصر البطلمي والروماني، أشهرها مقبرة بيتوزيريس ومقبرة إيزادورا.",
            description: "تونا الجبل هي منطقة أثرية تقع على الضفة الغربية لنهر النيل في محافظة المنيا. كانت المنطقة تعرف في العصر الفرعوني باسم \"تاحوت\" وكانت تمثل المدينة المقدسة لإله الحكمة \"تحوت\" وتضم مقابر منحوتة في الصخر لكبار الكهنة والنبلاء من العصر البطلمي والروماني. من أشهر مقابرها مقبرة بيتوزيريس كبير كهنة الإله تحوت والمؤرخة بالقرن الرابع قبل الميلاد، ومقبرة إيزادورا الفتاة الإغريقية الجميلة التي غرقت في نهر النيل. كما تضم المنطقة سرداباً للقرود المقدسة وآبار عميقة وكاتاكومب تحت الأرض.",
            hours: "يومياً من 9 ص حتى 5 م",
            entryFee: "100 جنيه للمصريين، 200 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/archaeological-sites/tuna-el-gebel",
            sources: ["https://ar.wikipedia.org/wiki/تونا_الجبل", "https://egy-monuments.gov.eg"]
        },
        {
            id: 2,
            name: "تل العمارنة",
            image: "tell-elamarna.png",
            type: "فرعوني",
            location: "ملوي",
            coordinates: [27.6456, 30.8981],
            summary: "موقع مدينة أخيتاتون، العاصمة التي أنشأها الفرعون إخناتون للديانة التوحيدية. تضم بقايا المدينة والقصور الملكية ومعبد آتون ومقابر النبلاء المنحوتة في الجبل الشرقي.",
            description: "تل العمارنة هو موقع مدينة أخيتاتون (أفق آتون) التي أسسها الفرعون أمنحتب الرابع (إخناتون) في العام الخامس من حكمه كعاصمة جديدة مكرسة لعبادة الإله آتون (قرص الشمس). تمتد المدينة على الضفة الشرقية للنيل بطول 7 كم وعرض 1.5 كم. تضم آثار المدينة القصر الكبير والقصر الشمالي ومعبد آتون الكبير والمعبد الصغير، بالإضافة إلى مقابر رجال البلاط المنحوتة في الجبل الشرقي والتي تعكس فن العمارنة المميز. اشتهر الموقع أيضاً باكتشاف رسائل العمارنة المكتوبة بالخط المسماري.",
            hours: "يومياً من 8 ص حتى 5 م",
            entryFee: "80 جنيه للمصريين، 160 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/archaeological-sites/tell-el-amarna",
            sources: ["https://ar.wikipedia.org/wiki/تل_العمارنة", "https://egy-monuments.gov.eg"]
        },
        {
            id: 3,
            name: "بني حسن",
            image: "beni-hassan.png",
            type: "فرعوني",
            location: "جنوب المنيا",
            coordinates: [27.9322, 30.8914],
            summary: "مجموعة مقابر صخرية منحوتة في جبل بني حسن شرقي النيل، ترجع لعصر الدولة الوسطى. تتميز بنقوشها ورسوماتها الملونة التي تصور مناظر الحياة اليومية والمعارك الحربية.",
            description: "مقابر بني حسن هي مجموعة من المقابر الصخرية المنحوتة في الجبل الشرقي على بعد 20 كم جنوب مدينة المنيا. تضم المقابر 39 مقبرة يرجع معظمها إلى عصر الأسرتين الحادية عشرة والثانية عشرة (الدولة الوسطى) وهي مقابر لحكام الإقليم السادس عشر من أقاليم مصر العليا. تشتهر هذه المقابر بنقوشها الملونة التي توضح مناظر الحياة اليومية والصيد والزراعة والحرف المختلفة والمعارك الحربية. من أشهر مقابرها مقبرة خنوم حتب الثاني التي تصور قدوم مجموعة من الآسيويين إلى مصر.",
            hours: "يومياً من 9 ص حتى 4 م",
            entryFee: "60 جنيه للمصريين، 120 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/archaeological-sites/beni-hassan",
            sources: ["https://ar.wikipedia.org/wiki/مقابر_بني_حسن", "https://egy-monuments.gov.eg"]
        },
        {
            id: 4,
            name: "متحف ملوي",
            image: "mallawi-museum.png",
            type: "حديث",
            location: "مدينة ملوي",
            coordinates: [27.7306, 30.8442],
            summary: "متحف إقليمي يضم مجموعة متنوعة من القطع الأثرية من مختلف العصور التاريخية التي مرت بمنطقة المنيا، خاصة آثار تل العمارنة والأشمونين.",
            description: "متحف ملوي هو متحف إقليمي تم افتتاحه عام 1963 في مدينة ملوي بمحافظة المنيا. يضم المتحف مجموعة متميزة من القطع الأثرية التي تم العثور عليها في المنطقة المحيطة، وخاصة من مواقع الأشمونين وتونا الجبل وتل العمارنة. تعرض المتحف للنهب والتدمير خلال أحداث 2013 لكن تمت استعادة معظم القطع وأعيد افتتاحه عام 2016 بعد ترميمه. يضم المتحف آثاراً فرعونية ويونانية ورومانية وقبطية وإسلامية، بالإضافة إلى مجموعة من العملات والحلي.",
            hours: "يومياً من 9 ص حتى 4 م، الجمعة من 9 ص حتى 2 م",
            entryFee: "40 جنيه للمصريين، 80 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/museums/mallawi-museum",
            sources: ["https://egy-monuments.gov.eg/ar/museums/mallawi-museum"]
        },
        {
            id: 5,
            name: "الأشمونين",
            image: "ashmunein.png",
            type: "روماني",
            location: "غرب مدينة ملوي",
            coordinates: [27.7798, 30.8041],
            summary: "مدينة مصرية قديمة كانت عاصمة الإقليم الخامس عشر من أقاليم مصر العليا وعُرفت في العصر اليوناني باسم هرموبوليس ماجنا. تضم بقايا معابد وكنائس ومباني من العصور الفرعونية واليونانية والرومانية والقبطية.",
            description: "الأشمونين هي موقع أثري يقع غرب مدينة ملوي ويمثل بقايا مدينة مصرية قديمة كانت تسمى خمنو وكانت عاصمة الإقليم الخامس عشر من أقاليم مصر العليا. اشتهرت المدينة بعبادة الإله تحوت (إله الحكمة والكتابة) وسميت في العصر اليوناني هرموبوليس ماجنا (مدينة هرمس العظيمة) حيث كان هرمس هو مقابل تحوت عند الإغريق. تضم الآثار في الموقع بقايا معبد رمسيس الثاني ومعبد الإله تحوت وبقايا آثار يونانية ورومانية وكنائس قبطية. من أشهر آثارها تمثال البابون (القرد المقدس) وبوابة فيليب أراهيدوس وكنيسة من العصر البيزنطي.",
            hours: "يومياً من 8 ص حتى 5 م",
            entryFee: "60 جنيه للمصريين، 120 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/archaeological-sites/el-ashmunein",
            sources: ["https://ar.wikipedia.org/wiki/الأشمونين", "https://egy-monuments.gov.eg"]
        },
        {
            id: 6,
            name: "البهنسا",
            image: "bahnasa.png",
            type: "إسلامي",
            location: "غرب مدينة بني مزار",
            coordinates: [28.5370, 30.6507],
            summary: "مدينة أثرية قديمة كانت تعرف في العصر الفرعوني باسم بر-مجد ثم أوكسيرينخوس في العصر اليوناني. تضم آثاراً من مختلف العصور وتشتهر باكتشاف البرديات اليونانية والمخطوطات الإسلامية فيها.",
            description: "البهنسا هي موقع أثري يقع غرب مدينة بني مزار بمحافظة المنيا. كانت تعرف في العصر الفرعوني باسم بر-مجد، وفي العصر اليوناني والروماني باسم أوكسيرينخوس نسبة إلى سمكة مقدسة كانت تعبد هناك. اكتسبت المدينة أهمية كبيرة في العصر الإسلامي وأصبحت من أهم مراكز الثقافة والحضارة الإسلامية، وكانت مركزاً هاماً لصناعة الورق والنسيج. تضم المنطقة بقايا مساجد ومدارس إسلامية قديمة وقد اكتشف فيها العديد من البرديات اليونانية والمخطوطات الإسلامية ذات القيمة التاريخية العالية.",
            hours: "يومياً من 8 ص حتى 4 م",
            entryFee: "30 جنيه للمصريين، 60 جنيه للأجانب",
            tourLink: "https://egymonuments.gov.eg/ar/archaeological-sites/bahnasa",
            sources: ["https://ar.wikipedia.org/wiki/البهنسا", "https://egy-monuments.gov.eg"]
        },
        {
            id: 7,
            name: "دير السيدة العذراء بجبل الطير",
            image: "monastery-virgin-mary.png",
            type: "قبطي",
            location: "جبل الطير، شرق سمالوط",
            coordinates: [28.1815, 30.7863],
            summary: "دير أثري قبطي يقع على قمة جبل الطير المطل على النيل. مشهور بكنيسة السيدة العذراء التي يُعتقد أن العائلة المقدسة زارتها خلال رحلتها في مصر، ويحتفل به سنوياً في عيد سم النسيم.",
            description: "دير السيدة العذراء بجبل الطير هو دير قبطي أثري يقع على قمة جبل الطير، على الضفة الشرقية للنيل بالقرب من مدينة سمالوط. يضم الدير كنيسة السيدة العذراء التي يرجع تاريخها إلى القرن الرابع الميلادي، ويعتقد وفقاً للتقاليد القبطية أن العائلة المقدسة زارت هذا المكان خلال رحلتها في مصر، وتوجد بصمة لكف المسيح الطفل على أحد الصخور هناك. يشتهر الدير بموقعه المرتفع (على ارتفاع 120 متراً فوق مستوى النيل) ويطل على مناظر طبيعية خلابة للنهر والوادي. يُعد مزاراً دينياً هاماً للأقباط خاصة خلال احتفالات عيد شم النسيم وعيد العذراء في أغسطس.",
            hours: "يومياً من 8 ص حتى 5 م",
            entryFee: "مجاني للمصريين، 50 جنيه للأجانب",
            tourLink: "https://www.copticmiracle.com/listing/the-monastery-of-the-virgin-mary-at-jabal-al-tair/",
            sources: ["https://ar.wikipedia.org/wiki/دير_السيدة_العذراء_(جبل_الطير)", "https://www.copticmiracle.com"]
        },
        {
            id: 8,
            name: "كهف سنور",
            image: "sannur-cave.png",
            type: "طبيعي",
            location: "بني سويف (على حدود المنيا)",
            coordinates: [29.0082, 31.3142],
            summary: "محمية طبيعية تضم كهفاً جيولوجياً فريداً تشكل قبل 60 مليون سنة. يحتوي على تكوينات من الصواعد والهوابط الكلسية ذات الأشكال المذهلة، ويعتبر من أقدم الكهوف في مصر.",
            description: "كهف سنور هو محمية طبيعية تقع على الحدود بين محافظتي بني سويف والمنيا في منطقة جبل سنور. تم اكتشاف الكهف عام 1989 أثناء أعمال التعدين في المنطقة. يعود تاريخ تكوين الكهف إلى العصر الإيوسيني قبل حوالي 60 مليون سنة. يتميز الكهف بتكويناته الجيولوجية الفريدة من الصواعد والهوابط الكلسية (الستالاكتيت والستالاجميت) التي تشكلت عبر ملايين السنين نتيجة ترسب كربونات الكالسيوم. يمتد الكهف على مساحة 700 متر مربع ويضم قاعات متعددة بارتفاعات مختلفة. أعلنت وزارة البيئة المصرية الكهف محمية طبيعية عام 1992 لحماية هذا التكوين الجيولوجي الفريد.",
            hours: "يومياً من 8 ص حتى 4 م، يتطلب تصريح مسبق من جهاز شؤون البيئة",
            entryFee: "40 جنيه للمصريين، 80 جنيه للأجانب",
            tourLink: "https://www.eeaa.gov.eg/ar-eg/الموضوعات-البيئية/الطبيعة/المحميات-الطبيعية/محمية-كهف-سنور.aspx",
            sources: ["https://ar.wikipedia.org/wiki/كهف_سنور", "https://www.eeaa.gov.eg"]
        },
        {
            id: 9,
            name: "مسجد الرفاعي",
            image: "rifai-mosque.png",
            type: "إسلامي",
            location: "وسط مدينة المنيا",
            coordinates: [28.1097, 30.7550],
            summary: "من أقدم وأكبر المساجد في مدينة المنيا، يتميز بتصميمه المعماري الفريد الذي يجمع بين الطراز الإسلامي التقليدي واللمسات المعمارية الحديثة.",
            description: "مسجد الرفاعي هو أحد أهم المساجد التاريخية في مدينة المنيا، ويقع في وسط المدينة. تم بناؤه في أوائل القرن العشرين على الطراز الإسلامي التقليدي مع بعض اللمسات المعمارية الحديثة. يتميز المسجد بمئذنته العالية وقبته الكبيرة والزخارف الإسلامية الدقيقة على جدرانه. المسجد واسع من الداخل ويضم صحناً كبيراً للصلاة ومنبراً خشبياً منقوشاً بدقة. يعتبر من المعالم الدينية والسياحية المهمة في المنيا ويشهد إقبالاً كبيراً من المصلين خاصة في شهر رمضان وأوقات صلاة الجمعة.",
            hours: "مفتوح يومياً للصلاة، الزيارة السياحية من 9 ص حتى 5 م عدا أوقات الصلاة",
            entryFee: "مجاني",
            tourLink: "",
            sources: ["https://www.elminya.gov.eg/"]
        },
        {
            id: 10,
            name: "قصر ثقافة المنيا",
            image: "minya-culture-palace.png",
            type: "حديث",
            location: "وسط مدينة المنيا",
            coordinates: [28.1066, 30.7489],
            summary: "مركز ثقافي متكامل يضم قاعات للعروض المسرحية والموسيقية والمعارض الفنية، بالإضافة إلى مكتبة ضخمة. يعتبر منارة ثقافية في صعيد مصر ويستضيف العديد من الفعاليات الثقافية والفنية على مدار العام.",
            description: "قصر ثقافة المنيا هو أحد أهم المراكز الثقافية في صعيد مصر، تم افتتاحه عام 1989 ليكون منارة ثقافية في المحافظة. يضم القصر قاعة مسرح رئيسية تتسع لـ 500 متفرج، وقاعات للعروض الموسيقية والندوات والمؤتمرات، ومعارض فنية دائمة ومؤقتة، بالإضافة إلى مكتبة كبيرة تضم آلاف الكتب في مختلف المجالات. يقدم قصر الثقافة أنشطة متنوعة تشمل حفلات موسيقية وعروض مسرحية وورش فنية ودورات تدريبية في مجالات الفنون المختلفة. يعتبر مركزاً لاستقطاب المواهب الفنية والأدبية في المحافظة ويستضيف مهرجانات ثقافية دورية.",
            hours: "يومياً من 9 ص حتى 9 م، الجمعة من 3 م حتى 9 م",
            entryFee: "مجاني (قد تكون هناك رسوم لبعض العروض والفعاليات)",
            tourLink: "http://www.minya.gov.eg/culture",
            sources: ["http://www.moc.gov.eg/ar/palaces-houses-of-culture/culture-palaces/"]
        },
        {
            id: 11,
            name: "كورنيش النيل بالمنيا",
            image: "minya-corniche.png",
            type: "حديث",
            location: "مدينة المنيا",
            coordinates: [28.1135, 30.7400],
            summary: "متنزه وممشى على ضفاف نهر النيل يمتد بطول مدينة المنيا، يضم حدائق وجلسات ومطاعم ومراسي للقوارب النيلية. يعتبر من أجمل المتنزهات في صعيد مصر ومقصداً للعائلات والزوار.",
            description: "كورنيش النيل بالمنيا هو متنزه جميل يمتد على الضفة الشرقية لنهر النيل بطول مدينة المنيا. تم تطويره وتجديده عدة مرات ليصبح من أجمل كورنيشات النيل في صعيد مصر. يضم الكورنيش مساحات خضراء وحدائق منسقة وأماكن للجلوس وإطلالات رائعة على النيل والضفة الغربية. تنتشر على طول الكورنيش المطاعم والكافيهات ومراسي القوارب النيلية التي تقدم رحلات نيلية قصيرة وطويلة. يعج الكورنيش بالحركة والنشاط خاصة في المساء وفي العطلات، حيث يقصده سكان المدينة والزوار للاستمتاع بنسيم النيل والمناظر الطبيعية الخلابة والأنشطة الترفيهية المختلفة.",
            hours: "مفتوح على مدار الساعة",
            entryFee: "مجاني",
            tourLink: "",
            sources: ["https://www.elminya.gov.eg/"]
        }
    ];

    // Function to load attractions
    function loadAttractions(filterValue = 'all') {
        const container = document.getElementById('attractions-container');
        container.innerHTML = ''; // Clear previous content
        
        // Filter attractions based on selected category
        const filteredAttractions = filterValue === 'all' 
            ? attractions 
            : attractions.filter(attraction => attraction.type === filterValue);
        
        // Create attraction cards and append to container
        filteredAttractions.forEach(attraction => {
            const card = document.createElement('div');
            card.className = 'attraction-card';
            card.dataset.id = attraction.id;
            card.innerHTML = `
                <img src="${attraction.image}" alt="${attraction.name}" class="attraction-image">
                <div class="attraction-content">
                    <span class="attraction-type">${attraction.type}</span>
                    <h3 class="attraction-name">${attraction.name}</h3>
                    <p class="attraction-location"><i class="fas fa-map-marker-alt"></i> ${attraction.location}</p>
                    <p class="attraction-summary">${attraction.summary}</p>
                    <div class="attraction-details">
                        <span class="attraction-hours"><i class="far fa-clock"></i> ${attraction.hours}</span>
                        <span class="view-more"><i class="fas fa-arrow-left"></i> عرض التفاصيل</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
            
            // Add click event to open modal
            card.addEventListener('click', function() {
                openAttractionModal(attraction.id);
            });
        });
    }

    // Function to open attraction modal
    function openAttractionModal(attractionId) {
        const attraction = attractions.find(item => item.id === attractionId);
        if (!attraction) return;
        
        const modal = document.getElementById('attraction-modal');
        const modalContent = document.getElementById('modal-content');
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${attraction.name}</h2>
                <span class="modal-type">${attraction.type}</span>
            </div>
            <img src="${attraction.image}" alt="${attraction.name}" class="modal-image">
            <div class="modal-details">
                <div class="modal-desc">
                    <p>${attraction.description}</p>
                </div>
                <div class="modal-info">
                    <div class="info-item">
                        <span class="info-label"><i class="fas fa-map-marker-alt"></i> الموقع:</span>
                        <span>${attraction.location}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label"><i class="far fa-clock"></i> مواعيد الزيارة:</span>
                        <span>${attraction.hours}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label"><i class="fas fa-ticket-alt"></i> رسوم الدخول:</span>
                        <span>${attraction.entryFee}</span>
                    </div>
                </div>
            </div>
            <div id="map-${attraction.id}" class="map-container"></div>
            <div class="modal-buttons">
                ${attraction.tourLink ? `
                    <a href="${attraction.tourLink}" target="_blank" class="modal-btn">
                        <i class="fas fa-ticket-alt"></i> حجز تذاكر الزيارة
                    </a>
                ` : ''}
                <a href="https://www.google.com/maps/dir/?api=1&destination=${attraction.coordinates[0]},${attraction.coordinates[1]}" target="_blank" class="modal-btn secondary">
                    <i class="fas fa-directions"></i> الاتجاهات
                </a>
            </div>
        `;
        
        modal.style.display = 'block';
        
        // Initialize map
        setTimeout(() => {
            const map = L.map(`map-${attraction.id}`).setView(attraction.coordinates, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker(attraction.coordinates)
                .addTo(map)
                .bindPopup(`<b>${attraction.name}</b><br>${attraction.location}`)
                .openPopup();
        }, 300);
    }

    // Close modal when clicking the X or outside the modal
    const modal = document.getElementById('attraction-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize page with all attractions
    loadAttractions();

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Load attractions based on filter
            loadAttractions(this.getAttribute('data-filter'));
        });
    });
});

