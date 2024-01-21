const searchButton = document.getElementById('search-button'),
      searchClose  = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content');

if (searchButton) {
    searchButton.addEventListener('click', () => {
    searchContent.classList.add('show-search');
        
    });
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
    searchContent.classList.remove('show-search');
        
    });
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
      loginClose  = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');

if (loginButton) {
    loginButton.addEventListener('click', () => {
    loginContent.classList.add('show-login');
        
    });
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
    loginContent.classList.remove('show-login');
        
    });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scorller grater then 50 view port
    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween:-24,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },

    breakpoints:{
        1220:{
            spaceBetween:-32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/

let swiperFeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween:16,
    grabCursor:true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    

    breakpoints:{
        1150:{
            slidesPerView:4,
            centeredSlides:false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween:16,
    slidesPerView:'auto',
    
    breakpoints:{
        1150:{
            slidesPerView:3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/