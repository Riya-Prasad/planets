//PARALLAX

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);


//SWIPER

let keys = [
    "Mercury", 
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

let slider = new Swiper(".swiper-container",{
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mouseWheel: true,
    pagination: {
        el: ".planet-links",
        clickable: true,
        renderBullet: function(index, className){
            return '<div class="' + className + '">' + keys[index] + "</div>";
        }
    }
});

//SLIDE ANIMATION

slider.on("slideChange", function() {
    gsap.to(".slide-text span", 0.2, {
        x: "-100px"
    })
    gsap.to(".slide-numbert span", 0.2, {
        x: "-100px"
    })
    gsap.to(".slide-detail span", 0.5, {
        x: "-1000px"
    })
    gsap.to(".slide-detail-facts span", 0.5, {
        x: "-1000px"
    })
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 0.85
    })
    gsap.to(".swiper-slide .slide-image", 1, {
        rotation: 20
    })
})

slider.on("slideChangeTransitionEnd", function() {
    gsap.to(".slide-text span", 0.2, {
        x: 0,
        delay: 0.1
    })
    gsap.to(".slide-text span", 0.2, {
        x: "100px"
    })

    gsap.to(".slide-numbert span", 0.2, {
        x: 0,
        delay:0.1
    })
    gsap.to(".slide-numbert span", 0.2, {
        x: "100px"
    })

    gsap.to(".slide-detail span", 0.5, {
        x: 0
    })
    gsap.to(".slide-detail-facts span", 0.5, {
        x: 0
    })
    gsap.to(".swiper-slide-active", 0.5, {
        scale: 1,
        ease: Power4.easeOut
    })
    gsap.to(".swiper-slide .slide-image", 1, {
        rotation: 10
    })
})





