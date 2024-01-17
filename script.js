let h1intro = document.querySelectorAll('.animate_h1intro');
    h1intro.forEach(element => {
        element.style.transform = 'translateX(-5%)';
        element.style.opacity = '0';
        element.style.transition = 'transform 1s ease-out, opacity 1s ease-in-out';
    }
);

let para = document.querySelectorAll('.animate_para');
    para.forEach(element => {
        element.style.transform = 'translateY(-5%)';
        element.style.opacity = '0';
        element.style.transition = 'transform 1s ease-out, opacity 1s ease-in-out';
    }
);

let video = document.querySelectorAll('.animate_video');
    para.forEach(element => {
        element.style.transform = 'translateY(60px)';
        element.style.opacity = '0';
        element.style.transition = 'transform 1s ease-out, opacity 1s ease-in-out';
    }
);

let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height){
            let animateElements = document.querySelectorAll('.animate');
            animateElements.forEach(element => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
        }); 
        }
    });   
}


