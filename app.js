
const header = document.querySelector('#header');
const me = document.querySelector('#me');
const explore = document.querySelector('#explore')




explore.addEventListener('click', ()=>{
    me.scrollIntoView({behavior:'smooth'})
})

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > header.offsetTop){
        header.classList.add('sticky')
       console.log(header.classList)
    } else {
        console.log('f')
    }
})

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
  var width = $(window).width(); 
  window.onscroll = function(){
  if ((width >= 900)){
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          $("#middle").css("background-size","150% auto");
      }else{
          $("#middle").css("background-size","100% auto");        
      }
  }
  };
  
  setTimeout(function(){
      $("#loading").addClass("animated fadeOut");
      setTimeout(function(){
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display","none");
      },800);
  },1450);
