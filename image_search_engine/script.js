document.addEventListener('DOMContentLoaded', () => {
    const accessKey = '-mzmMLRG5mYKffGR2iyE_0qL1bY-B101KbjhQQqR5sw';

    const searchBox = document.getElementById('search-box');
    const searchForm = document.getElementById('search-form');
    const searchResult = document.getElementById('search-result');
    const showMoreBtn = document.getElementById('show-more-btn');
    const footer = document.querySelector('footer');

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    let keyword = '';
    let page = 1;

    async function searchImages() {
        showMoreBtn.style.display = 'none';

        keyword = searchBox.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;

        if (page === 1) {
            searchResult.innerHTML = '';
        }

        results.map((result) => {
            const image = document.createElement('img');
            image.src = result.urls.small;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = '_blank';

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        })

        showMoreBtn.style.display = 'block';
        footer.style.display = 'block';
    }

    function toggleScrollToTopButton() {
        const isScrolledToTop = document.body.scrollTop === 0 && document.documentElement.scrollTop === 0;

        if (searchResult.childElementCount > 15 && !isScrolledToTop) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        page = 1;

        searchImages();
    });

    showMoreBtn.addEventListener('click', () => {
        page++;

        searchImages();
    });

    window.onscroll = function () {
        toggleScrollToTopButton();
    };

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleScrollToTopButton();
});