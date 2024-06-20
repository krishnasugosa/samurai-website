const Econtainer = document.getElementById('e-container');
const page = document.getElementById('i-container');

window.addEventListener('scroll',()=>{
    let ScrollY = window.scrollY
    page.style.marginTop = ScrollY * -2.0 + "px";
    Econtainer.style.marginTop = ScrollY * -0.2 + "px";
});