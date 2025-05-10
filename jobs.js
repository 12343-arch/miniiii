document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const registrationSection = document.getElementById('registration-section');
    const resultsSection = document.getElementById('results-section');
    const jobsList = document.getElementById('jobs-list');
    const noResults = document.getElementById('no-results');
    const refreshSearch = document.getElementById('refresh-search');
    const saveFavorites = document.getElementById('save-favorites');
    const jobSearch = document.getElementById('job-search');
    const fieldFilter = document.getElementById('field-filter');
    
    // Job data
    const jobsData = [
        {
            id: 1,
            title: "Area Sales Supervisor",
            company: "Junior-Tex",
            location: "المنيا-المدينة",
            category: "job",
            field: "marketing",
            date: "2025-05-06",
            requirements: "بكالوريوس تجارة - خبرة 2 سنة في المبيعات",
            applyLink: "https://wuzzuf.net/jobs/p/caa3b7b9-5edb-4fc3-a0ee-d92fc1ef0c4d-Area-Sales-Supervisor-Junior-Tex-Minya-Egypt"
        },
        {
            id: 2,
            title: "فني تبريد وتكييف",
            company: "شركة أنظمة",
            location: "المنيا-المدينة",
            category: "job",
            field: "technical",
            date: "2025-05-15",
            requirements: "دبلوم فني - خبرة سنة على الأقل",
            applyLink: "https://eg.indeed.com/jobs?q=cooling+minya"
        },
        {
            id: 3,
            title: "أخصائي تمويل",
            company: "ريفي لتمويل المشروعات",
            location: "سمالوط",
            category: "job",
            field: "finance",
            date: "2025-05-10",
            requirements: "بكالوريوس - خبرة في التمويل متناهي الصغر",
            applyLink: "https://wuzzuf.net/jobs/egypt?q=finance+minya"
        },
        {
            id: 4,
            title: "برنامج مستقبلنا رقمي",
            company: "وزارة الاتصالات وتكنولوجيا المعلومات",
            location: "المنيا-الجديدة",
            category: "training",
            field: "technology",
            date: "2025-05-01",
            requirements: "18-35 سنة - مؤهل متوسط أو عالي",
            applyLink: "https://digitalfuture.gov.eg"
        },
        {
            id: 5,
            title: "تدريب مهني - كهرباء صناعية",
            company: "مركز التدريب المهني - وزارة القوى العاملة",
            location: "المنيا-الجديدة",
            category: "training",
            field: "technical",
            date: "2025-05-03",
            requirements: "مؤهل متوسط - السن 18-40 سنة",
            applyLink: "tel:16528"
        },
        {
            id: 6,
            title: "تدريب مهني - صيانة الموبايل",
            company: "مركز التدريب المهني - وزارة القوى العاملة",
            location: "المنيا-الجديدة",
            category: "training",
            field: "technical",
            date: "2025-05-03",
            requirements: "مؤهل متوسط - السن 18-40 سنة",
            applyLink: "tel:16528"
        },
        {
            id: 7,
            title: "مبادرة تمكين المرأة - حاسب آلي",
            company: "وزارة التضامن الاجتماعي",
            location: "بني-مزار",
            category: "training",
            field: "women-only",
            date: "2025-05-04",
            requirements: "نساء فقط - مؤهل متوسط أو عالي",
            applyLink: "https://www.moss.gov.eg/ar-eg/"
        },
        {
            id: 8,
            title: "طبيب باطنة",
            company: "مديرية الصحة بمحافظة المنيا",
            location: "المنيا-المدينة",
            category: "job",
            field: "medical",
            date: "2025-05-02",
            requirements: "بكالوريوس طب - خبرة 3 سنوات",
            applyLink: "https://jobs.gov.eg"
        },
        {
            id: 9,
            title: "منحة مشروعك",
            company: "جهاز تنمية المشروعات الصغيرة والمتوسطة",
            location: "المنيا-المدينة",
            category: "financial-support",
            field: "entrepreneurship",
            date: "2025-05-01",
            requirements: "18-45 سنة - فكرة مشروع قابلة للتنفيذ",
            applyLink: "https://msmeda.org.eg/"
        },
        {
            id: 10,
            title: "مبادرة شباب الخير",
            company: "وزارة التضامن الاجتماعي",
            location: "ملوي",
            category: "financial-support",
            field: "entrepreneurship",
            date: "2025-05-05",
            requirements: "21-45 سنة - مؤهل متوسط أو عالي",
            applyLink: "https://www.moss.gov.eg/ar-eg/"
        },
        {
            id: 11,
            title: "معلم لغة إنجليزية",
            company: "مديرية التربية والتعليم بالمنيا",
            location: "سمالوط",
            category: "job",
            field: "education",
            date: "2025-05-03",
            requirements: "ليسانس آداب تخصص لغة إنجليزية",
            applyLink: "https://jobs.gov.eg"
        },
        {
            id: 12,
            title: "موظف علاقات عامة",
            company: "ديوان عام محافظة المنيا",
            location: "المنيا-المدينة",
            category: "job",
            field: "management",
            date: "2025-05-07",
            requirements: "بكالوريوس - إجادة اللغة الإنجليزية",
            applyLink: "https://jobs.gov.eg"
        },
        {
            id: 13,
            title: "مبرمج تطبيقات موبايل",
            company: "شركة تكنولوجية محلية",
            location: "المنيا-الجديدة",
            category: "job",
            field: "technology",
            date: "2025-05-08",
            requirements: "بكالوريوس حاسبات - خبرة في Android/iOS",
            applyLink: "https://wuzzuf.net/jobs/egypt?q=mobile+developer+minya"
        },
        {
            id: 14,
            title: "فني تحاليل طبية",
            company: "مديرية الصحة بمحافظة المنيا",
            location: "أبو-قرقاص",
            category: "job",
            field: "medical",
            date: "2025-05-04",
            requirements: "دبلوم فني صحي أو معهد فني صحي",
            applyLink: "https://jobs.gov.eg"
        },
        {
            id: 15,
            title: "برنامج توظيف مصر",
            company: "وزارة الشباب والرياضة بالتعاون مع مايكروسوفت",
            location: "المنيا-المدينة",
            category: "training",
            field: "technology",
            date: "2025-05-08",
            requirements: "18-35 سنة - إجادة الكمبيوتر",
            applyLink: "https://tawzeefmasr.gov.eg"
        }
    ];
    
    // Submit registration form
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const fullname = document.getElementById('fullname').value;
        const contact = document.getElementById('contact').value;
        const qualification = document.getElementById('qualification').value;
        const location = document.getElementById('location').value;
        const jobType = document.getElementById('job-type').value;
        
        // Save user data in localStorage
        const userData = {
            fullname,
            contact,
            qualification,
            location,
            jobType,
            registrationDate: new Date().toISOString()
        };
        
        localStorage.setItem('miniaJobsUserData', JSON.stringify(userData));
        
        // Filter jobs based on criteria
        showMatchingJobs(qualification, location, jobType);
        
        // Show results section
        registrationSection.style.display = 'none';
        resultsSection.style.display = 'block';
        
        // Scroll to results
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Show matching jobs
    function showMatchingJobs(qualification, location, jobType) {
        // In a real app, this would involve more sophisticated matching
        let matchedJobs = jobsData;
        
        // Filter by location if selected
        if (location && location !== 'all') {
            matchedJobs = matchedJobs.filter(job => job.location === location);
        }
        
        // Filter by job type if selected
        if (jobType && jobType !== 'all') {
            matchedJobs = matchedJobs.filter(job => job.category === jobType);
        }
        
        // Simple qualification matching - just for demo
        // In real app, would use NLP/AI to match skills and qualifications
        matchedJobs = matchedJobs.sort((a, b) => {
            // Prioritize jobs that have keywords from qualification
            const aScore = qualification.toLowerCase().split(' ').filter(word => 
                a.title.toLowerCase().includes(word) || 
                a.requirements.toLowerCase().includes(word)
            ).length;
            
            const bScore = qualification.toLowerCase().split(' ').filter(word => 
                b.title.toLowerCase().includes(word) || 
                b.requirements.toLowerCase().includes(word)
            ).length;
            
            return bScore - aScore;
        });
        
        // Display matched jobs
        renderJobs(matchedJobs);
    }
    
    // Render jobs to the list
    function renderJobs(jobs) {
        jobsList.innerHTML = '';
        
        if (jobs.length === 0) {
            jobsList.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        
        jobsList.style.display = 'block';
        noResults.style.display = 'none';
        
        jobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            if (job.category === 'training') {
                jobCard.classList.add('featured');
            }
            
            jobCard.innerHTML = `
                <div class="job-header">
                    <h3 class="job-title">${job.title}</h3>
                    <span class="job-company">${job.company}</span>
                </div>
                <span class="job-category">${getCategoryName(job.category)}</span>
                <div class="job-meta">
                    <div class="job-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${getLocationName(job.location)}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>تاريخ النشر: ${formatDate(job.date)}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>المتطلبات: ${job.requirements}</span>
                    </div>
                </div>
                <div class="job-actions">
                    <a href="${job.applyLink}" target="_blank" class="apply-btn">قدّم الآن</a>
                    <button class="job-favorite" data-id="${job.id}">
                        <i class="far fa-bookmark"></i>
                    </button>
                </div>
            `;
            
            jobsList.appendChild(jobCard);
        });
        
        // Add favorite functionality
        document.querySelectorAll('.job-favorite').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('active');
                if (this.classList.contains('active')) {
                    this.innerHTML = '<i class="fas fa-bookmark"></i>';
                } else {
                    this.innerHTML = '<i class="far fa-bookmark"></i>';
                }
                
                // In a real app, we would save this to the user's favorites
                const jobId = this.getAttribute('data-id');
                toggleFavoriteJob(jobId);
            });
        });
    }
    
    // Helper function to toggle favorite jobs
    function toggleFavoriteJob(jobId) {
        // Get existing favorites from localStorage
        let favorites = JSON.parse(localStorage.getItem('miniaJobsFavorites')) || [];
        
        // Toggle favorite status
        if (favorites.includes(jobId)) {
            favorites = favorites.filter(id => id !== jobId);
        } else {
            favorites.push(jobId);
        }
        
        // Save updated favorites
        localStorage.setItem('miniaJobsFavorites', JSON.stringify(favorites));
    }
    
    // Helper function to get category name in Arabic
    function getCategoryName(category) {
        const categories = {
            'job': 'وظيفة',
            'training': 'تدريب',
            'financial-support': 'دعم مالي'
        };
        
        return categories[category] || category;
    }
    
    // Helper function to get location name
    function getLocationName(locationCode) {
        return locationCode.replace(/-/g, ' ');
    }
    
    // Helper function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Refresh search button
    refreshSearch.addEventListener('click', function() {
        registrationSection.style.display = 'block';
        resultsSection.style.display = 'none';
    });
    
    // Save favorites button
    saveFavorites.addEventListener('click', function() {
        alert('تم حفظ الوظائف المفضلة في ملفك الشخصي!');
    });
    
    // Search functionality
    jobSearch.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        
        if (query === '') {
            // If search is cleared, show all jobs based on original criteria
            const userData = JSON.parse(localStorage.getItem('miniaJobsUserData')) || {};
            showMatchingJobs(userData.qualification || '', userData.location || '', userData.jobType || 'all');
            return;
        }
        
        // Filter jobs by search query
        const filteredJobs = jobsData.filter(job => 
            job.title.toLowerCase().includes(query) ||
            job.company.toLowerCase().includes(query) ||
            job.requirements.toLowerCase().includes(query)
        );
        
        renderJobs(filteredJobs);
    });
    
    // Field filter functionality
    fieldFilter.addEventListener('change', function() {
        const fieldValue = this.value;
        
        if (fieldValue === 'all') {
            // Show all jobs based on original criteria
            const userData = JSON.parse(localStorage.getItem('miniaJobsUserData')) || {};
            showMatchingJobs(userData.qualification || '', userData.location || '', userData.jobType || 'all');
            return;
        }
        
        // Filter jobs by field
        const filteredJobs = jobsData.filter(job => job.field === fieldValue);
        renderJobs(filteredJobs);
    });
    
    // Check if user data exists in localStorage and show results if it does
    const userData = JSON.parse(localStorage.getItem('miniaJobsUserData'));
    if (userData) {
        // Populate form with saved data
        document.getElementById('fullname').value = userData.fullname || '';
        document.getElementById('contact').value = userData.contact || '';
        document.getElementById('qualification').value = userData.qualification || '';
        document.getElementById('location').value = userData.location || '';
        document.getElementById('job-type').value = userData.jobType || 'all';
    }
});