let weatherLondon = require('./weather');
//console.log(weatherLondon.coord.lat)
//console.log(weatherLondon.coord.lon)

let pilotAffected = [];

for (let pilot of weatherLondon.weather[0].pilotAffected) {
    if (pilot.age > 18) {
        pilotAffected.push(pilot);
    }
}
console.log(pilotAffected[0].name);
console.log(pilotAffected[0].age);