var hamburger = document.querySelector('#hamburger-menu');
var nav = document.querySelector('.main-nav');
var closeNav = document.querySelector('.close');

function openMenu() {
    if(nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}

hamburger.addEventListener('click', openMenu);

// Show search bar when icon is clicked
const searchIcon = document.querySelector('#search-icon');
const searchBar = document.querySelector('.search-bar-wrap');
const closeSearch = document.querySelector('#close-search');

function openSearch() {
    if(searchBar.style.display === 'block') {
        searchBar.style.display = 'none';
    } else {
        searchBar.style.display = 'block';
    }
}

searchIcon.addEventListener('click', openSearch);

// Banner slideshow
var sliderImages = document.querySelectorAll('.banner-image');
var currentImage = 0;
var leftArrow = document.querySelector('#arrow-left');
var rightArrow = document.querySelector('#arrow-right');

$('#arrow-left').on('click', function() {
    $(".banner-image").fadeIn("slow");
});

$('#arrow-right').on('click', function() {
    $(".banner-image").fadeIn("slow");
});

// Clear images
function clearImages() {
    for(var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

// Start slide and get first image
function startSlide() {
    clearImages();
    sliderImages[0].style.display = 'block';
}

// Slide left
function slideLeft() {
    clearImages();
    sliderImages[currentImage - 1].style.display = 'block';
    currentImage--;
}

// Slide right
function slideRight() {
    clearImages();
    sliderImages[currentImage + 1].style.display = 'block';
    currentImage++;
}

// Click left arrow to slide
leftArrow.addEventListener('click', function() {
    if(currentImage === 0) {
        currentImage = sliderImages.length;
    }
    slideLeft();
});

// Click right arrow to slide
rightArrow.addEventListener('click', function() {
    if(currentImage === sliderImages.length - 1) {
        currentImage = -1;
    }
    slideRight();
});

startSlide();
