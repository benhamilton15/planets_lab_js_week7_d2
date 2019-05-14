const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInfoView = require('./views/planet_info_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents()
  console.log(planetsDataModel.planets);

  const selectElement = document.querySelector('.planets-menu')
  const planetsMenu =new SelectView(selectElement)
  planetsMenu.bindEvents();

  const infoDiv = document.querySelector('section.planet-details')
  const planetInfoDisplay = new PlanetInfoView(infoDiv)
  planetInfoDisplay.bindEvents();

});
