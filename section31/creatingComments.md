# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

### Nested Routes
INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments      POST

# recap
nested routes
campgrounds/:id/comments/new
setup routes
moved templates, views, linking to partials ../
created new and create comment routes
look up id, req.params.id
create comment
push comment to campground.comments
