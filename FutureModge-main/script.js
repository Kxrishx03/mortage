window.addEventListener("load", function(){
    document.querySelector('#main').style.height = 'auto';
    gsap.to('.loader',{
        y:'-100%',
        duration:1.5,
    })
  })

const menu = document.querySelector('#menu-toggler');
const close = document.querySelector('#close');

menu.addEventListener("click",()=>{
    console.log('click');
    gsap.to('#menu-bar',{
        y:'100%',
        duration:1.5,
    })
})

close.addEventListener("click",()=>{
    console.log('click');
    gsap.to('#menu-bar',{
        y:'-100%',
        duration:1.5,
    })
})