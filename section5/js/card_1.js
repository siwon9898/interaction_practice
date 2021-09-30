var windowWidth, windowHeight;

window.onload = function(){

    var _cards = document.querySelectorAll(".cardItem");
    var _button1 = document.querySelectorAll("button")[0];
    var _button2 = document.querySelectorAll("button")[1];

    _button1.addEventListener('click', function(event){
        cardRandom();
    })
    _button2.addEventListener('click', function(event){
        cardSetting();
    })

    window.addEventListener('resize', function(){
        resize();
    });

    function resize(){
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }

    function cardSetting(){
        _cards.forEach(function(item, i){
            TweenMax.to(item, 1, {
                top: windowHeight / 2 - (i*40),
                left : windowWidth /2 + (i *40 -200),
                rotation: 0,
                ease: Power3.easeInOut,
                delay : i * .2
            })
        })
    }

    function cardRandom(){
        _cards.forEach(function(item, i){

            TweenMax.to(item,1, {
                top: Math.random()*windowHeight,
                left: Math.random()*windowWidth,
                rotation: Math.random()*180,
                ease: Power4.easeInOut,
                delay : i * .1
            })
        })
    }

    resize();

}