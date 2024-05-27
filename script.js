document.addEventListener('DOMContentLoaded', () => {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        const videoPreview = movie.querySelector('.video-preview');

        movie.addEventListener('mouseenter', () => {
            videoPreview.currentTime = 0;
            videoPreview.play();
        });

        movie.addEventListener('mouseleave', () => {
            videoPreview.pause();
            videoPreview.currentTime = 0;
        });
    });

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // Perform search operation, navigate to search results page, etc.
            alert(`Searching for: ${searchTerm}`);
        }
    });
});
