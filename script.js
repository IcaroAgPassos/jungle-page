document.querySelectorAll('a[href^="#"]:not(.box-biomes)').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.box-biomes').forEach(box => {
    console.log(box.hash);
    box.addEventListener('click', (event) => {
        document.querySelectorAll('.biomes-card').forEach(card => card.classList.remove('active'))
        document.querySelector(box.hash)?.classList?.add('active')
        event.preventDefault();
    })
})