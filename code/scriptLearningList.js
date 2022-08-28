window.onload = function(){
    // Hamburger
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
    const background = document.getElementsByClassName('background')[0]

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger-clicked')
        hamburgerMenu.classList.toggle('display-block')
        background.classList.toggle('display-block')
    })
    
    // Script
    const button = document.getElementsByClassName('extend-button')
    const containerCard = document.getElementsByClassName('card-container') 

    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){
            button[i].classList.toggle('extend-button-clicked')
            containerCard[2*i+1].classList.toggle('active')
        })
    }
}