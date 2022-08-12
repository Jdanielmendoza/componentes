let carrusel = document.querySelector(".container-items");
let intervalo= null ; 
let step= 2; 
let max = carrusel.scrollWidth - carrusel.clientWidth; 
const start = () => {
    intervalo = setInterval(() => {
        carrusel.scrollLeft += step;
        if(carrusel.scrollLeft === max){
            step *= -1; 
        }else if(carrusel.scrollLeft == 0){
            step *= -1
        }
    },10);
}

const stop = ()=>{
    clearInterval(intervalo);
}
carrusel.addEventListener('mouseover' , () => {
    stop();
});
carrusel.addEventListener('mouseout' , () => {
    start();
});
start();