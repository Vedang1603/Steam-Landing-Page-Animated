
var t1 = gsap.timeline({
    repeat:-1,
})
t1
.to(".imgcontainer",{
    width:"100%",
   ease: Expo.easeInOut,
   duration:1,
   stagger:2,

}, "a")

.to(".txt h1",{
    top:"0%",
   ease: Expo.easeInOut,
   duration:1,
   stagger:2,

},"a")
.to(".txt h1",{
    top:"-100%",
   ease: Expo.easeInOut,
   duration:1,
   delay:2,
   stagger:2,

},"a")