

const navbar = document.querySelector('.navbar')
const upperBtn = document.querySelector('.upperBtn')
window.onscroll = () => {
    navbar.classList.toggle('active' , scrollY > 470)
    upperBtn.classList.toggle('appear' , scrollY > 470)
}

// NavBurger 

const burgerInner1 = document.querySelector('.burger_inner1')
const burgerInner2 = document.querySelector('.burger_inner2')
const burgerInner3 = document.querySelector('.burger_inner3')
const showContent = document.querySelector('.navbar_body ul:nth-child(2)')

const burger = document.querySelector('.burger')
const showContainer = document.querySelector('.navbar_body')
burger.addEventListener('click' , e => {
    e.preventDefault()
    showContainer.classList.toggle('show')

    burgerInner2.classList.toggle('diseappear')
    burgerInner1.classList.toggle('rotate1')
    burgerInner3.classList.toggle('rotate2')
    showContent.classList.toggle('showContent')
})