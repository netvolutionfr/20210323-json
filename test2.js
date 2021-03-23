const contacts = [
    {
        "id": 1,
        "nom": "Dupon",
        "prenom": "Jean",
        "email": "jean.dupont@example.com",
        "adresse": {
            "rue": "route de Calais",
            "codepostal": "62280",
            "ville": "St Martin Boulogne"
        }
    },
    {
        "id": 2,
        "nom": "Durand",
        "prenom": "Paul",
        "email": "paul.durand@example.com",
        "adresse": {
            "rue": "rue de Paris",
            "codepostal": "62100",
            "ville": "Calais"
        },
        "telephones": [
            {"numero": "0321101010"},
            {"numero": "0610101010"},
            {"zerzer": [1,2,3]}
        ]
    },
    {
        "id": 3,
        "nom": "Martin",
        "prenom": "Jacques",
        "email": "jacques.martin@example.com"
    }
]


console.log(contacts);
console.log(contacts[0].id);

console.log(contacts[1].telephones[2].zerzer[2]);
