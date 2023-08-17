let x = 0
const select = (e) => document.getElementById(e)
const nexted = select('nexted')
const bottled = select('bottled')
const title = select('title')
const engagement = select('engagement')
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

function provence(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    bottled.src = 'assets/img/Odyssée rosé.png'
    title.innerText = 'Côtes de Provence'
    engagement.innerText = 'ENGAGEMENT I'
}

function merlot(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    bottled.src = 'assets/img/Odyssée rouge.png'
    title.innerText = 'Bordeaux'
    engagement.innerText = 'ENGAGEMENT II'
}

function sauvignon(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

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