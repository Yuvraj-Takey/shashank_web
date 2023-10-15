// code for gallery images
const images = [
    './repo/lightpic/ShankBox-01.JPG',
    './repo/lightpic/ShankBox-02.png',
    './repo/lightpic/ShankBox-03.png',
    './repo/lightpic/ShankBox-04.png',
    './repo/lightpic/ShankBox-05.png',
    './repo/lightpic/ShankBox-06.png',
    './repo/lightpic/ShankBox-07.png',
    './repo/lightpic/ShankBox-08.png',
    './repo/lightpic/ShankBox-09.png',
    './repo/lightpic/ShankBox-10.png',
    './repo/lightpic/ShankBox-11.png',
    './repo/lightpic/ShankBox-12.png',
    './repo/lightpic/ShankBox-01.JPG',
    './repo/lightpic/ShankBox-02.png',
    './repo/lightpic/ShankBox-03.png',
    './repo/lightpic/ShankBox-04.png',
    './repo/lightpic/ShankBox-05.png',
    './repo/lightpic/ShankBox-06.png',
    './repo/lightpic/ShankBox-07.png',
    './repo/lightpic/ShankBox-08.png',
    './repo/lightpic/ShankBox-09.png',
    './repo/lightpic/ShankBox-10.png',
    './repo/lightpic/ShankBox-11.png',
    './repo/lightpic/ShankBox-12.png',
    // Add more image URLs as needed
];

const galleryElement = document.getElementById('imageGallery');
images.map(imageUrl => {

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    galleryElement.appendChild(imgElement);
});


// code for nav item stick in top and smooth scroll
const navbar = document.getElementById('navbar');
const spacer = document.getElementById('topSpacer');
const navHidden = document.getElementById('navHidden');
const spacerHeight = spacer.clientHeight;

//nav hidden to hide / show
window.addEventListener('scroll', () => {
    if (window.scrollY >= spacerHeight) {
        navbar.classList.add('sticky');
        navHidden.classList.remove('display-none')
    } else {
        navbar.classList.remove('sticky');
        navHidden.classList.add('display-none')
    }
});

//smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// code for making the nav link active (accent change)
const navHeadPort = document.getElementById("navHeadPort")
const navHeadAchieve = document.getElementById("navHeadAchieve")
const navHeadBio = document.getElementById("navHeadBio")
const navHeadGal = document.getElementById("navHeadGal")
const navHeadContact = document.getElementById("navHeadContact")

function isElementAtTop(elementId) {
    const element = document.getElementById(elementId);

    if (!element) {
        return false; // Element with given ID not found
    }

    return element.offsetTop <= window.scrollY;
}

function removeYellow() {
    navHeadPort.classList.remove("nav-active-accent")
    navHeadAchieve.classList.remove("nav-active-accent")
    navHeadBio.classList.remove("nav-active-accent")
    navHeadGal.classList.remove("nav-active-accent")
    navHeadContact.classList.remove("nav-active-accent")
}

// window.addEventListener("scroll", (e) => {
//     // console.log(navHeadGal.prop)
//     removeYellow();
//     // myMouse.setAttribute("style", "left: " + (e.pageX-8) + "px; top: " + (e.pageY-7) + "px")
//     // console.log(window.scrollY);
//     let temp = window.scrollY;
//     // console.log(isElementAtTop(navHeadAchieve))
//     console.log(navHeadAchieve.offsetTop)
//     // if(temp>=100 && temp<700){
//     //     removeYellow();
//     //     navProjects.classList.add("nav-active-accent")
//     // }

//     // Blogs

//     if (isElementAtTop(navHeadAchieve)) {
//         navHeadAchieve.classList.add("nav-active-accent")
//     }

// })
