document.addEventListener('DOMContentLoaded', function() {
    // Array of personalities data
    const personalities = [
        {
            name: "طه حسين",
            image: "taha-hussein.png",
            birthplace: "عزبة الكيلو – مغاغة",
            birthdate: "1889 - 1973",
            field: "أدب",
            bio: "عميد الأدب العربي وأحد أبرز المفكرين العرب في القرن العشرين. فقد بصره في صغره لكنه تحدى الإعاقة ونال درجة الدكتوراه من جامعة السوربون، وترأس الجامعة المصرية وشغل منصب وزير المعارف. من أشهر أعماله الأيام، دعاء الكروان، وعلى هامش السيرة.",
            source: "https://ar.wikipedia.org/wiki/طه_حسين"
        },
        {
            name: "المشير عبد الحكيم عامر",
            image: "abdel-hakim-amer.png",
            birthplace: "أسطال – سمالوط",
            birthdate: "1919 - 1967",
            field: "عسكري",
            bio: "قائد عسكري مصري بارز، شغل منصب وزير الحربية ونائب القائد العام للقوات المسلحة. كان صديقاً مقرباً للرئيس جمال عبد الناصر وشارك في ثورة 23 يوليو 1952. تولى قيادة الجيش المصري في حرب 1956 وحتى هزيمة 1967.",
            source: "https://ar.wikipedia.org/wiki/عبد_الحكيم_عامر"
        },
        {
            name: "عمار الشريعي",
            image: "ammar-elsherei.png",
            birthplace: "سمالوط",
            birthdate: "1948 - 2012",
            field: "فن",
            bio: "موسيقار مصري شهير وملحن مبدع، يعتبر أحد أهم الموسيقيين العرب في القرن العشرين. رغم فقدانه البصر، ألف أكثر من 150 أغنية وموسيقى تصويرية للعديد من الأفلام والمسلسلات التلفزيونية. من أشهر ألحانه 'أنا وأنت' لعلي الحجار و'قارئة الفنجان' لعبد الحليم حافظ.",
            source: "https://ar.wikipedia.org/wiki/عمار_الشريعي"
        },
        {
            name: "هدى شعراوي",
            image: "hoda-shaarawi.png",
            birthplace: "زاوية سلطان",
            birthdate: "1879 - 1947",
            field: "سياسة",
            bio: "رائدة النهضة النسائية في مصر والعالم العربي، ومؤسسة الاتحاد النسائي المصري. قادت أول مظاهرة نسائية في تاريخ مصر عام 1919، وخلعت الحجاب رمزياً في محطة القطار بالقاهرة عام 1923. كافحت من أجل حقوق المرأة في التعليم والعمل والمشاركة السياسية.",
            source: "https://ar.wikipedia.org/wiki/هدى_شعراوي"
        },
        {
            name: "ميرفت أمين",
            image: "mervat-amin.png",
            birthplace: "المنيا",
            birthdate: "1948",
            field: "فن",
            bio: "ممثلة مصرية شهيرة ومن أبرز نجمات السينما المصرية، قدمت أكثر من 100 فيلم سينمائي والعديد من المسلسلات التلفزيونية. بدأت مسيرتها الفنية في الستينيات وحصلت على العديد من الجوائز عن أعمالها مثل 'خلي بالك من زوزو' و'السفيرة عزيزة'.",
            source: "https://ar.wikipedia.org/wiki/ميرفت_أمين"
        },
        {
            name: "علاء ولي الدين",
            image: "alaa-waley-eldin.png",
            birthplace: "المنيا",
            birthdate: "1963 - 2003",
            field: "فن",
            bio: "ممثل كوميدي مصري بارز، ترك بصمة مميزة في السينما المصرية رغم رحيله المبكر. اشتهر بأدوار الشاب البسيط ابن البلد وقدم العديد من الأفلام الناجحة مثل 'أبو الأرانب'، 'صعيدي في الجامعة الأمريكية'، و'عبود على الحدود'.",
            source: "https://ar.wikipedia.org/wiki/علاء_ولي_الدين"
        },
        {
            name: "وليد سليمان",
            image: "walid-soliman.png",
            birthplace: "المنيا",
            birthdate: "1984",
            field: "رياضة",
            bio: "لاعب كرة قدم مصري محترف، يلعب في مركز صانع الألعاب. بدأ مسيرته في نادي إنبي ثم انتقل للنادي الأهلي حيث حقق معه العديد من البطولات المحلية والقارية. يعتبر من أهم اللاعبين في تاريخ النادي الأهلي الحديث وأحد أفضل صناع اللعب في مصر.",
            source: "https://ar.wikipedia.org/wiki/وليد_سليمان"
        },
        {
            name: "أحمد سيد زيزو",
            image: "zizo.png",
            birthplace: "المنيا",
            birthdate: "1996",
            field: "رياضة",
            bio: "لاعب كرة قدم مصري دولي، يلعب في مركز الجناح. بدأ مسيرته مع نادي المقاولون العرب ثم انتقل للزمالك حيث برز بشكل كبير. يتميز بمهاراته العالية ومراوغاته وقدرته على التسديد. شارك مع المنتخب المصري في عدة بطولات دولية وأصبح أحد ركائز الفريق الأساسية.",
            source: "https://ar.wikipedia.org/wiki/أحمد_سيد_زيزو"
        }
    ];

    // Function to load personalities
    function loadPersonalities(filterValue = 'all') {
        const container = document.getElementById('personalities-container');
        container.innerHTML = ''; // Clear previous content
        
        // Filter personalities based on selected category
        const filteredPersonalities = filterValue === 'all' 
            ? personalities 
            : personalities.filter(person => person.field === filterValue);
        
        // Create personality cards and append to container
        filteredPersonalities.forEach(person => {
            const card = document.createElement('div');
            card.className = 'personality-card';
            card.innerHTML = `
                <img src="${person.image}" alt="${person.name}" class="personality-image">
                <div class="personality-content">
                    <h3 class="personality-name">${person.name}</h3>
                    <p class="personality-birthplace">${person.birthplace} (${person.birthdate})</p>
                    <span class="personality-field">${person.field}</span>
                    <p class="personality-bio">${person.bio}</p>
                    <a href="${person.source}" target="_blank" class="personality-source">
                        <i class="fas fa-external-link-alt"></i> المصدر: ويكيبيديا
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Initialize page with all personalities
    loadPersonalities();

    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Load personalities based on filter
            loadPersonalities(this.getAttribute('data-filter'));
        });
    });
});

