# Databases

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

- tabular database, flat
- define what a user looks like
- has name, age, city
- every user must follow that pattern
- define table, add instances of users to table
- not flexible, pattern

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
