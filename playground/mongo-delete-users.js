/**
 * Created by satyaveerkrovvidi on 15/3/18.
 */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client) =>{
   if(err){
       return console.log('err :: ');
   }

   console.log(" connected to mongodb.. ");

   var db = client.db('TodoApp');

   /*db.collection('Users').deleteMany({
       name:'sairam2'
   }).then((result) =>{
       console.log(' result :: ',result);
   });*/

   db.collection('Users').findOneAndDelete({
       name : 'sairam'
   }).then((response) =>{
     console.log(' response : ',response);
   })
});
