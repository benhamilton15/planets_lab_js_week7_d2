const PubSub = require('../helpers/pub_sub.js')

const PlanetInfoView = function(container){
    this.container = container;
}

PlanetInfoView.prototype.bindEvents = function(){
    PubSub.subscribe('Planets:selected-planet-ready', (event) =>{
        const planet = event.detail
        this.render(planet)
    })
}

PlanetInfoView.prototype.render = function(planet){
    keys = []
    this.container.innerHTML = ''
    for (key in planet) {
        if (key === 'image'){
            const infoImage = document.createElement('img')
            infoImage.setAttribute("src", `${planet.image}`)
            console.log(planet.image)
            this.container.appendChild(infoImage)
        }
        else {
            const infoParagraph = document.createElement('li')
            infoParagraph.textContent = `${planet[key]}`
            this.container.appendChild(infoParagraph)
        }
    }
}

module.exports = PlanetInfoView;

