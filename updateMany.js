const MongoClient = require("./helps/mongodb");
const url = require("./helps/get-url");

var update_one=(db,callback)=>{
    const collection=db.collection("users");
    collection.updateMany({name:"Rose"},{$set:{job:"driver"}},(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }

        db.close()
    });
};


MongoClient.connect(url,(err,db)=>{
    console.log("连接成功");
    update_one(db,(result)=>{
        console.log(result);
    });
});