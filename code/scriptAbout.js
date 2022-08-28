window.onload = function(){
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
    const background = document.getElementsByClassName('background')[0]

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger-clicked')
        hamburgerMenu.classList.toggle('display-block')
        background.classList.toggle('display-block')
    })
}