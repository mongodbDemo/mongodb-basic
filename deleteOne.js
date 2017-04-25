const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");

var delete_one=(db,callback)=>{
    const collection=db.collection("users");
    collection.deleteOne({name:"Rose"},(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }

        db.close();
    })
};


MongoClient.connect(url, (err, db)=> {
       console.log("连接成功！");
       delete_one(db,(result)=>{
           console.log(result);
       });
});