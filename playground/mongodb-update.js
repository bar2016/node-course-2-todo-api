// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID("5c0d28933021f29b467beea3")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').find({_id:123}).toArray().then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: 123
  },{
    $inc:{
      age: 1
    },
    $set:{
      name: 'John'
    },
  },
  {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  //Challende
  // client.close();
});
