let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});


 // Animated typing
 var typed = new Typed(".typing", {
   strings: ["Student", "Designer","Developer","Creator"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
 });

 var typed = new Typed(".typing-2", {
   strings: ["Student", "Designer","Developer","Creator"],
   typeSpeed: 100,
   backSpeed: 60,
   loop: true
 });




/* team  */

$(document).ready(function(){
   $(window).scroll(function(){
     if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
     }else{
         $('.navbar').removeClass("sticky");
     }
     if(this.scroll > 500){
       $('.scroll-up-btn').addClass("show");
     }else{
       $('.scroll-up-btn').removeClass("show");
     }
   });
 
   // slide-up script
   $('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop: 0});
   });
 
   // Toggle Menu/navbar script
   $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
   });
 
 
   // Animated typing
   var typed = new Typed(".typing", {
     strings: ["Student", "Designer","Developer","Creator"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
   });
 
   var typed = new Typed(".typing-2", {
     strings: ["Student", "Designer","Developer","Creator"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
   });
 
 
   // Owl carousel script
   $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       autoplayTimeOut: 2000,
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
 });

