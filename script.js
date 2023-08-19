let buttonForMenu = document.getElementById('buttonForMenu')

console.log(buttonForMenu)


buttonForMenu.addEventListener('click', () => {
    let hiddenMenu = document.getElementById('hiddenMenu');
    if (hiddenMenu.classList.contains('invisibleMenu')) {
        hiddenMenu.classList.remove('invisibleMenu');
        hiddenMenu.classList.add('visibleMenu');
    } else if (hiddenMenu.classList.contains('visibleMenu')) {
        hiddenMenu.classList.remove('visibleMenu')
        hiddenMenu.classList.add('invisibleMenu');
    }
})


let target = document.getElementById('addAnimation');

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}
function callback(entries,observer) {
    console.log(entries[0].isIntersecting)
    if (entries[0].isIntersecting) {
        target.style.visibility='visible'
        target.classList.add('animate__fadeInLeft')
    } else {
        console.log(false)
    }
    //target.classList.add("testClass");
}

let observer = new IntersectionObserver(callback, options);
observer.observe(target);
