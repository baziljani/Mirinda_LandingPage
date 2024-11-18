// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Page-load animation
gsap.from("#logo", {
  opacity: 0,
  scale: 0.5,
  rotate: 360,
  duration: 2,
  ease: "elastic.out(1, 0.5)",
});

const logo = document.querySelector("#logo");

logo.addEventListener("mouseenter", () => {
  gsap.to("#logo", {
    scale: 1.2,
    rotate: 15,
    duration: 0.5,
    ease: "power1.out",
  });
});

logo.addEventListener("mouseleave", () => {
  gsap.to("#logo", {
    scale: 1,
    rotate: 0,
    duration: 0.5,
    ease: "power1.out",
  });
});

gsap.to("#logo", {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "linear",
});




var tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#mirinda",{
    top: "110%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#mirinda",{
    width:"35%",
    top: "190%",
    left: "33%",
}, 'ca')
