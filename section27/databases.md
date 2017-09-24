# Databases
cd ~
killall mongod
./mongod --repair
rm -fv data/mongod.lock
echo 'mongod --dbpath=data --nojournal --rest --httpinterface "$@"' > mongod

## Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface - write code to interact with it
      - add new info
      - remove all user
      - edit existing users
* SQL(relational) vs. NoSQL(non-relational)

SQL
SELECT * FROM users
INSERT asdfafas into

NoSQL
db.dogs.find();
dob.dobs.delete({age: 14});

### SQL Database

USERS TABLE
id  | name  | age  | city
-----------------------------
1   | Tim   | 57   | NYC
2   | Ira   | 24   | Missoula
3   | Sue   | 40   | Boulder

- have been around longest
- tabular database, flat
- define what a user looks like
- has name, age, city
- every user must follow that pattern
- define table, add instances of users to table
- not flexible, pattern
- must have ids

COMMENTS TABLE
id |           text
-------------------------------
1  | "lol"
2  | "Come visit Montana!"
3  | "I love puppies!!!"
4  | "Seriously Montana is great!"

- relationship bet users and comments
- join table

USER/COMMENTS JOIN TABLE
userId |  commentId
--------------------------
1      |    3
2      |    2
2      |    4
3      |    1


### NoSQL Database
- don't have to define a pattern
- more flexible
- no tables
- things can be nested, not flat
- looks like js
- bson
- js objects with key/value pairs

============================
A NON-RELATIONAL DATABASE:
============================
{
  name: "Ira",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favColor: "purple",
}

{
  name: "Tammy",
  age: 24,
  city: Missoula,
  comments: [
    {text: "Come visit Montana!"},
    {text: "Seriously Montana is great!"},
    {text: "Why does no one care about Montana???"}
  ],
  favFood: "purple",
}
