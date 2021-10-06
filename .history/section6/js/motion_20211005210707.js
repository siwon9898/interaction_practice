var wrap;
var x = 0,
  y = 0;
var mx = 0,
  my = 0;
var isMobile = false;
var isIos = false;

window.onload = function () {
  wrap = document.querySelector(".contentWrap");
  userwrap = document.querySelector(".userWrap");
  isMobile = mobileChk();
  isIos = iosChk();
  console.log("mobile?" + isMobile)
  console.log("ios?" + isIos)
  var startbutton = document.querySelector(".startbtn");
  var submitbutton = document.querySelector(".submitbtn");
  const usrname = document.getElementsByClassName("username").value;
  const usrmsg = document.getElementsByClassName("usermsg").value;

  // function printmsg(){
  //   p.innerHTML = (usrmsg);
  //   h3.innerHTML = (usrname);
    
  // }

  startbutton.addEventListener("click", function () {
    startbutton.classList.add("dimd");
    wrap.classList.add("active");
    userwrap.classList.add("active");

    submitbutton.addEventListener("click", function(){
      p.innerHTML = (usrmsg);
      h3.innerHTML = (usrname);
      
    })

    
    


    if (isMobile) {
      if (isIos) {
        DeviceOrientationEvent.requestPermission().then(function () {
          mobileOrientationChk();
        }).catch(console.error);

      } else {
        mobileOrientationChk();
      }

      function mobileOrientationChk() {
        window.addEventListener("deviceorientation", function (event) {
          x = event.gamma;
          y = event.beta;
        });
        loopMobile();
      }

    } else {
      window.addEventListener("mousemove", function (e) {
        x = (e.clientX - window.innerWidth / 2);
        y = (e.clientY - window.innerHeight / 2);
      });
      loop();
    }
  });

}

function loopMobile() {
  mx += (x - mx) * .1;
  my += (y - my) * .1;

  wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my - 50) + "deg) rotateY(" + (mx) + "deg)";
  window.requestAnimationFrame(loopMobile);

  
}

function loop() {
  mx += (x - mx) * .1
  my += (y - my) * .1;

  wrap.style.transform = "translate3d(-50%, -50%, 0) rotateX(" + (my / 10) + "deg) rotateY(" + (-mx / 10) + "deg)";

  window.requestAnimationFrame(loop);
}

function mobileChk() {
  var mobileKeyWords = new Array('Android', 'iPhone', 'iPad', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
  for (var info in mobileKeyWords) {
    if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
      return true;
    }
  }
  return false;
}

function iosChk(){
  var mobileKeyWords = new Array ('iPhone', 'iPad');
  for (var info in mobileKeyWords){
    if(navigator.userAgent.match(mobileKeyWords[info]) != null){
      return true;
    }
  }
  return false;
}