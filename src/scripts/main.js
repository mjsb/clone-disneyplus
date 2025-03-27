document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if ( posicaoAtual < alturaHero ) {
            ocultaHeader()
        } else {
            exibeHeader()
        }
    })

    // Seção de atrações, programação das abas.

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const tabTarget = button.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideTabs()
            tab.classList.add('shows__list--is-active')
            removeActiveButton()
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, acordion

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta)
    }
})

function ocultaHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function abreFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const tabContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('shows__list--is-active')
    }
}
