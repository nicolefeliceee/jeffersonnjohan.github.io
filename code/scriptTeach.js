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
    const testimoniList = document.getElementsByClassName('testimoniTemplate')
    const arrowLeft = document.getElementsByClassName('arrow')[0]
    const arrowRight = document.getElementsByClassName('arrow')[1]

    let idxActive = 0;
    arrowRight.addEventListener('click', () => {
        testimoniList[idxActive].style.display = 'none'
        idxActive = (idxActive+1)%testimoniList.length
        testimoniList[idxActive].style.display = ''
    })
    arrowLeft.addEventListener('click', () => {
        testimoniList[idxActive].style.display = 'none'
        idxActive -= 1
        if(idxActive < 0) idxActive += testimoniList.length
        testimoniList[idxActive].style.display = ''
    })
}