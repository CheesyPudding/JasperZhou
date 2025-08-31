$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Dev", "Game Dev", "3D Animator", "Designer", "2D Animator", "Student", "Gamer", "Human-Being"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    });

    // Lightbox functionality
    // Select all card images
const cards = document.querySelectorAll('.card img');

cards.forEach(img => {
    let isDragging = false;
    let startX, startY;

    // --- Desktop mouse events ---
    img.addEventListener('mousedown', e => {
        isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
    });

    img.addEventListener('mousemove', e => {
        if(Math.abs(e.clientX - startX) > 5 || Math.abs(e.clientY - startY) > 5){
            isDragging = true;
        }
    });

    img.addEventListener('mouseup', e => {
        if(!isDragging){
            openLightbox(img.dataset.full || img.src);
        }
    });

    // --- Touch events for mobile ---
    img.addEventListener('touchstart', e => {
        isDragging = false;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });

    img.addEventListener('touchmove', e => {
        const touch = e.touches[0];
        if(Math.abs(touch.clientX - startX) > 5 || Math.abs(touch.clientY - startY) > 5){
            isDragging = true;
        }
    });

    img.addEventListener('touchend', e => {
        if(!isDragging){
            openLightbox(img.dataset.full || img.src);
        }
    });
});

// Lightbox function example
function openLightbox(src){
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 10000;
    overlay.addEventListener('click', () => overlay.remove());

    // Create image
    const fullImg = document.createElement('img');
    fullImg.src = src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    fullImg.style.borderRadius = '6px';
    overlay.appendChild(fullImg);

    document.body.appendChild(overlay);
}
});
