const slidePlugin = (slideNumber = 0) => {
    const slides = document.querySelectorAll('.slide')
    slides[slideNumber].classList.add('active');
for(const slide of slides){
    slide.addEventListener('click', () => {
        deleteActiveClass(slide)
        slide.classList.add('active')
    })
}

let deleteActiveClass = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
}

slidePlugin(2);