const firstSection = document.querySelector('.content-2');

const myObserver = new IntersectionObserver((entrada) =>{
    console.log(entrada);
})

myObserver.observe(firstSection);

document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});