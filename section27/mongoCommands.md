# Our First Mongo Commands
* mongod
  - starts daemon to use mongo
* mongo
  - opens a shell
  - quit ctrl + c
* help
* show dbs
  - show database names
* use
  - use <name>
  - use demo
  - create new database and use it
* insert
  - create
* find
  - find/retrieve
* update
  - update/edit
* remove
  - delete/destroy

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
db.dogs.remove({breed: "Labradoodle"}) - remove everything that matches
WriteResult({ "nRemoved" : 2 })
db.dogs.remove({breed: "Mutt"}).limit(1)
