/**
 * Created by satyaveerkrovvidi on 4/3/18.
 */

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{
    if(err){
       return console.log('error connecting to mongo db server');
    }
    console.log('connected to mongo db server.. ');

    // const db = client.db('TodoApp');
    //
    // db.collection('Users').insertOne({
    //     name : 'sairam',
    //     age : 100,
    //     location:'shirdi'
    // },(err,result) =>{
    //     if(err){
    //         return console.log('error inserting data ',err);
    //     }
    //     // console.log('result :: ',JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id);
    // });
    //

    db.collection('Todos').insertOne({
        text : ' sairam ',
        completed : false
    },(err,result) =>{
        if(err){
            return console.log('error inserting data Todos ',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });


    client.close();
});

