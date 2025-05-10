document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const quizIntro = document.getElementById('quiz-intro');
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const resultsContainer = document.getElementById('results-container');
    const currentQuestionEl = document.getElementById('current-question');
    const totalQuestionsEl = document.getElementById('total-questions');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const retryBtn = document.getElementById('retry-btn');
    const shareBtn = document.getElementById('share-btn');
    const scoreValue = document.getElementById('score-value');
    const resultMessage = document.getElementById('result-message');
    const playResultBtn = document.getElementById('play-result');
    
    // Quiz questions
    const questions = [
        {
            question: 'ما معنى "دَحرُوج" في لهجة المنيا؟',
            options: [
                { label: 'أ', text: 'طوبة' },
                { label: 'ب', text: 'طفل صغير' },
                { label: 'ج', text: 'لفة أو شيء ملفوف' },
                { label: 'د', text: 'عكاز' }
            ],
            correctAnswer: 2, // Index of the correct option (0-based)
            audio: 'dialect_audio_1.mp3' // This would be the audio file for this question
        },
        {
            question: 'الجملة: "هات الكوز واملالي مَيّه"',
            options: [
                { label: 'أ', text: 'هات إبريق ماء' },
                { label: 'ب', text: 'هات كوب شاي' },
                { label: 'ج', text: 'هات وعاء أكل' },
                { label: 'د', text: 'هات العصاية' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_2.mp3'
        },
        {
            question: 'ما المقصود بـ"عَ السِّتَر"؟',
            options: [
                { label: 'أ', text: 'في الخفاء' },
                { label: 'ب', text: 'بحذر' },
                { label: 'ج', text: 'تحت رحمة الله' },
                { label: 'د', text: 'وراء الباب' }
            ],
            correctAnswer: 2,
            audio: 'dialect_audio_3.mp3'
        },
        {
            question: 'الكلمة: "الكوارع"',
            options: [
                { label: 'أ', text: 'لحمة مسلوقة' },
                { label: 'ب', text: 'أرجل الخروف' },
                { label: 'ج', text: 'مشروب شعبي' },
                { label: 'د', text: 'عجينة بلدي' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_4.mp3'
        },
        {
            question: 'الجملة: "هَأكُب شاي في البِرّاد"',
            options: [
                { label: 'أ', text: 'أسكب الشاي في الكوباية' },
                { label: 'ب', text: 'أحط الشاي في البراد' },
                { label: 'ج', text: 'أرمي الشاي' },
                { label: 'د', text: 'أشرب الشاي بسرعة' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_5.mp3'
        },
        {
            question: 'ما معنى "العَتَبَة" في لهجة المنيا؟',
            options: [
                { label: 'أ', text: 'باب البيت' },
                { label: 'ب', text: 'السلم' },
                { label: 'ج', text: 'مدخل البيت' },
                { label: 'د', text: 'الطرقة' }
            ],
            correctAnswer: 2,
            audio: 'dialect_audio_6.mp3'
        },
        {
            question: '"كِفت" معناها إيه؟',
            options: [
                { label: 'أ', text: 'خبطة' },
                { label: 'ب', text: 'ساندويتش' },
                { label: 'ج', text: 'ركبة' },
                { label: 'د', text: 'مشية غريبة' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_7.mp3'
        },
        {
            question: 'الجملة: "العيل دا شَقِي"',
            options: [
                { label: 'أ', text: 'مؤدب' },
                { label: 'ب', text: 'مشاغب' },
                { label: 'ج', text: 'صغير' },
                { label: 'د', text: 'هادئ' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_8.mp3'
        },
        {
            question: 'الكلمة: "دِرْدا"',
            options: [
                { label: 'أ', text: 'سن مكسور' },
                { label: 'ب', text: 'لعبة' },
                { label: 'ج', text: 'حذاء' },
                { label: 'د', text: 'صنية' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_9.mp3'
        },
        {
            question: '"مِش عايز أدوخك" معناها إيه؟',
            options: [
                { label: 'أ', text: 'مش عايزك تتعب' },
                { label: 'ب', text: 'مش عايزك ترقص' },
                { label: 'ج', text: 'مش عايزك تتكلم' },
                { label: 'د', text: 'مش عايز أزعلك' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_10.mp3'
        },
        {
            question: 'الكلمة: "بَسْطة"',
            options: [
                { label: 'أ', text: 'سجادة' },
                { label: 'ب', text: 'طاولة صغيرة' },
                { label: 'ج', text: 'محل بسيط' },
                { label: 'د', text: 'فرشة' }
            ],
            correctAnswer: 2,
            audio: 'dialect_audio_11.mp3'
        },
        {
            question: 'الجملة: "نُجِب العيش من الطَّابونة"',
            options: [
                { label: 'أ', text: 'نشتري العيش من السوق' },
                { label: 'ب', text: 'نشتري العيش من المخبز البلدي' },
                { label: 'ج', text: 'نخبز في البيت' },
                { label: 'د', text: 'نأكل عيش في الفرن' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_12.mp3'
        },
        {
            question: '"مُسَوِّس"',
            options: [
                { label: 'أ', text: 'مسكر زيادة' },
                { label: 'ب', text: 'فيه سوس' },
                { label: 'ج', text: 'متعفن' },
                { label: 'د', text: 'طري جدًا' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_13.mp3'
        },
        {
            question: 'الجملة: "أمك عاتتلك تِرُد المواعين"',
            options: [
                { label: 'أ', text: 'تغسل الصحون' },
                { label: 'ب', text: 'تنظف البيت' },
                { label: 'ج', text: 'تحط الأكل' },
                { label: 'د', text: 'تكنس الأرض' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_14.mp3'
        },
        {
            question: '"يَسْتَرْجِي" معناها إيه؟',
            options: [
                { label: 'أ', text: 'يتشجع' },
                { label: 'ب', text: 'يهرب' },
                { label: 'ج', text: 'يتكلم' },
                { label: 'د', text: 'يِدَّلع' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_15.mp3'
        },
        {
            question: 'الكلمة: "جُلابية"',
            options: [
                { label: 'أ', text: 'حزام' },
                { label: 'ب', text: 'زي رجالي' },
                { label: 'ج', text: 'بنطلون' },
                { label: 'د', text: 'مريلة' }
            ],
            correctAnswer: 1,
            audio: 'dialect_audio_16.mp3'
        },
        {
            question: 'الجملة: "مَتلَتْشِيش الأكل"',
            options: [
                { label: 'أ', text: 'ما تبوظش الأكل' },
                { label: 'ب', text: 'ما تكترش الأكل' },
                { label: 'ج', text: 'ما ترميش الأكل' },
                { label: 'د', text: 'ما تطبخش كتير' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_17.mp3'
        },
        {
            question: 'الكلمة: "هَبُوب"',
            options: [
                { label: 'أ', text: 'ريح شديدة' },
                { label: 'ب', text: 'سحابة' },
                { label: 'ج', text: 'صوت عالي' },
                { label: 'د', text: 'لعبة' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_18.mp3'
        },
        {
            question: 'الجملة: "إحنا ولاد الناحية"',
            options: [
                { label: 'أ', text: 'من نفس المكان' },
                { label: 'ب', text: 'إخوات' },
                { label: 'ج', text: 'جيران' },
                { label: 'د', text: 'أصحاب من المدرسة' }
            ],
            correctAnswer: 0,
            audio: 'dialect_audio_19.mp3'
        },
        {
            question: 'الكلمة: "زَلَط"',
            options: [
                { label: 'أ', text: 'رمل' },
                { label: 'ب', text: 'أحذية' },
                { label: 'ج', text: 'حجارة صغيرة' },
                { label: 'د', text: 'خضار' }
            ],
            correctAnswer: 2,
            audio: 'dialect_audio_20.mp3'
        }
    ];
    
    // Audio files for result messages
    const resultAudios = {
        excellent: 'result_excellent.mp3', // "يا جدعان دا منياوي على أصوله، عشرة على عشرة!"
        average: 'result_average.mp3', // "مش بطّال، بس لسه شوية ع اللهجة المنياوية"
        poor: 'result_poor.mp3' // "إنت أكيد مش من المنيا! يلا عيد الاختبار وجَرِّب تاني"
    };
    
    // State variables
    let currentQuestion = 0;
    let userAnswers = new Array(questions.length).fill(null);
    let currentAudio = null;
    
    // Set total questions count
    totalQuestionsEl.textContent = questions.length;
    
    // Start quiz button click event
    startQuizBtn.addEventListener('click', function() {
        quizIntro.style.display = 'none';
        quizContainer.style.display = 'block';
        renderQuestion();
    });
    
    // Retry quiz button click event
    retryBtn.addEventListener('click', function() {
        // Reset quiz state
        currentQuestion = 0;
        userAnswers = new Array(questions.length).fill(null);
        
        // Show quiz container
        resultsContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        
        // Render first question
        renderQuestion();
    });
    
    // Share result button click event
    shareBtn.addEventListener('click', function() {
        const score = calculateScore();
        const text = `حصلت على ${score} من ${questions.length} في اختبار اللهجة المنياوية! جرب أنت أيضًا:`;
        
        // Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'اختبر لهجتك المنياوية',
                text: text,
                url: window.location.href
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('يمكنك مشاركة النتيجة عبر نسخ الرابط: ' + window.location.href);
        }
    });
    
    // Previous question button click event
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    });
    
    // Next question button click event
    nextBtn.addEventListener('click', function() {
        // If it's the last question, show results
        if (currentQuestion === questions.length - 1) {
            showResults();
            return;
        }
        
        // Otherwise, go to the next question
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        }
    });
    
    // Play result audio button click event
    playResultBtn.addEventListener('click', function() {
        const score = calculateScore();
        let audioFile;
        
        // Determine which audio file to play based on score
        if (score >= 18) {
            audioFile = resultAudios.excellent;
        } else if (score >= 10) {
            audioFile = resultAudios.average;
        } else {
            audioFile = resultAudios.poor;
        }
        
        // Play the audio
        if (currentAudio) {
            currentAudio.pause();
        }
        
        currentAudio = new Audio(audioFile);
        currentAudio.play();
    });
    
    // Function to render the current question
    function renderQuestion() {
        // Update current question number
        currentQuestionEl.textContent = currentQuestion + 1;
        
        // Enable/disable nav buttons based on question index
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.textContent = currentQuestion === questions.length - 1 ? 'أظهر النتيجة' : 'التالي <i class="fas fa-arrow-left"></i>';
        
        // Get current question data
        const questionData = questions[currentQuestion];
        
        // Create question HTML
        const questionHTML = `
            <div class="question">
                <h3 class="question-text">
                    ${questionData.question}
                    <button class="question-audio" data-audio="${questionData.audio}">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </h3>
                <div class="options-container">
                    ${questionData.options.map((option, index) => `
                        <div class="option ${userAnswers[currentQuestion] === index ? 'selected' : ''}" data-index="${index}">
                            <span class="option-label">${option.label}</span>
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Set question HTML
        questionContainer.innerHTML = questionHTML;
        
        // Add click event to audio button
        const audioBtn = questionContainer.querySelector('.question-audio');
        audioBtn.addEventListener('click', function() {
            const audioFile = this.getAttribute('data-audio');
            
            // Stop current audio if playing
            if (currentAudio) {
                currentAudio.pause();
            }
            
            // Play audio for this question
            currentAudio = new Audio(audioFile);
            currentAudio.play();
        });
        
        // Add click events to options
        const optionElements = questionContainer.querySelectorAll('.option');
        optionElements.forEach(option => {
            option.addEventListener('click', function() {
                const optionIndex = parseInt(this.getAttribute('data-index'));
                
                // Update user answer
                userAnswers[currentQuestion] = optionIndex;
                
                // Update UI to show selected option
                optionElements.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }
    
    // Function to calculate score
    function calculateScore() {
        let score = 0;
        
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });
        
        return score;
    }
    
    // Function to show results
    function showResults() {
        // Hide quiz container
        quizContainer.style.display = 'none';
        
        // Show results container
        resultsContainer.style.display = 'block';
        
        // Calculate score
        const score = calculateScore();
        scoreValue.textContent = score;
        
        // Set result message based on score
        let message;
        if (score >= 18) {
            message = "يا جدعان دا منياوي على أصوله، عشرة على عشرة!";
        } else if (score >= 10) {
            message = "مش بطّال، بس لسه شوية ع اللهجة المنياوية";
        } else {
            message = "إنت أكيد مش من المنيا! يلا عيد الاختبار وجَرِّب تاني";
        }
        
        resultMessage.textContent = message;
        
        // Auto play result audio
        setTimeout(() => {
            playResultBtn.click();
        }, 1000);
    }
    
    // Initialize the quiz
    function initQuiz() {
        // Create empty audio elements for preloading
        questions.forEach(question => {
            const audio = new Audio(question.audio);
            audio.preload = 'auto';
        });
        
        // Preload result audios
        for (const key in resultAudios) {
            const audio = new Audio(resultAudios[key]);
            audio.preload = 'auto';
        }
    }
    
    // Call init function
    initQuiz();
});