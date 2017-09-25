# Mongoose chos

#### repair
cd ~
killall mongod
./mongod --repair
rm -fv data/mongod.lock
echo 'mongod --dbpath=data --nojournal --rest --httpinterface "$@"' > mongod


#### promise warning
* Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library
instead: http://mongoosejs.com/docs/promises.html


mongoose.Promise = global.Promise;
- plug in after requiring

#### connect()
* `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead,
or set the `useMongoClient` option if using `connect()` or `createConnection()`

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
