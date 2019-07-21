const hamburger = document.querySelector('#hamburger-menu');
const nav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close');

function openMenu(e) {
    if(nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }

    e.preventDefault();
}

hamburger.addEventListener('click', openMenu);

// Show search bar when icon is clicked
const searchIcon = document.querySelector('#search-icon');
const searchBar = document.querySelector('.search-bar-wrap');
const closeSearch = document.querySelector('#close-search');

function openSearch(e) {
    if(searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }

    e.preventDefault();
}

searchIcon.addEventListener('click', openSearch);

// Banner slideshow
var sliderImages = document.querySelectorAll('.banner-image');
var currentImage = 0;

// Clear images
function clearImages() {
    for(var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    clearImages();
    sliderImages[0].style.display = 'block';
}

function slideLeft() {
    clearImages();
    sliderImages[currentImage - 1].style.display = 'block';
    currentImage--;
}

function slideRight() {
    clearImages();
    sliderImages[currentImage + 1].style.display = 'block';
    currentImage++;
}

$('#arrow-left').on('click', function() {
    if(currentImage === 0) {
        currentImage = sliderImages.length;
    }
    $('.banner-image').fadeIn(700);
    slideLeft();
});

$('#arrow-right').on('click', function() {
    if(currentImage === sliderImages.length - 1) {
        currentImage = -1;
    }
    $('.banner-image').fadeIn(700);
    slideRight();
});

startSlide();
