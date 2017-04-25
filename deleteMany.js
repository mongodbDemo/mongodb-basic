const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");


var delete_many = (db, callback)=> {
    var collection=db.collection("users");
    collection.deleteMany({name:"Look"},(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }

        db.close();
    })
};

MongoClient.connect(url, (err, db)=> {
    console.log("连接成功");
    delete_many(db,(result)=>{
        console.log(result);
    });
});