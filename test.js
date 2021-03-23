const objet = {
    "age": 23,
    "nom": "Dupont",
    "prenom": "Jean",
    "score": 54,
    "credits": 23.5,
    "position": {
        "x": 234,
        "y": 134,
        "ancienneposition": {
            "x": 232,
            "y": 120,
            "date": "2021-03-14"
        }
    }
}


objet.position.ancienneposition.x = 627;
console.log(objet.position.ancienneposition.x);
