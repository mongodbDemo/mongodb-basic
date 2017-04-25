const MongoClient = require("./helps/mongodb");
const url=require("./helps/get-url");

var insert_one = (db, callback)=> {
    const collection=db.collection("users");
    collection.insertOne({"name":"blue"},(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }
        db.close();
    });
};

MongoClient.connect(url, (err, db)=> {
       console.log("连接成功！");
       insert_one(db,(result)=>{
         console.log("插入成功");
       });
});