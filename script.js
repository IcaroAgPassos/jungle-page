const firstSection = document.querySelector('.content-2');

const myObserver = new IntersectionObserver((entrada) =>{
    console.log(entrada);
})

myObserver.observe(firstSection);
