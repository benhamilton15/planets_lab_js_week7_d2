const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element;
}

SelectView.prototype.bindEvents = function(){
    // PubSub.subscribe('Planets:all-planets-ready', (event) => {
    //     // const allPlanets = event.detail;
    //     this.populate(allPlanets)
    // })
    this.element.addEventListener('click', (event) => {
        const selectedIndex = event.target.id;
        PubSub.publish('SelectView:click', selectedIndex);
        console.log(selectedIndex)
    })
}

// SelectView.prototype.populate = function(planetsData){
//     console.log(planetsData)
//     planetsData.forEach((planet, index) =>{
//         const option = document.createElement('option')
//         option.textContent = planet.name
//         option.value = index
//         this.element.appendChild(option)
//     })
// }

module.exports = SelectView;