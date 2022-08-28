window.onload = function(){
    // Hamburger
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
    const background = document.getElementsByClassName('background')[0]
    const navbar = document.getElementsByClassName('navbar')[0]

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger-clicked')
        hamburgerMenu.classList.toggle('display-block')
        background.classList.toggle('display-block')
        navbar.classList.toggle('positionFixed')
    })
    
    // Script
    const cards = document.getElementsByClassName("card-normal");
    const cardsHover = document.getElementsByClassName("card-hover")

    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener('mouseenter', () => {
            cards[i].classList.add('displayNone')
            cardsHover[i].style.display = 'flex'
        })
        cardsHover[i].addEventListener('mouseleave', () => {
            cards[i].classList.remove('displayNone')
            cardsHover[i].style.display = 'none'
        })
    }

    let active = 0
    let prev = 0

    const promotions = document.getElementsByClassName("promotion")
    for(let i = 0; i < promotions.length; i++){
        promotions[i].style.order = i+1
    }

    setInterval(()=>{
        right()
        setTimeout(()=>{
            promotions[prev].classList.remove('leavetoLeft')
            for(let i = 0; i < promotions.length; i++){
                promotions[i].style.order -= 1
                if(promotions[i].style.order <= 0) promotions[i].style.order = promotions.length
            }
            promotions[active].classList.remove('leavetoLeft')
        }, 1000)
    } , 3500)
    
    function right(){
        prev = active
        active = getNextIdx(active)
        promotions[prev].classList.add('leavetoLeft')
        promotions[active].classList.add('leavetoLeft')
    }

    function getNextIdx(idx){
        idx += 1
        if(idx >= promotions.length) idx = 0
        return idx
    }
    
    function getPrevIdx(idx){
        idx -= 1
        if(idx < 0) idx = promotions.length-1
    }
}
