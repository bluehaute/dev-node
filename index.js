const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// set up our express app
const app = express();

// connect to mongodb
const uri = "mongodb+srv://react:react@bluecluster.7a9vj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.Promise = global.Promise;

//connect to atlas

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  console.log('collection', collection);
  console.log('collection size', collection.totalSize);
  // perform actions on the collection object
  client.close();
});

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Ready to Go!');
});