const MongoClient = require("./helps/mongodb");
const url = require("./helps/get-url");

var update_data=(db,callback)=>{
    const collection=db.collection("users");
    collection.update({name:"Rose"},{$set:{job:"teacher"}},(err,result)=>{
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
    update_data(db,(result)=>{
        console.log(result);
    });
});