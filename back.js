let currentSlide = 0;

function atualizaButtonCarousel(){
    const imgs = document.querySelectorAll('.carousel-button-img');
    let contador = 0;

    imgs.forEach(i =>{
        if(contador === currentSlide){
            i.src = "img/icons/circle-fill.svg";
        }
        else{
            i.src = "img/icons/circle-empty.svg";
        }
        contador++;
    });

}

function showSlide(index){
    const slides = document.querySelectorAll('.div-flex-img-txt');
    
    if(index >= slides.length){
        currentSlide = 0;
    }
    else if(index < 0){
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;

    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`;
    });

    atualizaButtonCarousel();
}

showSlide(currentSlide);