const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('Planets:all-planets-ready', this.planets)

  PubSub.subscribe('SelectView:click', (event) => {
    const selectedIndex = event.detail
    this.publishPlanetDetail(selectedIndex);
  })
}

SolarSystem.prototype.publishPlanetDetail = function(planetIndex){
  const selectedPlanet = this.planets.find(function(planet){
      return planetIndex === planet.name
  })
  console.log(selectedPlanet);
  
  PubSub.publish('Planets:selected-planet-ready', selectedPlanet)
}


module.exports = SolarSystem;
