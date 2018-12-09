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

  //delete many
  // db.collection('Todos').deleteMany({text: "Eat launch"}).then((result) =>{
  //   console.log(result);
  // });

  //Delete One
  // db.collection('Todos').deleteOne({text: 'Take the dog out'}).then((res)=>{
  //   console.log(res);
  // });

  //FindOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
  //   console.log(res);
  // });

  //Challenge
  // db.collection('Users').deleteMany({name: "Bar"}).then((res)=>{
  //   console.log(res);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c0945f61335152060a33f1f")}).then((res)=>{
    console.log(res);
  });
  // client.close();
});
