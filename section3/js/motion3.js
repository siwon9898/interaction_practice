var prev_button, next_button;
var contentWrap;
var disk_inner;
var pageNum = 0;
var totalNum = 0;
var album;
var pointBtnAll;
// var bgArray = new Array();
// bgArray[0] = ["#0272a4","#f6a564"];
// bgArray[1] = ["#b6bfc8","#36595b"];
// bgArray[2] = ["#e58e82","#6f569f"];
var imgArray = [];
window.onload = function(){
  prev_button = document.querySelectorAll("button")[0];
  next_button = document.querySelectorAll("button")[1];

  contentWrap = document.querySelector(".contentWrap");
  disk_inner = document.querySelectorAll(".disk_inner");
  album = document.querySelectorAll(".album");
  pointBtnAll = document.querySelectorAll(".pointWrap li");
  
  // img0 = document.querySelectorAll("img")[0];
  // img1 = document.querySelectorAll("img")[1];
  // img2 = document.querySelectorAll("img")[2]

  totalNum = album.length;

  for(let j = 0; j < 3 ; j++) {
    imgArray.push(document.querySelectorAll("img")[j])
  }

  const colorThief = new ColorThief();

  prev_button.addEventListener("click", function(){
    if(pageNum > 0){
      pageNum --;
    }else{
      pageNum = totalNum-1;
    }
    pageChangeFunc();
  })
  
  next_button.addEventListener("click", function(){
    if(pageNum<totalNum-1)
    {
      pageNum ++;
    }
    else{
      pageNum =0;
    }
    pageChangeFunc();
  })

  function pointChange(idx){
    pointBtnAll[idx].onclick = function(){
      pageNum = idx;
      pageChangeFunc();
    }
  }
  
  for(var i=0; i<pointBtnAll.length; i++){
    pointChange(i);  
  }


  // if(img0.complete) {
  //   bgColor = colorThief.getPalette(img0);
  // }
  // else{
  //   Image.addEventListener('load', function(){
  //    bgColor = colorThief.getPalette(img0);
  //   });
  // }

  pageChangeFunc();

  function pageChangeFunc(){
    // contentWrap.style.background = "linear-gradient(120deg, rgba(" +bgColor[1]  + ")," + "rgba(" + bgColor[2] + ")" + "120.71%)";
    
    for(var i=0; i<totalNum; i++){
      if(pageNum==i){
        album[i].classList.add("active");
        pointBtnAll[i].classList.add("active");
      }else{
        album[i].classList.remove("active");
        pointBtnAll[i].classList.remove("active");
      }
      if(imgArray[i].complete) {
        bgColor = colorThief.getPalette(imgArray[pageNum]);
      }else{
        Image.addEventListener('load', function(){
         bgColor = colorThief.getPalette(imgArray[pageNum]);
        });
      }
      // console.log(imgArray[i])
      contentWrap.style.background = "linear-gradient(120deg, rgba(" +bgColor[1]  + ")," + "rgba(" + bgColor[2] + ")" + "100.71%)";
      disk_inner[pageNum].style.background = "rgb("+bgColor[1]+")";
    }
    console.log(bgColor[0])
      
      
  }
}