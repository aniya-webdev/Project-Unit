//Поиск
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

searchButton.addEventListener('click', function (e) {
    if (!searchForm.classList.contains('search--visible')) {
        e.preventDefault();
        searchForm.classList.add('search--visible');
        searchInput.classList.add('search__input--visible');
    } else {
        searchForm.classList.remove('search--visible');
        searchInput.classList.remove('search__input--visible');
	}
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		searchForm.classList.toggle('search--visible');
        searchInput.classList.toggle('search__input--visible');
	}
});
//# sourceMappingURL=search.js.map
