document.addEventListener('DOMContentLoaded', function() {
    const schoolsData = [
        {
            name: "مدرسة الصفا الخاصة",
            address: "المنيا – المدينة",
            type: "خاص",
            level: "ابتدائي-ثانوي",
            rating: 4,
            link: "https://easyschools.com/alsafa"
        },
        {
            name: "مدرسة المنيا البريطانية",
            address: "المنيا – المدينة",
            type: "دولي خاص",
            level: "ابتدائي-ثانوي",
            rating: 5,
            link: "https://easyschools.com/minia-british"
        },
        {
            name: "مدرسة الحاج سيد للتعليم الأساسي",
            address: "ملوي – المدينة",
            type: "حكومي",
            level: "ابتدائي-إعدادي",
            rating: 3,
            link: "https://minia.gov.eg/schools"
        },
        {
            name: "مدرسة المشير عبد الحكيم عامر الثانوية",
            address: "سمالوط – أسطال",
            type: "حكومي",
            level: "ابتدائي-ثانوي",
            rating: 4,
            link: "https://minia.gov.eg/schools"
        },
        {
            name: "مدرسة المنيا الثانوية الزراعية العسكرية",
            address: "المنيا – الجديدة",
            type: "حكومي",
            level: "ثانوي",
            rating: 4,
            link: "https://easyschools.com/minia-agricultural"
        },
        // Add more schools here
    ];

    const schoolsList = document.getElementById('schools-list');
    const typeFilter = document.getElementById('type-filter');
    const levelFilter = document.getElementById('level-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const searchInput = document.getElementById('school-search');
    const searchButton = document.querySelector('.search-schools button');

    function renderStars(rating) {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }

    function displaySchools(schools) {
        schoolsList.innerHTML = '';
        schools.forEach(school => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${school.name}</td>
                <td>${school.address}</td>
                <td>${school.type}</td>
                <td>${school.level}</td>
                <td class="rating-stars">${renderStars(school.rating)}</td>
                <td><a href="${school.link}" target="_blank" class="external-link">رابط المدرسة</a></td>
            `;
            schoolsList.appendChild(row);
        });
    }

    function filterSchools() {
        const typeValue = typeFilter.value;
        const levelValue = levelFilter.value;
        const ratingValue = ratingFilter.value;
        const searchValue = searchInput.value.toLowerCase();

        const filteredSchools = schoolsData.filter(school => {
            const typeMatch = typeValue === 'all' || school.type === typeValue;
            const levelMatch = levelValue === 'all' || school.level.includes(levelValue);
            const ratingMatch = ratingValue === 'all' || school.rating === parseInt(ratingValue);
            const searchMatch = !searchValue || school.name.toLowerCase().includes(searchValue);

            return typeMatch && levelMatch && ratingMatch && searchMatch;
        });

        displaySchools(filteredSchools);
    }

    // Event listeners for filters and search
    typeFilter.addEventListener('change', filterSchools);
    levelFilter.addEventListener('change', filterSchools);
    ratingFilter.addEventListener('change', filterSchools);
    searchInput.addEventListener('input', filterSchools);
    searchButton.addEventListener('click', filterSchools);

    // Initial display
    displaySchools(schoolsData);
});