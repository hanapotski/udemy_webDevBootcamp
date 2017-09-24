## Embedding Data
User
Post

#### one:many
user, many posts


mkdir Associations
cd Associations
touch embed.js
npm install mongoose

var mongoose = require("mongoose");


posts: [postSchema]

{
  email: "asdf",
  name: "asdf",
  posts: [
    {title: "asdfa", content: "asdfas"},
    {title: "asdfa", content: "asdfas"},
    {title: "asdfa", content: "asdfas"},
  ]
}

newUser.posts.push
user.posts.push
