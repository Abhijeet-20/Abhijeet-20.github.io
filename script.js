function scroll(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".all"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".all", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".all").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
scroll();


var timer ;

function mouseskew(){
    var xscale = 1;
    var yscale = 1;
    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timer);
        var xdiff = dets.clientX - xpre;
        var ydiff = dets.clientY - ypre;

        xscale = gsap.utils.clamp(0.8,1.2,xdiff);
        yscale = gsap.utils.clamp(0.8,1.2,ydiff); 

        xpre = dets.clientX;
        ypre = dets.clientY;
       
        CircleMouseFollow(xscale,yscale);
        timer = setTimeout(function(){
            document.querySelector("#cursorcircle").style.transform =  `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);
    });
}
mouseskew();

function CircleMouseFollow(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#cursorcircle").style.transform =  `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
CircleMouseFollow();





var tl = gsap.timeline();

tl.from('.nav1, .nav2',{
    y:'-10vh',
    duration:1,
    // delay:1,
    stagger:0.5
})
tl.from(".bgimg",{
    scale:2,
    opacity:0,
    duration:0.5
})
tl.from(".one>h1",{
    y:100,
    opacity:0,
    stagger:0.3,
    duration:1
})
tl.to(".two , .one",{
    backgroundColor:"black",
    color:"#333",
    scrollTrigger:{
        trigger:".two",
        scroller:".all",
        start:"top 50%",
        end:"end 20%" ,
        // markers:true,
        scrub:3
    }
})
tl.to(".three",{
    backgroundColor:"#FAFBF8",
    color:"#333",
    scrollTrigger:{
        trigger:".three",
        scroller:".all",
        start:"top 50%",
        end:"end 20%" ,
        // markers:true,
        scrub:3
    }
})


gsap.to("#name-div h1", {
    transform: "translateX(calc(-100% - 2vw - 4px))",
    scrollTrigger: {
      trigger: "#name-div h1",
      scroller: ".all",
    //   markers:true,
      scrub: 0.7
    }
  })



  document.querySelectorAll(".ele").forEach(function(ele){
    var rotate = 0;
    var difference =0;
    ele.addEventListener("mousemove",function(dets){

        var diff = dets.clientY - ele.getBoundingClientRect().top;

        difference = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(ele.querySelector("img"),{
            opacity : 1,
            ease : Power3,
            top : diff,
            left : dets.clientX,
            rotate:gsap.utils.clamp(-20,20,difference * 0.6),
        }); 
    });

    ele.addEventListener("mouseleave",function(dets){

        gsap.to(ele.querySelector("img"),{
            opacity : 0,
            ease : Power3,
            duration : 0.5, 
        }); 
    });
});