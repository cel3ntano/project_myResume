import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


// const firstElement = document.querySelector('.ac:first-child');
// firstElement.style.backgroundColor = 'var(--Accent-secondary)';
// const iconOpen = document.querySelectorAll('.is-close');
// const iconClose = document.querySelectorAll('.is-close');
// iconOpen.style.display = 'none';
// new Accordion('.accordion-container', {
//     duration: 300,
//     showMultiple: false,
//     openOnInit: [0],
//     onOpen: function (currentElement) {
//         currentElement.style.border = 'none';
//         currentElement.style.borderRadius = '16px';
//         currentElement.style.backgroundColor = 'var(--Accent-secondary)';
//         iconOpen.style.display = 'block';
//         iconClose.style.display = 'none';
//         if (currentElement !== firstElement) {
//             firstElement.style.backgroundColor = '';
//         }
//     },
//     onClose: function (currentElement) {
//         currentElement.style.backgroundColor = '';
//         currentElement.style.borderRadius = '0';
//         iconOpen.style.display = 'none';
//         iconClose.style.display = 'block';
//         if (currentElement === firstElement) {
//             firstElement.style.backgroundColor = 'var(--Accent-secondary)';
//         }
//     },
// });


const firstElement = document.querySelector('.ac:first-child');
firstElement.classList.add('open');
firstElement.querySelector('.ac-panel').style.display = 'block';

new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
    onOpen: function (currentElement) {
        currentElement.classList.add('open');
        currentElement.style.backgroundColor = 'var(--Accent-secondary)';

        const elements = document.querySelectorAll('.ac');
        elements.forEach(element => {
            if (element !== currentElement) {
                element.style.backgroundColor = 'var(--White)';
                element.classList.remove('open');
            }
        });
    },
    onClose: function (currentElement) {
        currentElement.style.backgroundColor = 'transparent';
        currentElement.classList.remove('open');

        if (currentElement === firstElement) {
            firstElement.style.backgroundColor = 'var(--Accent-secondary)';
        }
    },
});