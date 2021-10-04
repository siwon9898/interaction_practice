var windowWidth, windowHeight;

window.onload = function () {

    var _cards = document.querySelectorAll(".cardItem");
    var _buttonAll = document.querySelectorAll("button");
    var pageNum = 0;

    for (var i = 0; i < _buttonAll.length; i++) {
        index(i);
    }

    function index(idx) {
        _buttonAll[idx].onclick = function () {
            pageNum = idx;
            cardSetting();
        };
    }

    TweenMax.from("h1", 1, {
        top: -50,
        autoAlpha: 0,
        ease: Power3.easeOut
    })

    _buttonAll.forEach(function (item, i) {
        TweenMax.from(item, .4, {
            top: 100,
            autoAlpha: 0,
            ease: Power3.easeInOut,
            delay: i * .1 + 1,
        })
    })

    TweenMax.set("section", {
        perspective: 400
    });

    function cardSetting() {
        for (var i = 0; i < _buttonAll.length; i++) {
            _buttonAll[i].classList.remove("active");
        }

        _buttonAll[pageNum].classList.add("active");

        if (pageNum == 0) {
            _cards.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    top: windowHeight / 2 - i * 50,
                    left: windowWidth / 2 + i * 60 - 200,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    ease: Power4.easeInOut,
                    delay: i * .15
                })
            })
        } else if (pageNum == 1) {
            _cards.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    top: Math.random() * (windowHeight - 300) + 100,
                    left: Math.random() * (windowWidth - 300) + 100,
                    rotationX: "random(-60, 60)",
                    rotationY: "random(-60, 60)",
                    rotationZ: "random(-90, 90)",

                    ease: Power4.easeInOut,
                    delay: "random(0, .5)"
                });
            });
        } else if (pageNum == 2) {
            _cards.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    top: windowHeight / 2 + i * 30 - 100,
                    left: windowWidth / 2 - i * 80,
                    rotationX: 0,
                    rotationY: -10 * i,
                    rotationZ: 20 * i,
                    ease: Power4.easeInOut,
                    delay: i * .15
                })
            })
        } else if (pageNum == 3) {
            _cards.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    top: windowHeight / 3,
                    left: windowWidth / 2.1 - i * 50,
                    rotationX: 0,
                    rotationY: -5 * i,
                    rotationZ: 0,
                    ease: Power3.easeInOut,
                    delay: i * .15
                })

                _cards[i].onmouseover = function () {
                    TweenMax.to(item, 1, {
                        // rotationY: -20 * i,
                        translateX: 50,
                        ease: Power4.easeInOut
    
                    })
                }
                _cards[i].onmouseout = function () {
                    _cards.forEach(function (item, i) {
                        TweenMax.to(item, 1, {
                            top: windowHeight / 3,
                            left: windowWidth / 2.1 - i * 50,
                            rotationX: 0,
                            rotationY: -5 * i,
                            rotationZ: 0,
                            translateX:-50,
                            ease: Power3.easeInOut,
                            //delay: i * .15
    
                        });
                    });
                };


            });

            
            // _cards[i].onmouseout = function () {
            //     _cards.forEach(function (item, i) {
            //         TweenMax.to(item, 1, {
            //             top: windowHeight / 3,
            //             left: windowWidth / 2.1 - i * 50,
            //             rotationX: 0,
            //             rotationY: -10 * i,
            //             rotationZ: 0,
            //             ease: Powe3.easeInOut,
            //             delay: i * .15

            //         });
            //     });
            // }; //onmouseout 끝


        }
    }

    window.addEventListener('resize', function () {
        resize();
    });

    function resize() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        cardSetting();
    }
    resize();
}