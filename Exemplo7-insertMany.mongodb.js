use("Fatec")
db.getCollection("Pokemon").insertMany([
    {
        "#": 1,
        "Name": "EMILY",
        "Type 1": "Grass",
        "Type 2": "Poison",
        "Total": 318,
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp": {
        " Atk": 65,
        " Def": 65
        },
        "Speed": 45,
        "Generation": 1,
        "Legendary": true
    }
])
