// declarer l'url de mon API
const url = 'http://www.filltext.com/?rows=3&prenom={firstName}&nom={lastName}&email={email}';

// récupérer l'élement HTML dans lequel on va lister les résultats
const maliste = document.getElementById('liste');

// aller chercher les données de l'API
fetch(url)
    .then(data => data.json())
    .then(res => {
        // aussitôt que les données sont arrivées (asynchrone)
        res.forEach(p => { // prendre les éléments reçus un par un
            let li = document.createElement('li'); // construire un <li>
            li.innerText = p.prenom + ' ' + p.nom + ' (' + p.email + ')'; // remplir le <li> avec les données formattées
            maliste.appendChild(li); // ajouter le <li> à mon <ul>
        })
    })
