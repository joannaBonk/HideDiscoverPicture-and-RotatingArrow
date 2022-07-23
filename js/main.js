const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')


// 1. nasłuchiwanie na clicka na przycisk
// 2. dodawanie klasy 'hide'
// 3. obracać strzałkę

const showImg = () => {
    img.classList.toggle('hide')


}

arrowBtn.addEventListener('click', showImg)