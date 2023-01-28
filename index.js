let weatherLondon = require('./weather');
//console.log(weatherLondon.coord.lat)
//console.log(weatherLondon.coord.lon)

let pilotAffected = [];

for (let pilot of weatherLondon.weather[0].pilotAffected) {
    if (pilot.age > 18) {
        pilotAffected.push(pilot);
    }
}

for (var i=0; i < pilotAffected.length; i++){
    console.log(pilotAffected[i].name);
    console.log(pilotAffected[i].age);
}