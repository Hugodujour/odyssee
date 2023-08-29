let x = 0
const select = (e) => document.querySelector(e)
const nexted = select('#nexted')
const bottled = select('#bottled')
const title = select('#title')
const engagement = select('#engagement')


delay = 350



nexted.addEventListener('click', () => {
    nexted.disabled = 'disabled'
    x++
    if (x === 1){
        displayMerlot()
    }
    if (x === 2){
        displaySauvignon()
    }
    if(x === 3){
        displayProvence()
    }
    console.log(x)
    
})


const main = select('#main')
const wine = select('#wine1')
const textColor = select('#textColor')
const provenced = select('#provenced2')
const header = select('#header')
const l1 = select('#list-1')
const l2 = select('#list-2')
const l3 = select('#list-3')
const accord = select('#accord-desc')

function provence(){

    setTimeout(()=> {
        nexted.disabled = false
    }, delay)

    root.style.setProperty('--main-color', 'var(--main-color-pro)');
    root.style.setProperty('--sec-color', 'var(--main-color-mer)');
    root.style.setProperty('--third-color', 'var(--third-color-pro)');

    bottled.src = 'assets/img/Odyssée rosé.png'
    title.innerText = 'Côtes de Provence'

    l1.innerText = l1Pro
    l2.innerText = l2Pro
    l3.innerText = l3Pro
    accord.innerText = accordPro
    engagement.innerText = engagementPro
}

function merlot(){

    setTimeout(()=> {
        nexted.disabled = false
    }, delay)

    root.style.setProperty('--main-color', 'var(--main-color-mer)');
    root.style.setProperty('--sec-color', 'var(--main-color-sau)');
    root.style.setProperty('--third-color', 'var(--third-color-mer)');


    bottled.src = 'assets/img/Odyssée rouge.png'
    title.innerText = 'Bordeaux'
    
    l1.innerText = l1Mer
    l2.innerText = l2Mer
    l3.innerText = l3Mer
    accord.innerText = accordMer
    engagement.innerText = engagementMer
}

function sauvignon(){


    setTimeout(()=> {
        nexted.disabled = false
    }, delay)
    
    root.style.setProperty('--main-color', 'var(--main-color-sau)');
    root.style.setProperty('--sec-color', 'var(--main-color-pro)');
    root.style.setProperty('--third-color', 'var(--third-color-sau)');

  
    

    bottled.src = 'assets/img/Odysée blanc.png'
    title.innerText = 'Sauvignon'

    l1.innerText = l1Sau
    l2.innerText = l2Sau
    l3.innerText = l3Sau
    accord.innerText = accordSau
    engagement.innerText = engagementSau

}


// change text Provence
const l1Pro = '45% Grenache, 25% Cinsault, 20% Carignan, 10% Mourvèdre.'
const l2Pro = 'Jolie couleur rose pâle, presque cristaline.'
const l3Pro = 'Délicat, facile à boire.'
const engagementPro = `Engagés envers la légèreté et la durabilité, notre vin est maintenant présenté dans des bouteilles allégées pour une expérience délicieuse et respectueuse de l'environnement.`
const accordPro = 'Se marie à merveille avec des charcuteries fines ou des fruits de mer.'


// change text Merlot
const l1Mer = `100% Merlot.`
const l2Mer = `Teinte pourpre intense et profonde.`
const l3Mer = `Arômes captivants de fruits à noyeaux et de cerises, nuances épicées.`
const engagementMer = `Nous sommes fiers de notre engagement croissant envers des pratiques plus durables, en collaborant étroitement avec des producteurs de plus en plus axés sur le bio pour vous offrir des produits de qualité supérieure.`
const accordMer = `Se déguste aussi bien avec de la viande rouge qu'avec de la viande blanche.`


// change text Sauvignon
const l1Sau = '70% Sauvignon Blanc, 30% Sauvignon Gris.'
const l2Sau = 'Magnifique couleur jaune pâle avec des reflets émeraude.'
const l3Sau = 'Frais, délicat, aux arômes exotiques.'
const engagementSau = `Bientôt, nos étiquettes seront imprimées avec une encre 100% biodégradable, reflétant notre engagement envers l'innovation durable et la préservation de l'environnement.`
const accordSau = `Sublime le carpaccio de noix de Saint-Jacques, et fruits de mer en tous genres.`










// animation
function bottleAnimation(e){
    e.style.cssText = 'transform: translateX(-500px)'
    setTimeout(() => {
        e.style.cssText = 'transform: translateX(0px)'  
    }, delay)
    
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


// display bottle on click + scroll link
function displayMerlot(){
    bottleAnimation(bottled)
    setTimeout(() => {
        merlot()
    }, delay)
    x = 1
}

function displaySauvignon(){
    bottleAnimation(bottled)
    setTimeout(() => {
        sauvignon()
    }, delay)
    x = 2
}

function displayProvence(){
    bottleAnimation(bottled)
    setTimeout(() => {
        provence()
    }, delay)
    x = 0
}

provence()




let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let xaa = e.clientX - rect.left;
  let yaa = e.clientY - rect.top;
  btn.style.setProperty('--x', xaa + 'px');
  btn.style.setProperty('--y', yaa + 'px');
});


// rectangle fill

document.addEventListener("DOMContentLoaded", function() {
    var rectangle = document.getElementById("rectangle");
  
    window.addEventListener("scroll", updateRectangle);
  
    function updateRectangle() {
      var scrollpercent = (document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  
      // Calculate the rectangle's height based on scroll percentage
      var heightPercent = scrollpercent * 100;
  
      // Ensure the height doesn't exceed 100%
      heightPercent = Math.min(heightPercent, 100);
  
      // Set the rectangle's height
      rectangle.setAttribute("height", heightPercent + "%");
    }
  });
  