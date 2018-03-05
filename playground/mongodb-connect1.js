/**
 * Created by satyaveerkrovvidi on 4/3/18.
 */


const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err,client) =>{
   if(err){
       return console.log('error connecting to mongodb');
   }
    var db = client.db('ToDoApp');

   db.collection('Users').insertOne({
       name : 'sairam',
       age : 100,
       location:'shirdi'
   },(err,result) =>{
       if(err){
           return console.log('error inserting data ',err);
       }
       console.log('result :: ',JSON.stringify(result.ops,undefined,2));
   });
   client.close();
});