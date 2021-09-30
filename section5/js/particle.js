window.onlaod = function () {
    var body = document.querySelector("body");
    var _buttonAll = document.querySelectorAll("button");
    var pageNum = 0;
    var windowWidth, windowHeight;
    var bgColor = ["#2eccc4", "#ea204f", "#20a9ea"];

    for (var i = 0; i < +_buttonAll.length; i++) {
        (function (idx) {
            _buttonAll[idx].onclick = function () {
                pageNum = idx;
                motionSetting();
            }

        })(i);
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

    var item;
    var section = document.querySelector("section");
    var totalNum = 100;

    for (i = 0; i < totalNum; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "textItem");
        item.style.top = window.innerHeight / 2 + "px";
        item.style.left = window.innerHeight / 2 + "px";
        item.innerHTML = i;
        section.appendChild(item);
    }
    var _textItem = document.querySelectorAll(".textItem");

    function motionSetting() {
        body.style.background = bgColorArr[pageNum];

        for (var i = 0; i < _buttonAll.length; i++) {
            if (pageNum == i) {
                _buttonAll[pageNum].classList.add("active");
            } else {
                _buttonAll[i].classList.remove("active");
            }
        }

        TweenMax.killTweenOf(_textItem);

        if (pageNum == 0) {

            _textItem.forEach(function (item, i) {
                TweenMax.to(item, 1, {
                    top: Math.random() * (windowHeight - 150) + 60,
                    left: Math.random() * (windowWidth - 80) + 20,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    autoAlpha: "random(.1,1)",
                    scale: .5,
                    ease: Power4.easeOut,
                    delay: "random(0,.5)"
                })
            })
        } else if (pageNum == 1) {
            _textItem.forEach(function (item, i) {
                var scaleNum = Math.random() * 3;

                TweenMax.to(item,1,{
                    top:Math.random() * (windowHeight)
                })
            })
        }

    }
}