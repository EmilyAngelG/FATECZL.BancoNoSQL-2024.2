use("Fatec")
db.NBA.find({"college":"Texas Tech"}).projection({_id:0, player_name:1, age:1, college:1}).sort({age:1});