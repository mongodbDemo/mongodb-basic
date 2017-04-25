const MongoClient=require("./helps/mongodb");
const url = require("./helps/get-url");


var insert_many = (db, callback)=> {
   const collection=db.collection("users");
    const data=[{name:"Look",age:"45"},
        {name:"Rose",age:"27"}];
    collection.insertMany(data,(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }
    });
};

MongoClient.connect(url, (err,db)=> {
    console.log("连接成功!");
    insert_many(db,(result)=>{
        console.log("成功插入多条数据");
    });
});