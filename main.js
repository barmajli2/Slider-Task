// const images = [
//     {
//         src: "images/1-baby.jpg"
//     },
//     {
//         src: "images/2-baby.jpg"
//     },
//     {
//         src: "images/3-baby.jpg"
//     },
//     {
//         src: "images/4-baby.jpg"
//     },
//     {
//         src: "images/5-baby.jpg"
//     },
//     {
//         src: "images/6-baby.jpg"
//     },
//     {
//         src: "images/7-baby.jpg"
//     },
// ];
// let figure = document.querySelector('figure');

let carts = Array.from(document.querySelectorAll('#carts img'));
let layer = document.querySelector('#layer');
let cart = document.querySelector('#cart');
let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
let btnClose = document.querySelector('#close');
let currentIndex = 0;
// url(./images/1-baby.jpg)


carts.forEach((item) => {
    item.addEventListener('click',(e)=>{
        layer.style.display = "flex";
        cart.style.backgroundImage = `url(/${e.target.getAttribute('src')})`
        currentIndex = carts.indexOf(e.target)
    })
})
// Next
btnLeft.addEventListener('click', ()=>{
    nextORprev(currentIndex++, carts.length, 0)
})
// Prev
btnRight.addEventListener('click', ()=>{
    nextORprev(currentIndex--, -1, carts.length - 1)
})
// Close
btnClose.addEventListener('click',close)
function close(){
    layer.style.display = "none";

}
// NEXT or PREV Function
function nextORprev( statusIndex, condition , result ){
    statusIndex
    if (currentIndex == condition) {
        currentIndex = result
    }
    cart.style.backgroundImage = `url(/${carts[currentIndex].getAttribute('src')})`
}
// keydown
document.addEventListener('keydown',(e)=>{
    if (e.key == "ArrowRight") {
        nextORprev(currentIndex++, carts.length, 0)
    } else if (e.key == "ArrowLeft") {
        nextORprev(currentIndex--, -1, carts.length - 1)
    } else if (e.key == "Escape") {
        close()
    }
})

layer.addEventListener('click', (e)=>{
    if (e.target != cart && e.target != btnLeft && e.target != btnRight) {
        close()
    }
})