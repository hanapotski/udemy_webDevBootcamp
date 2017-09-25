## Referencing Data
posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]

#### embedded data
* each post is stored inside an array
{
  email: "asdf",
  name: "asdf",
  posts: [
    {title: "asdfa", content: "asdfas"},
    {title: "asdfa", content: "asdfas"},
    {title: "asdfa", content: "asdfas"},
  ]
}

#### referencing data
* store ids in array
* ids will correspond to individual post
{
  email: "asdf",
  name: "asdf",
  posts: [
    165465497749,
    435354354387,
    436587373573
  ]
}

{
  id" 1241351134.
  title: "safas"
}
