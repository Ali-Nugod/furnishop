window.onload = function() {}
ScrollReveal().reveal('.one',{
    origin: "left", distance:"40px", duration: 1500, delay:200, reset: false
});
ScrollReveal().reveal('.two',{
    origin: "bottom", distance:"40px", duration: 1500, delay:200, reset: true
});
ScrollReveal().reveal('.three', {
    origin: "bottom", distance:"40px", duration: 1500, delay:200, reset: false
});
ScrollReveal().reveal('.four',{
    origin: "bottom", distance:"40px", duration: 1500, delay:500, reset: false
});
ScrollReveal().reveal('.five',{
    origin: "left", distance:"40px", duration: 1500, delay:200, reset: false
});
ScrollReveal().reveal('.six',{
    origin: "bottom", distance:"40px", duration: 1500, delay:200, reset: true
});
ScrollReveal().reveal('.seven',{
    origin: "left", distance:"40px", duration: 1500, delay:500, reset: false
});
ScrollReveal().reveal('.eight',{
    origin: "bottom", distance:"40px", duration: 1500, delay:200, reset: false
});
ScrollReveal().reveal('.nine',{
    origin: "bottom", distance:"40px", duration: 1500, delay:200, reset: false
});
ScrollReveal().reveal('.ten',{
    origin: "bottom", distance:"40px", duration: 1500, delay:500, reset: false
});

let open = document.querySelector("#open");
let close = document.querySelector("#close");
let ul = document.querySelector("#menu");

open.onclick = function() {
    ul.classList.toggle("show");
    open.style.display= "none";
    close.style.display= "block";
}
close.onclick = function() {
    ul.classList.toggle("show");
    open.style.display= "block";
    close.style.display= "none";

}