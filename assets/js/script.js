// Opening and closing the navigation menu
const BtnMenu = document.querySelector('.hamburger');
      navMenu = document.querySelector('.navbar');

BtnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    BtnMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navMenu.classList.remove('active');
    BtnMenu.classList.remove('active');
  }
});


// Dark mode toggle switch
const body = document.querySelector("body");
      modeToggle = document.querySelector(".dark-light");

modeToggle.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    modeToggle.classList.toggle("active");
});
    

// Show or hide the Back to Top button
const goTop = document.querySelector(".go-top");

window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 20) {
        goTop.classList.add("show-scroll");
    }
    else {
        goTop.classList.remove("show-scroll");
    }
});


// Adds an "active-link" class to the web page navigation bar navigation link as the user scrolls through each section.
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// Swiper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    
    pagination: {
      el: ".swiper-pagination",
    }
});


