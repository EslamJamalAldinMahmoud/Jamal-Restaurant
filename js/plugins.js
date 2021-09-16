////////////////////// Scroll Behavior ///////////////////
window.addEventListener('load', function() {
  AOS.init();
});

///////////////// Toggle Nav /////////////////
const navToggler = document.querySelector('.nav-toggle');
navToggler.addEventListener('click', toggleNav);
function toggleNav(){
  navToggler.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
};
/* Close Nav By Click On A Nav Item */
document.addEventListener('click', function(e) {
  if(e.target.closest('.nav-item')){
    toggleNav();
  }
});
/* Sticky Header With Scroll */
window.addEventListener('scroll', function (){
  if(this.pageYOffset > 60){
    document.querySelector('.header').classList.add('sticky');
  }else {
    document.querySelector('.header').classList.remove('sticky');
  }
});
/* About Us Image Animation */
var offset = $('.about-section').offset();
  var top = offset.top;
$(window).scroll(function(){
  if($(window).scrollTop() >= offset.top){
    $('.about-section .about-img .img-box h3').fadeIn(1000);
  }else{
    $('.about-section .about-img .img-box h3').fadeOut(1000);
  }
});
/* Menu Section Animation */
const menuTabs = document.querySelector('.menu-section .menu-tabs');
menuTabs.addEventListener('click', function(e){
  if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
    const target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const menuSection = document.querySelector('.menu-section');
    menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
    menuSection.querySelector(target).classList.add('active');
  }
});
