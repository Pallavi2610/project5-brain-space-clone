function loco(){

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
//   multiplier:.2        
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

function animation(){
gsap.to(" .page1>video",{
    filter:"blur(20px)",
    transform:"scaleX(0.85)",
    scrollTrigger:{
        trigger:".page1",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -50%",
        scrub:true
    }
})

document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
        top:dets.y,
        left:dets.x,
        duration:1
    })
})
document.querySelector(".nav i").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        scale:2,
        backgroundColor:"black",
        mixBlendMode:"darken"
    })
    gsap.to(".nav i",{
        color:"white",
    })
    gsap.to(".nav",{
        mixBlendMode:"normal"
    })
})
document.querySelector(".nav i").addEventListener("mouseleave",function(){
    gsap.to(".cursor",{
        scale:1.15,
        backgroundColor:"white",
        mixBlendMode:"difference"
    })
    gsap.to(".nav i",{
        color:"white"
    })
    gsap.to(".nav",{
        mixBlendMode:"difference"
    })
})
}
animation()

function page1(){
gsap.to(".nav-part2",{
    y:-100,
    duration:1,
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        start:"top 0",
        end:"top -10%",
        scrub:true,
        opacity:0
    }
})

gsap.to(".nav i",{
    display:"block",
    scrollTrigger:{
        trigger:".nav",
        scroller:".main",
        start:"top -15%",
        end:"top -20%",
        // scrub:true
    }
})

}
page1()
function page2(){
gsap.to(".page2 img",{
    transform:"translateY(-50%) translateX(69%)",
    duration:10,
    repeat:-1,
    ease:"none"
})
}
page2()

function page3(){
 var tl= gsap.timeline()
tl.from(".left-page3 >h2",{
    y:-20,
    scale:1.1,
    duration:1,
    opacity:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        scrub:true,
    }
})
tl.from(".left-page3>p",{
    y:50,
    scale:1.1,
    duration:0.8,
    opacity:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        scrub:true,
    }
})
tl.from(".left-page3>button",{
    y:100,
    scale:1.1,
    duration:0.8,
    opacity:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        scrub:true,
    }
})
}
page3()

function page4(){
var tl2=gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-content1 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl2.from(".page4-content1 h5",{
    y:50,
    scale:1.15,
    opacity:0,
    duration:0.8,
})
tl2.from(".page4-content1 p",{
    y:50,
    scale:1.15,
    opacity:0,
    duration:0.8,
})
tl2.from(".page4-content1 button",{
    y:50,
    scale:1.15,
    opacity:0,
    duration:0.8,
})

var tl3=gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-content2  h5",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl3.to(".page4-content2 video",{
    y:10,
    // scale:1.15,
    // opacity:0,
    duration:0.8,
})
tl3.to(".page4-content2 h5",{
    y:50,
    scale:1.1,
    // opacity:0,
    duration:0.8,
})

var tl4=gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-content3 h5 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl4.to(".page4-content3 h5",{
    y:50,
    scale:1.1,
    // opacity:0,
    duration:0.8,
})
tl4.to(".page4-content3 button",{
    y:10,
    scale:1.1,
    // opacity:0,
    duration:0.8,
})
tl4.to(".page4-content3 video",{
    y:10,
    // scale:1.1,
    // opacity:0,
    duration:0.8,
})
var tl5=gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-content4 h5 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl5.to(".page4-content4 h5",{
    y:50,
    scale:1.1,
    // opacity:0,
    duration:0.8,
})
tl5.to(".page4-content4 video",{
    y:10,
    // scale:1.1,
    // opacity:0,
    duration:0.8,
})
var tl6=gsap.timeline({
    scrollTrigger: {
        trigger: ".page4-content5 h5 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl6.to(".page4-content5 ",{
    y:50,
    scale:1.1,
    // opacity:0.8,
    duration:0.8,
})
tl6.to(".page4-content5 video",{
    y:10,
    // scale:1.1,
    // opacity:0.8,
    duration:0.8,
})
tl6.to(".page4-content5 button",{
    y:10,
    scale:1.1,
    // opacity:0.8,
    duration:0.8,
})
}
page4()
function page5(){
var tl7 = gsap.timeline({
    scrollTrigger:{
        trigger:".page5",
        scroller:".main",
        // markers:true,
        start:"top 0",
        end:"top -70%",
        scrub:3,
        pin:true
    }
})
tl7.to(".page5-content",{
    transform:"translateX(-50%)",
},"okay")
tl7.to(".page5 .slider-in",{
    x:650,
},"okay")
}
page5()
function page1h1(){
var text = "We are brain.space     The brain data company"


var splittedText = text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

var h1Text = document.querySelector(".page1 h1")
h1Text.innerHTML = clutter

gsap.to(".page1 h1 span",{
    display:"initial",
    stagger:0.1
})
}
page1h1()

var tl7=gsap.timeline()

tl7.to(".workbox1",{
    scale:1.2,
    opacity:0.6,
    scrollTrigger:{
        trigger:".workbox1",
        scroller:".main",
        // markers:true,
        start:"top 60%",
        scrub:true,
    }
})
var tl8=gsap.timeline({
    scrollTrigger: {
        trigger: ".page6 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl8.from(".page6 h1, .page6 button,.page6-box1,.line ",{
    y:50,
    scale:1,
    // opacity:0.8,
    duration:0.8,
})
var tl9=gsap.timeline({
    scrollTrigger: {
        trigger: ".page7 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl9.from(".page7 h1,.search,.page7i1,.page7i2,.page7 button  ",{
    y:50,
    scale:1,
    // opacity:0.8,
    duration:0.8,
})
var tl10=gsap.timeline({
    scrollTrigger: {
        trigger: ".page8 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl10.from(".page8 h1,.page8 h2, .page8 h3,.page8 .page82",{
    y:50,
    scale:1.1,
    // opacity:0.8,
    duration:0.8,
})
var tl11=gsap.timeline({
    scrollTrigger: {
        trigger: ".page9 ",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl11.from(".page9",{
    y:50,
    scale:1.1,
    // opacity:0.8,
    duration:0.8,
})


var tl12=gsap.timeline({
    scrollTrigger: {
        trigger: ".page9",
        scroller: ".main",
        // markers:true,
        start: "top 50%",
        end: "top -10%",
        scrub: 2
    }
})
tl12.from(".page10 .contact1,.page10 .contact2",{
    y:50,
    scale:1.1,
    // opacity:0.8,
    duration:0.8,
})

document.querySelector(".page8").addEventListener("mousemove", function (dets) {
    document.querySelector(".page8").style.background = `conic-gradient(at ${dets.x}px ${dets.y}px,rgb(255, 228, 233),aliceblue,rgb(205, 243, 255),rgb(195, 255, 195),lightyellow,rgb(251, 226, 230))`
    })








