//GENRAL STUFF


//start at page top every reload 
//to avoid issues with scroll magic
history.scrollRestoration = "manual"

//loading anmimation
const loading_page = document.getElementById("loadingpage")
const loader_fill = document.getElementById("loader_fill")

loader_fill.classList.add("filled")
$('body').css({'overflow':'hidden'});
$(document).bind('scroll',function () { 
  window.scrollTo(0,0); 
});


function loading_animation() {
  function loading_animation_time() {
    setTimeout(function() {
      loading_page.classList.add("loadingpage_removed");
      $(document).unbind('scroll'); 
      $('body').css({
                      'overflow':'visible',
                      'overflow-x':'hidden'
      });
    },1000)
  }
  loading_animation_time()
};
loading_animation()

//DETECT IF TOUCH DEVICE
function isTouchDevice() {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
};
//to get result ask if funtion is true or false 

//DEBUG //Put result in the console
if (isTouchDevice() === false) {
  console.log("not touch device") //DEBUG
}else if (isTouchDevice() === true) {
  console.log("touch device") //DEBUG
};

//ADD CLASSES DEPENDING ON DEVICETYPE
if (isTouchDevice() === false) {
  
}else if (isTouchDevice() === true) {
  document.getElementById("copy_discord").classList.add("copy_mobile");
}


//LINK REDIRECT

/* function link_handler(link, time) {
  if (link === "index") {
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time); //DEBUG
      }
      timeFunction();
    }
  } else if (link === "skills"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time);//DEBUG
      }
      timeFunction();
    }
  }else if (link === "aboutme"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time);//DEBUG
      }
      timeFunction();
    }
  }else if (link === "contactme"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }
    else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time);//DEBUG
      }
      timeFunction();
    }
  }else if (link === "coding"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time)
      }
      timeFunction();
    }
  }else if (link === "clothing"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
      setTimeout(function(){ window.location.href = link + ".html"; }, time)
      }
      timeFunction();
    }
  }else if (link === "clothing"){
    if (isTouchDevice() === false) {
      window.location.href = link + ".html";
    }else if (isTouch === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time)
      }
      timeFunction();
    }
  }else if (link === "sneaker"){
    if (isTouchDevice() === false){
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time)
      }
      timeFunction();
    }
  }else if (link === "kid"){
    if (isTouchDevice() === false){
      window.location.href = link + ".html";
    }else if (isTouchDevice() === true){
      function timeFunction() {
        setTimeout(function(){ window.location.href = link + ".html"; }, time)
      }
      timeFunction();
    }
  }  else{
    alert("cant find this page!")
    return
  }
}; */

function link_handler(link, time) {
  if (isTouchDevice() === false){
    window.location.href = link + ".html";
  }
  else if (isTouchDevice() === true){
    function timeFunction() {
      setTimeout(function(){ window.location.href = link + ".html"; },time)
    }
    timeFunction();
  }
}

const home_link = document.getElementById("header_home_link")
const skills_link = document.getElementById("header_skills_link")
const aboutMe_link = document.getElementById("header_aboutMe_link")
const contactMe_link = document.getElementById("header_contactMe_link")
const coding_link = document.getElementById("coding_link")
const clothing_link = document.getElementById("clothing_link")
const sneaker_link = document.getElementById("sneaker_link")
const kid_link = document.getElementById("kid_link");

home_link.addEventListener("click", function(){
  link_handler("index", 250)
}, false
);
skills_link.addEventListener("click", function(){
  link_handler("skills", 250)
},false
);
aboutMe_link.addEventListener("click", function(){
  link_handler("aboutme", 250)
},false
);
contactMe_link.addEventListener("click", function(){
  link_handler("contactme", 250)
},false
);
coding_link.addEventListener("click", function(){
  link_handler("coding", 250)
},false
);
clothing_link.addEventListener("click", function(){
  link_handler("clothing", 250)
},false
);
sneaker_link.addEventListener("click", function(){
  link_handler("sneaker", 250)
},false
);
kid_link.addEventListener("click", function(){
  link_handler("kid", 250)
},false
);

//svg debugging
const svganimation = document.querySelectorAll("#section1_animationsvg_svg path");

for(let i = 0; i < svganimation.length; i++) {
    //console.log(`Letter ${i} is ${svganimation[i].getTotalLength()}`)
};

//SCROLL ANIMATION

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

// SECTION 1 SVG
const intro = document.querySelector(".section1_animationsvg");
const text = intro.querySelector("svg");

//Scenes
let svg_scene = new ScrollMagic.Scene({
  duration: 500,//Page/Element High
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });

let svg_scene2 = new ScrollMagic.Scene({
  duration: 500, //Duration of the disappiring animation
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  //.addIndicators({
  //  name: "svg scene",
  //})//DEBUG
  .addTo(controller);


//Second ection Scroll Magic
const section2_div = document.querySelector(".section2_div");
const section2_elements = document.querySelector(".highlight_line");

let section2_scene1 = new ScrollMagic.Scene({
  triggerElement: section2_div,
  triggerHook: 0.8,
  reverse: false, 
})
.setClassToggle(".highlight_line", "slide-up-and-appear", ".section2_div", "fade-out")
//.addIndicators({
//  name: "section2 scene",
//  colorTrigger: "#3cff00",
//  colorStart: "#3cff00",
//  colorEnd: "#3cff00",
//})//DEBUG
.addTo(controller);


let section2_scene2 = new ScrollMagic.Scene({
  duration: "80%",
  triggerElement: section2_div,
  triggerHook: 0.8,
})
.setClassToggle(".section2_div", "fade-out")
//.addIndicators({
//  name: "section2 scene",
//  colorTrigger: "#3cff00",
//  colorStart: "#3cff00",
//  colorEnd: "#3cff00",
//})//DEBUG
.addTo(controller);

const copy_discord_button = document.querySelector("#copy_discord");

//scroll magic 4th section
let section4_scene = new ScrollMagic.Scene({
  triggerElement: copy_discord_button,
  triggerHook: 0.9,
})
.setClassToggle("#copy_discord", "fade-out")
//.addIndicators({
//  name: "section4 scene",
//  colorTrigger: "#a200ff",
//  colorStart: "#a200ff",
//  colorEnd: "#a200ff",
//})//DEBUG
.addTo(controller);