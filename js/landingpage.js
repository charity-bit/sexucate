

window.addEventListener("DOMContentLoaded",()=>{



var tl = gsap.timeline({defaults:{duration:1}});


tl.from(".cta-buttons",{y:-50,stagger:0.6,opacity:0}).
from(".text h1",{y:50,opacity:0},"-=1.2").
from(".text p",{y:50,opacity:0},"-=0.5").
from(".impact p", {x:-100,stagger:0.6,opacity:0},"-=1.5")
.from("img",{x:100,opacity:0},"-=1.5")
})