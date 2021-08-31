const images = ['image-1', 'image-2', 'image-3', 'image-4'];
const sliderBody = document.querySelector('.slider-body');
const sliderBackground = document.querySelector('.wrapper');
const arrows = document.querySelectorAll('.arrow')

let count = 0;


arrows.forEach(arrow => arrow.addEventListener('click', (e) => {
    if (!e.target.closest('.arrow')) return;
    let click = e.target.closest('.arrow');
    if (click.classList.contains('left')) {
        count--;
        count = count < 0 ? images.length - 1 : count;
        changeSlide();
    } else {
        count++;
        count = count >= images.length ? 0 : count;
        changeSlide() 
    }
}))








// let count = 0
function changeSlide() {
    sliderBody.style.backgroundImage = `url(${images[count]}.jpg)`;
    sliderBackground.style.backgroundImage = `url(${images[count]}.jpg)`;
}





