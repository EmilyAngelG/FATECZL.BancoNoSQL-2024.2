use("Fatec")
db.Pokemon.find().projection({_id:0, Name:1}).sort({Name:-1});