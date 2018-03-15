/**
 * Created by satyaveerkrovvidi on 5/3/18.
 */

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>{

    if(err){
        return console.log(' unable to connect to mongo db server');
    }

    var db = client.db('TodoApp');
    console.log(" connected to mongo db server ");

    /*db.collection('Todos').deleteMany({
        text:'do pooja'
    }).then((result) =>{
        console.log(result);
    })*/

    /*db.collection('Todos').deleteOne({
        name:'sai'
    }).then((result) =>{
       console.log(result.stauts);
    });*/

    db.collection('Todos').findOneAndDelete({
        name:'sai'
    }).then((result) =>{
       console.log(result);
    });

});