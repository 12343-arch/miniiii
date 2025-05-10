document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.menu-toggle')) {
            navMenu.classList.remove('active');
        }
    });

    // Site-wide Search
    const searchInput = document.getElementById('site-search');
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    document.querySelector('.search-container button').addEventListener('click', function() {
        performSearch(searchInput.value);
    });

    function performSearch(query) {
        if (query.trim() === '') return;
        
        // Redirect to search results page with the query
        alert(`سيتم البحث عن: ${query}`);
        // In a real implementation, we would redirect to a search results page
        // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }

    // Load latest news on homepage
    if (document.querySelector('.news-container')) {
        loadLatestNews();
    }

    // Function to load the latest news (simulated for demo)
    function loadLatestNews() {
        const newsContainer = document.querySelector('.news-container');
        if (!newsContainer) return;
        
        // Sample news data (in a real app, this would come from an API or database)
        const latestNews = [
            {
                title: "شون وصوامع المنيا تستقبل 230 ألف طن من القمح",
                category: "زراعة",
                date: "10 مايو 2025",
                image: "news-1.png",
                summary: "استقبلت محافظة المنيا 230,497 طنًا من محصول القمح ضمن موسم التوريد عبر 42 موقعًا في جميع المراكز."
            },
            {
                title: "«شديد الحرارة».. طقس المنيا وشمال الصعيد",
                category: "طقس",
                date: "10 مايو 2025",
                image: "news-2.png",
                summary: "تشهد محافظة المنيا ومنطقة شمال الصعيد درجات حرارة تتجاوز 42 درجة مئوية خلال النهار، مع تحذيرات من موجة حارة مستمرة."
            },
            {
                title: "محافظ المنيا: نسب إنجاز متميزة في التعامل مع شكاوى المواطنين",
                category: "تنمية",
                date: "9 مايو 2025",
                image: "news-3.png",
                summary: "أعلن محافظ المنيا عن إتمام 784 من 831 شكوى حكومية خلال أبريل 2025، بنسبة إنجاز عالية تصل إلى 94%."
            }
        ];

        // Create and append news items to the container
        latestNews.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <span class="news-category">${news.category}</span>
                    <h3>${news.title}</h3>
                    <div class="news-date">${news.date}</div>
                    <p>${news.summary}</p>
                    <a href="news.html" class="btn-small">اقرأ المزيد</a>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // Chat Bot
    const chatBotToggle = document.getElementById('chat-bot-toggle');
    const chatBotContainer = document.getElementById('chat-bot-container');
    const closeChat = document.getElementById('close-chat-bot');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendMessageBtn = document.getElementById('send-message');
    
    // Chat bot knowledge base (expanded)
    const knowledgeBase = {
        schools: {
            keywords: ['مدرسة', 'مدارس', 'التعليم', 'دراسة', 'طلاب', 'معاهد', 'جامعات', 'كليات', 'مؤسسات تعليمية'],
            responses: [
                "المنيا فيها أكتر من 1135 مدرسة عامة وخاصة، متوزعة على كل المراكز والقرى، تقدر تختار بنفسك من المدارس الحكومي والخاص والدولي كمان!",
                "جامعة المنيا الحكومية فيها 17 كلية متنوعة، وكمان عندنا جامعات خاصة زي جامعة اللوتس وجامعة المنيا الأهلية للي حابب التعليم الخاص.",
                "فيه معاهد عليا كتير في المنيا بتغطي مجالات زي الهندسة، تكنولوجيا الإدارة والمعلومات، الإعلام، الصحة التطبيقية، واللغات.",
                "لو عايز تعرف أكتر عن مدرسة معينة أو دليل المدارس، ممكن تشوف صفحة دليل المدارس على البوابة بتاعتنا.",
                "المؤسسات التعليمية في المنيا بتشمل كل المراحل من ابتدائي لغاية تعليم عالي وفني، سواء حكومي أو خاص أو دولي."
            ]
        },
        personalities: {
            keywords: ['شخصيات', 'مشاهير', 'مشهورين', 'فنانين', 'علماء', 'أدباء', 'رياضيين', 'سياسيين', 'طه حسين', 'عمار الشريعي', 'ميرفت أمين', 'هدى شعراوي', 'عبد الحكيم عامر', 'علاء ولي الدين', 'وليد سليمان', 'زيزو'],
            responses: [
                "المنيا خرّجت شخصيات عظيمة أثرت في مصر والعالم العربي! زي عميد الأدب العربي طه حسين، والموسيقار المبدع عمار الشريعي، ورائدة النهضة النسائية هدى شعراوي.",
                "من ولاد المنيا البارزين أيضاً: المشير عبد الحكيم عامر، والفنانين الكبار ميرفت أمين وعلاء ولي الدين، والنجوم الرياضيين وليد سليمان وزيزو.",
                "تاريخ المنيا مليان بشخصيات لامعة في كل المجالات، الأدب، الفن، السياسة، الرياضة، وغيرها.",
                "لو عايز تعرف تفاصيل أكتر عن أي شخصية، ممكن تشوف صفحة الشخصيات البارزة في البوابة."
            ]
        },
        attractions: {
            keywords: ['سياحة', 'آثار', 'معالم', 'أثرية', 'تاريخية', 'بني حسن', 'تونة', 'تونا', 'تل العمارنة', 'زيارة', 'متحف', 'أشمونين', 'البهنسا', 'دير', 'كهف سنور', 'مسجد', 'قصر ثقافة', 'كورنيش النيل'],
            responses: [
                "آثار المنيا كنوز حقيقية! عندنا مقابر بني حسن اللي بتحكي حكايات الدولة الوسطى، وتونة الجبل بجباناتها الفريدة.",
                "متنساش تزور تل العمارنة، عاصمة الملك إخناتون، والأشمونين اللي بتجمع آثار من عصور كتير.",
                "عندنا كمان معالم دينية وتاريخية مهمة زي دير السيدة العذراء بجبل الطير، ودير أبو فانا، وكمان منطقة البهنسا اللي فيها قبور الصحابة.",
                "لو بتحب الطبيعة، كهف سنور فيه تكوينات جيولوجية مبهرة تستاهل تشوفها.",
                "المنيا مش بس آثار! كورنيش النيل وقصر الثقافة من الأماكن الجميلة اللي ممكن تستمتع بيها في المدينة.",
                "كل التفاصيل عن المعالم دي ومواعيد الزيارة ورسوم الدخول موجودة في صفحة المعالم السياحية على البوابة."
            ]
        },
        news: {
            keywords: ['أخبار', 'جديد', 'حدث', 'فعاليات', 'محافظ', 'عاجل', 'صحة', 'تعليم', 'تنمية', 'طقس', 'زراعة'],
            responses: [
                "آخر أخبار المنيا! المحافظ اعتمد جداول امتحانات الشهادة الإعدادية، والامتحانات هتبدأ قريب.",
                "فيه حملات مستمرة لإزالة التعديات على الأراضي الزراعية وأملاك الدولة في إطار فرض هيبة الدولة.",
                "مديرية الصحة بتطلق حملات توعية من أمراض الصيف في القرى.",
                "تم افتتاح مدارس جديدة في القرى ضمن مبادرة حياة كريمة لتطوير التعليم.",
                "البعثات الأثرية بتكتشف مقابر جديدة في تونا الجبل، وده بيأكد أهمية المنيا الأثرية.",
                "موسم حصاد الذرة الصفراء بدأ والمزارعين متوقعين إنتاج كبير السنة دي.",
                "لو عايز تعرف آخر الأخبار والفعاليات أول بأول، زور صفحة الأخبار على البوابة بتاعتنا."
            ]
        },
        jobs: {
            keywords: ['وظائف', 'شغل', 'فرص عمل', 'توظيف', 'مطلوب', 'شركات', 'راتب', 'مرتب'],
            responses: [
                "فيه فرص عمل متاحة في المنيا دلوقتي! زي وظايف في شركات Ascom وJunior-Tex وDelta Textile Egypt.",
                "فيه كمان فرص شغل في مبادرات حكومية لدعم المشروعات الصغيرة.",
                "أفضل طريقة تتابع بيها فرص العمل هي من خلال بوابات التوظيف الإلكترونية أو موقع وزارة العمل.",
                "لو عايز تعرف تفاصيل أكتر عن الوظايف المتاحة دلوقتي، ممكن تشوف صفحة فرص العمل على البوابة."
            ]
        },
        services: {
            keywords: ['خدمات', 'حكومة', 'إلكتروني', 'أوراق', 'استخراج', 'شهادة', 'فواتير', 'دفع', 'بوابة مصر الرقمية', 'ترخيص', 'حجز مواعيد'],
            responses: [
                "خدمات حكومية كتير بقت متاحة أونلاين من بوابة مصر الرقمية! ممكن تطلع شهادات، تدفع فواتير مياه وكهرباء، وغيرها.",
                "محافظة المنيا كمان بتوفر خدمات إلكترونية محلية لطلبات التراخيص وشكاوى المواطنين وحجز مواعيد المستشفيات.",
                "الخدمات دي بتسهل كتير على المواطنين وبتوفر وقت ومجهود. ممكن تشوف صفحة الخدمات الإلكترونية للمواطنين على البوابة."
            ]
        },
        agriculture: {
            keywords: ['زراعة', 'محاصيل', 'فلاحة', 'قمح', 'ذرة', 'أرض زراعية', 'استثمار زراعي', 'صناعة', 'مصانع', 'ثروة حيوانية'],
            responses: [
                "الزراعة هي أساس الاقتصاد في المنيا! عندنا مساحات كبيرة مزروعة بالقمح والذرة والعنب، محافظتنا من أكبر المحافظات المنتجة للعنب.",
                "الصناعات في المنيا مرتبطة بالزراعة والثروة الحيوانية، زي مصانع الألبان والأعلاف والغزل والنسيج.",
                "فيه فرص استثمار كبيرة في القطاع الزراعي والصناعي بالمنيا، الدولة بتدعم مشاريع الاستصلاح والتنمية.",
                "لو عايز تعرف أكتر عن الزراعة والصناعة في المنيا وفرص الاستثمار، ممكن تشوف صفحة الزراعة والصناعة على البوابة."
            ]
        },
        history: {
            keywords: ['تاريخ المنيا', 'العصر الفرعوني', 'اليوناني', 'الروماني', 'القبطي', 'الإسلامي', 'أخيتاتون', 'ثورة 1919', 'عيد المنيا القومي'],
            responses: [
                "تاريخ المنيا يمتد لآلاف السنين، وشافت حضارات كتير من العصر الفرعوني لغاية وقتنا الحالي.",
                "في العصر الفرعوني، كانت المنيا مهمة جداً. تل العمارنة كانت عاصمة إخناتون، وبني حسن وتونا الجبل فيهم مقابر وآثار فرعونية مهمة.",
                "بعد كده، جت العصور اليونانية والرومانية، وسابوا آثارهم في الأشمونين والشيخ عبادة (أنتينوبوليس).",
                "في العصر القبطي، المنيا كانت مركز مهم للمسيحية وفيها أديرة تاريخية قديمة جداً زي دير السيدة العذراء بجبل الطير ودير أبو فانا.",
                "أما في العصر الإسلامي، البهنسا اشتهرت بوجود قبور كتير من الصحابة، وده خلاها مزار مهم.",
                "المنيا ليها دور كبير في تاريخ مصر الحديث كمان، أهلها شاركوا بقوة في ثورة 1919، وده السبب إن يوم 18 مارس بقى عيدها القومي.",
                "لو عايز تعرف أكتر عن العصور التاريخية والمعالم المرتبطة بيها، ممكن تلاقي معلومات في صفحات الآثار والمواضيع العامة."
            ]
        },
        general: {
            keywords: ['المنيا', 'محافظة', 'صعيد', 'عروس الصعيد', 'مصر', 'مرحبا', 'اهلا', 'مين انت', 'معلومات عامة', 'موقع جغرافي', 'مساحة', 'عدد السكان'],
            responses: [
                "أهلا بيك في المنيا، عروس الصعيد! أنا منيا AI، مساعدك الرقمي اللي هيعرفك على كل حاجة في محافظتنا الجميلة.",
                "أنا بوت ذكي موجود هنا عشان أجاوب على أسئلتك عن محافظة المنيا. اسألني عن تاريخها، آثارها، خدماتها، أي حاجة تخطر في بالك!",
                "المنيا دي محافظة عظيمة في قلب صعيد مصر، ليها موقع متميز على النيل وتاريخ وحضارة عريقة.",
                "مساحة المنيا حوالي 32,279 كيلومتر مربع، وعدد سكانها حالياً يقدر بـ 6.4 مليون نسمة.",
                "بتتكون محافظة المنيا من 9 مراكز إدارية رئيسية، كل مركز له طابعه الخاص.",
                "لو عايز تعرف إيه يميز المنيا، هي مزيج من التاريخ الفرعوني، اليوناني، الروماني، القبطي، والإسلامي، بالإضافة لزراعتها الغنية وناسها الطيبين."
            ]
        },
        fallback: {
            keywords: [], // No keywords, this is the fallback
            responses: [
                "معلش مفهمتش قصدك.. ممكن توضح أكتر عايز تعرف إيه عن المنيا؟",
                "أنا لسه بتعلم! ممكن تسألني عن المدارس، الشخصيات المشهورة، المعالم السياحية، الوظائف، أو أي حاجة تانية عايز تعرفها عن المحافظة!",
                "سؤال حلو، بس معنديش معلومات كافية عشان أجاوب عليه دلوقتي. حاول تسأل عن المعالم السياحية أو الخدمات أو التعليم في المنيا!",
                "Hmm, مش متأكد إني فهمت سؤالك كويس. جرب تسأل بطريقة مختلفة أو عن موضوع محدد زي الآثار أو التعليم."
            ]
        }
    };
    
    // Toggle chat bot visibility
    chatBotToggle.addEventListener('click', function() {
        chatBotContainer.style.display = 'flex';
        chatBotToggle.style.display = 'none';
        
        // Add initial welcome message if chat is empty
        if (chatMessages.children.length === 0) {
            addBotMessage("أهلاً بيك! أنا منيا AI، المساعد الذكي لمحافظة المنيا. اسألني عن المدارس، الشخصيات المشهورة، المعالم السياحية، الأخبار، التاريخ، أو أي حاجة تانية عايز تعرفها عن المحافظة!");
        }
    });
    
    // Close chat bot
    closeChat.addEventListener('click', function() {
        chatBotContainer.style.display = 'none';
        chatBotToggle.style.display = 'block';
    });
    
    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        
        // Get response from bot
        const response = getBotResponse(message);
        
        // Add bot message with slight delay to feel more natural
        setTimeout(() => {
            addBotMessage(response);
        }, 800);
        
        // Clear input field
        chatInput.value = '';
    }
    
    // Send message on button click
    sendMessageBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Add user message to chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Add bot message to chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Get bot response based on user query (improved)
    function getBotResponse(query) {
        const lowerQuery = query.toLowerCase();
        
        // Rank categories based on keyword matches
        const categoryScores = {};
        for (const category in knowledgeBase) {
            if (category === 'fallback') continue; // Skip fallback
            categoryScores[category] = 0;
            knowledgeBase[category].keywords.forEach(keyword => {
                if (lowerQuery.includes(keyword.toLowerCase())) {
                    categoryScores[category]++;
                }
            });
        }
        
        // Find the category with the highest score
        let bestMatchCategory = null;
        let maxScore = 0;
        for (const category in categoryScores) {
            if (categoryScores[category] > maxScore) {
                maxScore = categoryScores[category];
                bestMatchCategory = category;
            }
        }
        
        // If a category matches with at least one keyword, return a random response from it
        if (bestMatchCategory && maxScore > 0) {
            const responses = knowledgeBase[bestMatchCategory].responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
        
        // If no strong match, return a fallback response
        const fallbackResponses = knowledgeBase['fallback'].responses;
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
});