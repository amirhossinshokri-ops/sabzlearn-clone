const mobile_menu__btn=document.querySelector(".mobile_menu__btn")
const mobile_menu=document.querySelector(".mobile_menu")
const index_article__btn=document.querySelector(".index_article__btn")





mobile_menu__btn.addEventListener('click',()=>{
    mobile_menu.classList.add("mobile_menu--active")
    
})

document.addEventListener('click',(e)=>{

if(!mobile_menu.contains(e.target) && !mobile_menu__btn.contains(e.target) ){mobile_menu.classList.remove("mobile_menu--active")
}

})


const swiper = new Swiper('.swiper', {
  // Optional parameters

 slidesPerView: 2,

    spaceBetween: 30,


  loop: true,

  // If we need pagination

 // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },

 767.98: {
      slidesPerView: 4,
      spaceBetween: 40
    },

 992: {
      slidesPerView: 5,
      spaceBetween: 40
    },

 1200: {
      slidesPerView: 6,
      spaceBetween: 40
    },

  }
     ,

 
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

 
});

const swiper_Ncourses = new Swiper('.swiper_newest_courses', {
  // Optional parameters

 slidesPerView: 1,

    spaceBetween: 30,


  loop: true,


 breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
 

 767.98: {
      slidesPerView: 3,
      spaceBetween: 20
    },

 992: {
      slidesPerView: 3,
      spaceBetween: 30
    },

 1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },

  }
     ,
     

 
  // Navigation arrows
  navigation: {
    nextEl: '.nextN',
    prevEl: '.prevN',
  },

 
});


index_article__btn.addEventListener("click",()=>{

index_article__btn.classList.toggle("index_article--active")

document.querySelector(".index_article_texts").classList.toggle("index_article--active")
document.querySelector(".index_article_content--hide").classList.toggle("index_article--active")
})