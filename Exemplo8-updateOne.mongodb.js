use('Fatec')
db.Pokemon.updateOne(
    {Name:"EMILY"},
    {$set:{Name:"Emily Angel"}}
);

db.Pokemon.find({"Name":"Emily Angel"})