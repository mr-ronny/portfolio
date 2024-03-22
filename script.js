//  Smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
var typed = new Typed('#element', {
  strings: ['web developer.', "digital marketing ||seo.", "web designer.", "Nodejs |Reactjs| Sql|", "Javascript| Python||C", "Html ||Css||cyber security"],
  typeSpeed: 50,
});


Shery.mouseFollower({

  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.makeMagnet(".home", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".btn", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".home", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.imageEffect(".rightsec", { style: 5, debug: true, gooey: true })


/* //page 2 animation */


var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter", function () {
  fixed.style.display = "block"
  // alert("hssdsd")
})

elemc.addEventListener("mouseleave", function () {
  fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
    fixed.style.backgroundImage = `url(${image})`

  })
})

// loader Animation

var loader = document.querySelector("#loader")
setTimeout(function () {
  loader.style.top = "-100%"
}, 8500)                
