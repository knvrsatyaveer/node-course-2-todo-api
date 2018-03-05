/**
 * Created by satyaveerkrovvidi on 5/3/18.
 */

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
   if(err){
       return console.log(' error connecting to the database');
   }

   var db = client.db('TodoApp');

   // db.collection('Todos').find({
   //     _id : new ObjectID('5a9d2416eed3331e66c83bbb')
   //  }).toArray().then((response) =>{
   //          console.log(' response : ',JSON.stringify(response,undefined,2));
   //     },(err)=>{
   //         console.log(' err fetching data from database : ',err);
   //     });
   //
   // db.collection('Todos').find().count().then((count) =>{
   //    console.log(`count : ${count}`);
   // },(err) => {
   //     console.log(`error getting the count : ${err}`);
   // });
   //
   //
   // db.collection('Users').find({
   //     name: 'sairam'
   // }).toArray().then((users) =>{
   //     console.log(JSON.stringify(users,undefined,2))
   // },(err) =>{
   //     console.log(" error fetching users ",err);
   // });

    db.collection('Users').find({name:'sairam'}).toArray((err,docs)=>{
       if(err){
           console.log("error :: ",err);
       }else{
           console.log(' user details > ',JSON.stringify(docs));
       }
    });


});


