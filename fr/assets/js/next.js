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
const header = select('#header')

function provence(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    root.style.setProperty('--main-color', '#F3C4B6');
    root.style.setProperty('--sec-color', '#EAE4D5');

    bottled.src = 'assets/img/Odyssée rosé.png'
    title.innerText = 'Côtes de Provence'
    engagement.innerText = 'Du site internet à la bouteille, nous choisissons de mentionner le terroir, l’année et les vignerons à l’origine de l’élaboration de chaque cuvée.'
}

function merlot(){

    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)

    root.style.setProperty('--main-color', '#EAE4D5');
    root.style.setProperty('--sec-color', '#f3f3b6');


    bottled.src = 'assets/img/Odyssée rouge.png'
    title.innerText = 'Bordeaux'
    engagement.innerText = 'Sensibiliser et impliquer dans la démarche de développement durable les Clubs, les licenciés, les publics et les partenaires.'
}

function sauvignon(){


    setTimeout(()=> {
        nexted.disabled = false
    }, 1000)
    
    root.style.setProperty('--main-color', '#f3f3b6');
    root.style.setProperty('--sec-color', '#F3C4B6');

  
    

    bottled.src = 'assets/img/Odysée blanc.png'
    title.innerText = 'Sauvignon'
    engagement.innerText = 'Une entreprise durable est une entreprise qui travaille en phase avec les objectifs liés à la société et à lenvironnement, plutôt quen contradiction avec eux.'
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

const root = document.querySelector(':root');

