window.onload = function(){
  var starBg = document.querySelector(".starBg");
  var title = document.querySelector(".title");
  var topBtn = document.querySelector(".topBtn");

  window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    starBg.style.transform = "translateY("+ -scroll/3 +"px)";
    title.style.transform = "translateY(" + scroll/1.7 + "px)";
  });

  for( var i= 0; i< title.querySelectorAll('div').length; i++){
    var _text = title.querySelectorAll('div')[i];

    TweenMax.from(_text, 1, {
      autoAlpha : 0,
      delay : Math.random()*1,
      ease:Power3.easeInOut
    });
  }

  TweenMax.to(window,2, {
    scrollTo : {
      y:".bottom"
    },
    delay:1.7,
    ease:Power4.easeInOut
  });

  TweenMax.from(".bottom", 2.5, {
    scale : .7,
    y:100,
    delay: 2.2,
    ease: Power3.easeInOut
  });

  topBtn.addEventListener("click", function(){
    TweenMax.to(window, 1.5, {
      scrollTo : {
        y:0,
        autoKill:true
      },
      ease : Power3.easeInOut
    });
  })
}