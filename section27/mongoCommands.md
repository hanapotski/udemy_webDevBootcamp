# Our First Mongo Commands
* mongod
* mongo
* help
* show dbs
  - show database names
* use
  - use <name>
* insert
* find
* update
* remove

- separate database for every app
- use <name of database>

### Collection: Dogs
name
age
breed

db.dogs.insert({name: "Rusty", breed: "Mutt"})
- db = demo
- dogs = collection
- insert = add data

show collections
- show collections

db.dogs.find()
- will return all dogs w/o arguments


## CRUD - create, read, update, delete
insert = create
db.dogs.insert({name: "Rusty", breed: "Mutt"})

read = find
db.dogs.find() - find all
db.dogs.find({name: "Rusty"})

update = update
db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"}) - overwrite
db.dogs.update({name: "Rusty"}, {$set: {name:"Tater", isCute: true}})

destroy = delete
db.dogs.remove({breed: "Labradoodle"})
