const apikey = '***';
const ville = 'Phuket';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=' + apikey;

const tempElt = document.getElementById('temperature');
const villeElt = document.getElementById('ville');

fetch(url)
    .then( data => data.json())
    .then( res => {
        console.log(res);
        const temperature = res.main.temp - 273.15;
        tempElt.innerText = Math.round(temperature) + ' °C';

        villeElt.innerText = res.name;
    })

