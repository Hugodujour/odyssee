let x = 0
const select = (e) => document.querySelector(e)
const nexted = select('#nexted')
const bottled = select('#bottled')
const title = select('#title')
const engagement = select('#engagement')


delay = 1000


nexted.addEventListener('click', () => {
    nexted.disabled = 'disabled'
    x++
    if (x === 1){
        
        bottleAnimation(bottled)
        setTimeout(() => {
            merlot()
        }, delay)
    }
    if (x === 2){
        
        bottleAnimation(bottled)
        setTimeout(() => {
            sauvignon()
        }, delay)
    }
    if(x === 3){
        bottleAnimation(bottled)
        setTimeout(() => {
            provence()
        }, delay)
        x = 0
    }
    console.log(x)
    
})


const main = select('#main')
const wine = select('#wine1')
const textColor = select('#textColor')
const provenced = select('#provenced2')

function provence(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    main.style.background = 'var(--main-color-pro)'
    wine.style.background = 'var(--main-color-pro)'
    textColor.style.color = 'var(--black-color)'

    bottled.src = 'assets/img/Odyssée rosé.png'
    title.innerText = 'Côtes de Provence'
    engagement.innerText = 'ENGAGEMENT I'
}

function merlot(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    main.style.background = 'var(--main-color-mer)'
    wine.style.background = 'var(--main-color-mer)'
    textColor.style.color = 'var(--white-color)'

    bottled.src = 'assets/img/Odyssée rouge.png'
    title.innerText = 'Bordeaux'
    engagement.innerText = 'ENGAGEMENT II'
}

function sauvignon(){


    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    main.style.background = 'var(--main-color-sau)'
    wine.style.background = 'var(--main-color-sau)'
    textColor.style.color = 'var(--black-color)'

    bottled.src = 'assets/img/Odysée blanc.png'
    title.innerText = 'Sauvignon'
    engagement.innerText = 'ENGAGEMENT III'
}

function bottleAnimation(e){
    e.style.cssText = 'transform: translateX(-500px)'
    setTimeout(() => {
        e.style.cssText = 'transform: translateX(0px)'  
    }, 1000)
    
}

// delete heroAnim
function heroAnim(){
    const hero = select('#heroAnim')
    setTimeout(()=> {
        hero.classList.remove('heroAnim')
    }, 800)
}

heroAnim()