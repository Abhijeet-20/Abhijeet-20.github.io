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

function imgOnHover(){
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
}
imgOnHover();

function display_ct7() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
  hours = x.getHours( ) % 12;
  hours = hours ? hours : 12;
  hours=hours.toString().length==1? 0+hours.toString() : hours;
  
  var minutes=x.getMinutes().toString()
  minutes=minutes.length==1 ? 0+minutes : minutes;
  
  var seconds=x.getSeconds().toString()
  seconds=seconds.length==1 ? 0+seconds : seconds;
  
  var month=(x.getMonth() +1).toString();
  month=month.length==1 ? 0+month : month;
  
  var dt=x.getDate().toString();
  dt=dt.length==1 ? 0+dt : dt;
  
  var x1=month + "/" + dt + "/" + x.getFullYear(); 
  x1 = x1 + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
  document.getElementById('ct7').innerHTML = x1;
  display_c7();
   }
   function display_c7(){
  var refresh=1000;
  mytime=setTimeout('display_ct7()',refresh)
  }
  display_c7();


  // const anchorLinks = document.querySelectorAll('.nav2 .location');

  // anchorLinks.forEach((anchorLink) => {
  //   let hashval = anchorLink.getAttribute('href');
  //   let target = document.querySelector(hashval);
  
  //   anchorLink.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  
  //     locomotiveScroll.scrollTo(target);
  //   });
  // });



var tl= gsap.timeline();
tl.from(".nav1,.nav2",{
  y:-100,
  duration:0.5,
  stagger:0.5,
  delay:1
})
tl.from(".bgimg",{
  scale:2,
  opacity:0,
  duration:1
})
tl.from(".one>h1",{
  stagger:0.3,
  opacity:0,
  y:100
})

tl.from(".two h1",{
  scale:0,
  opacity:0,
  scrollTrigger: {
    trigger: ".two h1",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 100%",
    end:"top 30%"
  }
})

tl.from(".about img",{
  scale:0,
  opacity:0,
  scrollTrigger: {
    trigger: ".about img",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 60%",
    end:"top 30%"
  }
})
tl.from(".abouttxt",{
  scale:0,
  opacity:0,
  scrollTrigger: {
    trigger: ".abouttxt",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 100%",
    end:"top 30%"
  }
})

tl.to("#name-div h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#name-div h1",
    scroller: ".all",
  //   markers:true,
    scrub: 0.7
  }
})


tl.from("#two",{
  opacity:0,
  scrollTrigger: {
    trigger: "#two",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 60%",
    end:"top 30%"
  }
})

tl.from(".projects",{
  opacity:0,
  scrollTrigger: {
    trigger: ".projects",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 60%",
    end:"top 30%"
  }
})

tl.from(".project1",{
  opacity:0,
  scrollTrigger: {
    trigger: ".project1",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 60%",
    end:"top 30%"
  }
})

tl.from(".formsubmit,.contactinfo",{
  opacity:0,
  scrollTrigger: {
    trigger: ".formsubmit,.contactinfo",
    scroller: ".all",
    // markers:true,
    scrub: 0.7,
    start:"top 40%",
    end:"top 30%"
  }
})