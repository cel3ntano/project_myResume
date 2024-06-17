import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const firstElement = document.querySelector('.ac:first-child');
firstElement.classList.add('open');
firstElement.querySelector('.ac-panel').style.display = 'block';

document.addEventListener('DOMContentLoaded', (event) => {
    const accordionElement = document.querySelectorAll('.ac')
    accordionElement.forEach(element => {
        element.style.backgroundColor = 'var(--White)';
    })
    firstElement.style.backgroundColor = 'var(--Accent-secondary)';
});

new Accordion('.accordion-container', {
    duration: 250,
    showMultiple: false,
    openOnInit: [0],
    onOpen: function (currentElement) {
        const down = currentElement.querySelector('.icon-button-faq-down');
        const up = currentElement.querySelector('.icon-button-faq-up');
        down.classList.toggle('open');
        up.classList.toggle('open');
        currentElement.style.backgroundColor = 'var(--Accent-secondary)';

        const elements = document.querySelectorAll('.ac');
        elements.forEach(element => {
            if (element !== currentElement) {
                element.style.backgroundColor = 'var(--White)';
                element.style.transition.background = 'var(--White)';

                element.classList.remove('open');
            }
        });
    },
    onClose: function (currentElement) {
        const down = currentElement.querySelector('.icon-button-faq-down');
        const up = currentElement.querySelector('.icon-button-faq-up');
        down.classList.toggle('open');
        up.classList.toggle('open');
        currentElement.style.backgroundColor = 'transparent';

        if (currentElement === firstElement) {
            firstElement.style.backgroundColor = 'var(--Accent-secondary)';
        }
    },
});