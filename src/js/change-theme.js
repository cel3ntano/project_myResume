const switcher = document.querySelector('.theme-btn')
const switchThem = document.querySelector('.switch-theme')

const changeThem = () => {
    console.log(switchThem.classList);
    switchThem.classList.toggle('edit-circle')
}

switcher.addEventListener('change', changeThem)