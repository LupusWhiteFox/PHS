
let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            let animateElements = document.querySelectorAll('.animate');
                animateElements.forEach(element => {
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
            }); 
        }
        if(top >= offset && top < offset + height){
            let animateElements = document.querySelectorAll('.animate_desc');
            animateElements.forEach(element => {
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                element.style.backgroundColor = '#FF88BB';
            }); 
        }
    });   
}


