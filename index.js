// make smoot scrolling using lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll(".aspect-square").forEach(elem => {
  let img = elem.querySelector("img")
  // console.log(img)
  let xrandom = gsap.utils.random(-100, 100)
  let t1 = gsap.timeline({

  })
  t1
  .set(img,{
    transformOrigin:`${xrandom < 0 ? 0 : '100%'}`
  },"start")
  .to(img, {
    scale: 0,
    ease: "none",
    scrollTrigger: {
      trigger: img,
      start: "top top",
      end: "bottom top",
      scrub: 1
    }
  },"start")
  .to(elem,{
    xPercent: xrandom,
    ease: "transform 0.6s cubic-bezier(0.45, 0, 0.55, 1)",
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  },"start")
  
})