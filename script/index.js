const mobile_menu__btn=document.querySelector(".mobile_menu__btn")
const mobile_menu=document.querySelector(".mobile_menu")
const index_article__btn=document.querySelector(".index_article__btn")
const h1Title=document.getElementById('title')
const h2Title=document.getElementById('title2')

const homeUser=document.getElementById('homeUser')
const homeCourses=document.getElementById('homeCourses')
const homeMin=document.getElementById('homeMin')





window.addEventListener("load",()=>{

let firstTitle="برنامه نویسی"
let secTitle="شروع کن و مسیر شغلی‌ات رو بساز!"
let index=0

typewriter(firstTitle,index,h1Title)

setTimeout(()=>{

  typewriter(secTitle,index,h2Title)

},1500)

updateHomeStatus(40,homeCourses)
updateHomeStatus(1171,homeUser)
updateHomeStatus(1_355,homeMin)

})


function typewriter(text,index,title){

if(index<text.length){

title.innerHTML+=text[index]
index++


setTimeout(()=>{

typewriter(text,index,title)
// typewriter(text,index,h2Title)





},120



)
}







}

function updateHomeStatus(max,elem){
  let counter=0

let interval=setInterval(()=>{

 if(counter===max){
clearInterval(interval)

 }

elem.innerHTML=counter;
counter++

},1)


}






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






