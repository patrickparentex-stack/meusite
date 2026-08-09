const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

// querySelectorAll pega TODOS os elementos que casam com o seletor,
// e não só o primeiro (como fazia o querySelector antigo)
const items = document.querySelectorAll('.item')
const pontos = document.querySelectorAll('.ponto')
const numeroIndicador = document.querySelector('.numeros')

let active = 0
const total = items.length

function update(direction) {

    // remove a classe "active" do item e do ponto atuais
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.ponto.active').classList.remove('active')

    active = active + direction

    // se passou do último, volta pro primeiro
    if (active >= total) {
        active = 0
    }

    // se foi antes do primeiro, vai pro último
    if (active < 0) {
        active = total - 1
    }

    // aplica a classe "active" no novo item/ponto
    items[active].classList.add('active')
    pontos[active].classList.add('active')

    // atualiza o número (01, 02, 03...)
    numeroIndicador.textContent = String(active + 1).padStart(2, '0')
}

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)
})
