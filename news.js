document.addEventListener('DOMContentLoaded', function() {
    // Array of news data
    const newsData = [
        {
            id: 1,
            title: "شون وصوامع المنيا تستقبل 230 ألف طن من القمح",
            category: "زراعة",
            date: "10 مايو 2025",
            image: "news-1.png",
            summary: "استقبلت محافظة المنيا 230,497 طنًا من محصول القمح المحلي الموريد من المزارعين، منذ بدء موسم التوريد يوم 15 أبريل الماضي وحتى الآن.",
            content: `<p>أعلن اللواء أسامة القاضي محافظ المنيا، استقبال شون وصوامع المحافظة كمية 230 ألفًا و497 طنًا من محصول القمح المحلي الموريد من المزارعين، منذ بدء موسم توريد القمح المحلي يوم 15 أبريل الماضي وحتى الآن.</p>
            <p>وأوضح المحافظ، أن التوريد يتم من خلال 42 موقعًا في جميع مراكز ومدن المحافظة، مشيرًا إلى أن الكميات الموردة تزداد يومًا بعد يومًا، حيث وصلت الكميات الموردة إلى 95% من المستهدف توريدها، مؤكدًا أنه يتم تسهيل عملية توريد الأقماح من المزارعين ومواصلة العمل لمدة 12 ساعة يوميًا حتى الانتهاء من توريد الإنتاج المتوقع.</p>
            <p>وأشار إلى أن هذا الإنجاز يأتي في إطار توجيهات القيادة السياسية بسرعة الاستجابة لشكاوى المواطنين وتنفيذاً للتوجيهات الحكومية.</p>`,
            source: "Maspero",
            sourceLink: "https://www.maspero.eg/",
            tags: ["قمح", "زراعة", "توريد", "محصول", "المنيا"],
            related: [2, 5, 8]
        },
        {
            id: 2,
            title: "«شديد الحرارة».. طقس المنيا وشمال الصعيد",
            category: "طقس",
            date: "10 مايو 2025",
            image: "news-2.png",
            summary: "تشهد محافظة المنيا ومنطقة شمال الصعيد درجات حرارة تتجاوز 42 درجة مئوية خلال النهار، مع تحذيرات من موجة حارة مستمرة.",
            content: `<p>تتعرض محافظة المنيا ومنطقة شمال الصعيد لموجة حارة شديدة الحرارة هذه الأيام، حيث أعلنت هيئة الأرصاد الجوية أن درجات الحرارة ستتجاوز 42 درجة مئوية خلال ساعات النهار، وتنخفض تدريجيًا في المساء لتصل إلى 26 درجة مئوية.</p>
            <p>وأوضح خبراء الأرصاد أن الموجة الحارة ستستمر حتى نهاية الأسبوع الجاري، مع احتمالية انخفاض طفيف في درجات الحرارة بداية الأسبوع المقبل.</p>
            <p>وأشار خبراء الأرصاد إلى أن الموجة الحارة ستستمر حتى نهاية الأسبوع الجاري، مع احتمالية انخفاض طفيف في درجات الحرارة بداية الأسبوع المقبل.</p>
            <p>ونصحت مديرية الصحة بالمنيا المواطنين بتجنب التعرض المباشر لأشعة الشمس خاصة في ساعات الذروة من الساعة 11 صباحًا حتى 3 عصرًا، وشرب كميات وفيرة من السوائل، والاهتمام بكبار السن والأطفال، وتجنب ممارسة الرياضة في الأماكن المكشوفة خلال هذه الفترة.</p>`,
            source: "Al-Masry Al-Youm",
            sourceLink: "https://www.almasryalyoum.com/",
            tags: ["طقس", "موجة حارة", "صيف", "المنيا", "درجات حرارة"],
            related: [6, 9, 10]
        },
        {
            id: 3,
            title: "محافظ المنيا: نسب إنجاز متميزة في التعامل مع شكاوى المواطنين",
            category: "تنمية",
            date: "9 مايو 2025",
            image: "news-3.png",
            summary: "أعلن محافظ المنيا عن إتمام 784 من 831 شكوى حكومية خلال أبريل 2025، بنسبة إنجاز عالية تصل إلى 94%.",
            content: `<p>أكد اللواء أسامة القاضي محافظ المنيا، على تحقيق نسب إنجاز متميزة في التعامل مع شكاوى المواطنين الواردة من منظومة الشكاوى الحكومية الموحدة خلال شهر أبريل 2025، حيث تم إنجاز 784 شكوى من إجمالي 831 شكوى واردة للمحافظة بنسبة إنجاز 94%.</p>
            <p>وأوضح المحافظ أن هذا الإنجاز يأتي في إطار توجيهات القيادة السياسية بسرعة الاستجابة لشكاوى المواطنين ومتابعة إنجازها بالتنسيق مع الجهات المعنية. وشدد المحافظ على ضرورة سرعة الاستجابة للشكاوى خاصة في المجالات الخدمية الملحة.</p>
            <p>وأشار إلى أن مركز خدمة المواطنين بديوان عام المحافظة يعمل على استقبال شكاوى المواطنين ومتابعة إنجازها بالتنسيق مع الجهات المعنية. وشدد المحافظ على ضرورة سرعة الاستجابة للشكاوى خاصة في المجالات الخدمية الملحة.</p>`,
            source: "اليوم السابع",
            sourceLink: "https://www.youm7.com/",
            tags: ["محافظ المنيا", "شكاوى", "خدمات", "إنجازات", "ديوان المحافظة"],
            related: [5, 7, 8]
        },
        {
            id: 4,
            title: "حريق في منزل ببني مزار والسيطرة عليه دون خسائر بشرية",
            category: "حوادث",
            date: "10 مايو 2025",
            image: "news-3.png",
            summary: "اندلع حريق في منزل ببني مزار، ونجحت قوات الحماية المدنية في إخماده فورًا دون وقوع إصابات بشرية.",
            content: `<p>اندلع حريق في منزل ببني مزار. وتلقى مركز العمليات بالمحافظة بلاغًا باندلاع حريق في منزل بشارع السلام، وعلى الفور، انتقلت 3 سيارات إطفاء إلى مكان الحريق وتمت السيطرة عليه قبل امتداده للمباني المجاورة.</p>
            <p>وأسفر الحريق عن احتراق بعض محتويات المنزل دون وقوع خسائر بشرية، وتم تحرير محضر بالواقعة والتحقيق في أسباب الحريق الذي يُرجح أنه ناتج عن ماس كهربائي.</p>`,
            source: "نيوز رووم",
            sourceLink: "https://newsroom.com/",
            tags: ["حريق", "بني مزار", "حماية مدنية", "حوادث", "إطفاء"],
            related: [6, 9, 10]
        },
        {
            id: 5,
            title: "محافظ المنيا: إزالة التعديات على الأراضي الزراعية وأملاك الدولة",
            category: "تنمية",
            date: "10 مايو 2025",
            image: "news-2.png",
            summary: "تابع محافظ المنيا جهود إزالة التعديات على الأراضي الزراعية وأملاك الدولة بمختلف مراكز المحافظة ضمن الموجة الـ26.",
            content: `<p>تابع اللواء أسامة القاضي محافظ المنيا، جهود تنفيذ الموجة الـ26 لإزالة التعديات على الأراضي الزراعية وأملاك الدولة بمختلف مراكز المحافظة.</p>
            <p>وأوضح المحافظ أن حملات الإزالة تتم بالتنسيق بين مديرية الزراعة ومديرية أمن المنيا والوحدات المحلية، مؤكدًا على استمرار الحملات للقضاء على ظاهرة التعدي على الأراضي الزراعية وأملاك الدولة.</p>
            <p>وأشار إلى أن إجمالي التعديات التي تمت إزالتها خلال الموجة الحالية بلغ 185 حالة تعدٍ، منها 120 حالة تعدٍ على الأراضي الزراعية بإجمالي مساحة 15 فدانًا، و65 حالة تعدٍ على أملاك الدولة.</p>
            <p>وشدد المحافظ على التصدي الفوري والحاسم لأي محاولات تعدٍ جديدة، واتخاذ الإجراءات القانونية ضد المخالفين وتشديد الرقابة على كافة الأراضي الزراعية وأملاك الدولة.</p>`,
            source: "El Watan News",
            sourceLink: "https://www.elwatannews.com/",
            tags: ["تعديات", "أراضي زراعية", "أملاك دولة", "محافظ المنيا", "إزالات"],
            related: [1, 3, 7]
        },
        {
            id: 6,
            title: "الصحة تطلق حملة توعية من أمراض الصيف في قرى المنيا",
            category: "صحة",
            date: "9 مايو 2025",
            image: "news-1.png",
            summary: "أطلقت مديرية الصحة بالمنيا حملة توعية صحية في قرى المحافظة للوقاية من أمراض الصيف وخاصة الأمراض المنقولة عبر الطعام والمياه والناموس.",
            content: `<p>أطلقت مديرية الصحة بالمنيا حملة توعية صحية شاملة في قرى المحافظة للوقاية من أمراض الصيف، وخاصة الأمراض المنقولة عبر الطعام والمياه والناموس، في ظل ارتفاع درجات الحرارة التي تشهدها المحافظة هذه الأيام.</p>
            <p>وأوضح الدكتور محمد عبدالمنعم وكيل وزارة الصحة بالمنيا، إن الحملة تستهدف رفع الوعي الصحي لدى المواطنين وخاصة في المناطق الريفية، وتتضمن تنظيم قوافل طبية تجوب القرى والنجوع، وعقد ندوات توعوية في الوحدات الصحية والمراكز الطبية.</p>
            <p>وأضاف أن الحملة تركز على التوعية بطرق الوقاية من الإصابة بالنزلات المعوية والتسمم الغذائي وضربات الشمس وحمى الضنك، وكيفية التعامل مع الحالات الطارئة، مشيرًا إلى أن الحملة ستستمر طوال فصل الصيف.</p>
            <p>وأشار إلى أن هناك توجيهات من وزارة الصحة بزيادة الأنشطة الصحية والترفيهية في المدارس والقرى، ودور الرعاية الصحية الأولية، و特别 خلال فصلي الصيف والربيع.</p>`,
            source: "وزارة الصحة",
            sourceLink: "https://www.mohp.gov.eg/",
            tags: ["صحة", "توعية", "أمراض الصيف", "حملات طبية", "وقاية"],
            related: [2, 4, 9]
        },
        {
            id: 7,
            title: "افتتاح 5 مدارس جديدة في قرى المنيا",
            category: "تعليم",
            date: "8 مايو 2025",
            image: "news-3.png",
            summary: "افتتح محافظ المنيا 5 مدارس جديدة في قرى المحافظة ضمن مبادرة حياة كريمة، بتكلفة إجمالية بلغت 80 مليون جنيه.",
            content: `<p>افتتح اللواء أسامة القاضي محافظ المنيا، 5 مدارس جديدة في قرى المحافظة ضمن مبادرة "حياة كريمة" لتطوير الريف المصري، بتكلفة إجمالية بلغت 80 مليون جنيه.</p>
            <p>وأوضح المحافظ أن المدارس الجديدة تم توزيعها على قرى تعاني من كثافة طلابية عالية في مراكز أبو قرقاص وملوي وسمالوط ودير مواس، مشيرًا إلى أن المدارس مجهزة بأحدث الوسائل التعليمية والتكنولوجية.</p>
            <p>وأكد أن افتتاح هذه المدارس يأتي في إطار اهتمام الدولة بتطوير التعليم في المناطق الريفية والنائية، وتوفير بيئة تعليمية مناسبة للطلاب، لافتًا إلى أن المدارس الجديدة ستسهم في تقليل الكثافة الطلابية وتحسين جودة العملية التعليمية.</p>
            <p>وأشار المحافظ إلى أن هناك خطة لافتتاح 10 مدارس أخرى بمختلف مراكز المحافظة خلال العام الدراسي المقبل، ضمن المرحلة الثانية من مبادرة "حياة كريمة".</p>`,
            source: "وزارة التربية والتعليم",
            sourceLink: "https://moe.gov.eg/",
            tags: ["تعليم", "مدارس", "حياة كريمة", "تطوير", "قرى المنيا"],
            related: [3, 5, 8]
        },
        {
            id: 8,
            title: "اكتشاف مقبرة أثرية ترجع للعصر البطلمي في منطقة تونا الجبل",
            category: "آثار",
            date: "7 مايو 2025",
            image: "news-1.png",
            summary: "اكتشفت البعثة المصرية الألمانية المشتركة مقبرة أثرية ترجع للعصر البطلمي في منطقة تونا الجبل جنوب المنيا.",
            content: `<p>كشفت البعثة الأثرية المصرية الألمانية المشتركة عن اكتشاف مقبرة أثرية ترجع للعصر البطلمي في منطقة تونا الجبل بمحافظة المنيا.</p>
            <p>وقال الدكتور مصطفى وزيري الأمين العام للمجلس الأعلى للآثار، إن المقبرة المكتشفة تتكون من بئر للدفن يؤدي إلى غرفة جنائزية رئيسية تتفرع منها عدة حجرات جانبية، وعثر بداخلها على 4 توابيت حجرية عليها نقوش هيروغليفية وعدد من الأواني الكانوبية وتماثيل للإله أوزوريس.</p>
            <p>وأضاف أن أهمية هذا الاكتشاف تكمن في أنه يلقي الضوء على طقوس الدفن خلال العصر البطلمي، ويكشف عن تفاصيل جديدة حول الحالة الاجتماعية والدينية في تلك الفترة.</p>
            <p>وأشار إلى أن أعمال الحفائر والدراسة مستمرة في الموقع للكشف عن المزيد من الآثار، موضحًا أن المنطقة غنية بالآثار المصرية القديمة من مختلف العصور.</p>`,
            source: "وزارة السياحة والآثار",
            sourceLink: "https://www.antiquities.gov.eg/",
            tags: ["آثار", "اكتشاف", "تونا الجبل", "العصر البطلمي", "مقابر"],
            related: [1, 5, 10]
        },
        {
            id: 9,
            title: "انطلاق فعاليات المهرجان الرياضي السنوي للمدارس الابتدائية بالمنيا",
            category: "رياضة",
            date: "6 مايو 2025",
            image: "news-2.png",
            summary: "انطلقت فعاليات المهرجان الرياضي السنوي للمدارس الابتدائية بمحافظة المنيا بمشاركة أكثر من 200 مدرسة من مختلف الإدارات التعليمية.",
            content: `<p>انطلقت اليوم فعاليات المهرجان الرياضي السنوي للمدارس الابتدائية بمحافظة المنيا، بمشاركة أكثر من 200 مدرسة من مختلف الإدارات التعليمية بالمحافظة.</p>
            <p>وافتتح فعاليات المهرجان الذي تنظمه مديرية التربية والتعليم بالمنيا، بحضور الدكتور رضا حجازي وزير التربية والتعليم، ومديري الإدارات التعليمية.</p>
            <p>ويتضمن المهرجان منافسات في مختلف الألعاب الرياضية الفردية والجماعية، ومنها كرة القدم والسلة والطائرة وألعاب القوى والسباحة، بالإضافة إلى عروض فنية وثقافية يقدمها طلاب المدارس المشاركة.</p>
            <p>وأكد وزير التربية والتعليم على أهمية الرياضة المدرسية في اكتشاف المواهب الرياضية في سن مبكرة، وتوفير بيئة صحية ومتنوعة لتنمية قدرات الطلاب.</p>`,
            source: "وزارة التربية والتعليم",
            sourceLink: "https://moe.gov.eg/",
            tags: ["رياضة", "مدارس", "مهرجان", "أنشطة طلابية", "المنيا"],
            related: [4, 6, 10]
        },
        {
            id: 10,
            title: "بدء موسم حصاد الذرة الصفراء بمحافظة المنيا",
            category: "زراعة",
            date: "5 مايو 2025",
            image: "news-3.png",
            summary: "بدأ مزارعو محافظة المنيا موسم حصاد محصول الذرة الصفراء وسط توقعات بإنتاج وفير هذا العام بفضل الجهود المبذولة لزيادة المساحات المزروعة وتحسين الإنتاجية.",
            content: `<p>بدأ مزارعو محافظة المنيا موسم حصاد محصول الذرة الصفراء وسط توقعات بإنتاج وفير هذا العام بفضل الجهود المبذولة لزيادة المساحات المزروعة وتحسين الإنتاجية.</p>
            <p>وأوضح المهندس محمد عبدالله وكيل وزارة الزراعة بالمنيا، إن المساحة المزروعة بالذرة الصفراء هذا العام بلغت 85 ألف فدان، بزيادة قدرها 10 آلاف فدان عن العام الماضي، متوقعًا أن يصل متوسط إنتاج الفدان إلى 24 أردبا.</p>
            <p>وأضاف أن مديرية الزراعة قدمت الدعم الفني والإرشادي للمزارعين طوال موسم الزراعة، من خلال تنظيم ندوات إرشادية وتوفير التقاوي المحسنة والأسمدة بأسعار مدعمة، مما أسهم في زيادة الإنتاجية وتحسين جودة المحصول.</p>
            <p>وأشار إلى أن هناك خطة لافتتاح 10 مدارس أخرى بمختلف مراكز المحافظة خلال العام الدراسي المقبل، ضمن المرحلة الثانية من مبادرة "حياة كريمة".</p>`,
            source: "وزارة الزراعة",
            sourceLink: "https://www.agr-egypt.gov.eg/",
            tags: ["زراعة", "ذرة صفراء", "حصاد", "محصول", "إنتاج"],
            related: [1, 2, 5]
        }
    ];

    // Function to load news
    function loadNews(page = 1, filter = 'all') {
        const container = document.getElementById('news-container');
        container.innerHTML = ''; // Clear previous content
        
        // Filter news based on selected category
        const filteredNews = filter === 'all' 
            ? newsData 
            : newsData.filter(news => news.category === filter);
        
        // Calculate pagination
        const itemsPerPage = 6;
        const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredNews.length);
        const currentNews = filteredNews.slice(startIndex, endIndex);
        
        // Create news cards and append to container
        currentNews.forEach(news => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.dataset.id = news.id;
            card.innerHTML = `
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</p>
                    <p class="news-summary">${news.summary}</p>
                    <div class="news-footer">
                        <span class="news-source">${news.source}</span>
                        <span class="btn-read-more"><i class="fas fa-arrow-left"></i> اقرأ المزيد</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
            
            // Add click event to open modal
            card.addEventListener('click', function() {
                openNewsModal(news.id);
            });
        });
        
        // Update pagination
        updatePagination(page, totalPages);
    }

    // Function to open news modal
    function openNewsModal(newsId) {
        const news = newsData.find(item => item.id === newsId);
        if (!news) return;
        
        const modal = document.getElementById('news-modal');
        const modalContent = document.getElementById('modal-content');
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <span class="modal-title">${news.title}</span>
                <span class="modal-source">${news.source}</span>
            </div>
            <img src="${news.image}" alt="${news.title}" class="modal-image">
            <div class="modal-content-text">
                ${news.content}
            </div>
            <div class="modal-tags">
                ${news.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            <a href="${news.sourceLink}" target="_blank" class="modal-source-link">
                <i class="fas fa-external-link-alt"></i> المصدر
            </a>
            <div class="modal-share">
                <p class="modal-share-title">مشاركة الخبر:</p>
                <div class="share-buttons">
                    <a href="#" class="share-button share-facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="share-button share-twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="share-button share-whatsapp"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" class="share-button share-telegram"><i class="fab fa-telegram-plane"></i></a>
                </div>
            </div>
            <div class="related-news">
                <h3 class="related-news-title">أخبار ذات صلة</h3>
                <div class="related-news-items">
                    ${news.related.map(relatedId => {
                        const relatedNews = newsData.find(item => item.id === relatedId);
                        return relatedNews ? `
                            <div class="related-news-item" data-id="${relatedNews.id}">
                                <h4 class="related-news-item-title">${relatedNews.title}</h4>
                                <span class="related-news-item-date">${relatedNews.date}</span>
                            </div>
                        ` : '';
                    }).join('')}
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        
        // Add click event to related news items
        const relatedItems = document.querySelectorAll('.related-news-item');
        relatedItems.forEach(item => {
            item.addEventListener('click', function() {
                const relatedId = parseInt(this.dataset.id);
                openNewsModal(relatedId);
            });
        });
    }

    // Function to update pagination
    function updatePagination(currentPage, totalPages) {
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.className = `pagination-button ${currentPage === 1 ? 'disabled' : ''}`;
        prevButton.innerHTML = '<i class="fas fa-chevron-right"></i> السابق';
        if (currentPage > 1) {
            prevButton.addEventListener('click', () => loadNews(currentPage - 1));
        }
        paginationContainer.appendChild(prevButton);
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-button ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => loadNews(i));
            paginationContainer.appendChild(pageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.className = `pagination-button ${currentPage === totalPages ? 'disabled' : ''}`;
        nextButton.innerHTML = 'التالي <i class="fas fa-chevron-left"></i>';
        if (currentPage < totalPages) {
            nextButton.addEventListener('click', () => loadNews(currentPage + 1));
        }
        paginationContainer.appendChild(nextButton);
    }

    // Initialize page with all news
    function loadNews(page = 1, filter = 'all') {
        const container = document.getElementById('news-container');
        container.innerHTML = ''; // Clear previous content
        
        // Filter news based on selected category
        const filteredNews = filter === 'all' 
            ? newsData 
            : newsData.filter(news => news.category === filter));
        
        // Create news cards and append to container
        const currentNewsPage = filteredNews.slice((page - 1) * itemsPerPage, (page - 1) * itemsPerPage + itemsPerPage));
        
        // Create news cards and append to container
        currentNewsPage.forEach(news => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.dataset.id = news.id;
            card.innerHTML = `
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</p>
                    <p class="news-summary">${news.summary}</p>
                    <div class="news-footer">
                        <span class="news-source">${news.source}</span>
                        <span class="btn-read-more"><i class="fas fa-arrow-left"></i> اقرأ المزيد</span>
                    </div>
                </div>
            `;
            container.appendChild(card));
            
            // Add click event to open modal
            card.addEventListener('click', function() {
                openNewsModal(news.id);
            });
        }));
        
        // Update pagination
        updatePagination(page, totalPages());
    }

    // Close modal when clicking the X or outside the modal
    const modal = document.getElementById('news-modal');
    const closeBtn = document.querySelector('.close-modal'));
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Category filter functionality
    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function() {
        loadNews(1, this.value);
    });

    // Search functionality
    const searchInput = document.getElementById('news-search');
    const searchButton = document.getElementById('search-button');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            loadNews(1, categoryFilter.value);
            return;
        }
        
        // Filter by category first if not 'all'
        let searchResults = categoryFilter.value === 'all' 
            ? newsData 
            : newsData.filter(news => news.category === categoryFilter.value));
        
        // Then filter by search term
        searchResults = searchResults.filter(news => 
            news.title.toLowerCase().includes(searchTerm)) || 
            news.summary.toLowerCase().includes(searchTerm)) || 
            news.content.toLowerCase().includes(searchTerm)));
        
        if (searchResults.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search fa-3x"></i>
                    <h3>لا توجد نتائج</h3>
                    <p>لم يتم العثور على أخبار تطابق معايير البحث الخاصة بك. يرجى تجربة كلمات بحث مختلفة أو تصفية أخرى.</p>
                </div>
            `;
            document.getElementById('pagination-container').innerHTML = '';
            return;
        }
        
        // Display search results
        const totalPages = Math.ceil(searchResults.length / itemsPerPage);
        const currentNewsPage = searchResults.slice(0, itemsPerPage));
        
        // Create news cards and append to container
        searchResults.forEach(news => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.dataset.id = news.id;
            card.innerHTML = `
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-date"><i class="far fa-calendar-alt"></i> ${news.date}</p>
                    <p class="news-summary">${news.summary}</p>
                    <div class="news-footer">
                        <span class="news-source">${news.source}</span>
                        <span class="btn-read-more"><i class="fas fa-arrow-left"></i> اقرأ المزيد</span>
                    </div>
                </div>
            `;
            container.appendChild(card));
            
            // Add click event to open modal
            card.addEventListener('click', function() {
                openNewsModal(news.id);
            });
        }));
        
        // Update pagination
        updatePagination(1, totalPages);
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Initialize page with all news
    loadNews();
});