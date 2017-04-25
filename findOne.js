const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");

var find_one = (db, callback)=> {
       const collection=db.collection("users");
       collection.findOne({name:"Bob"},(err,result)=>{
           if(err){
               console.log("ERROR");
           }else{
               console.log("查找成功");
               callback(result);
           }
           db.close();
       })
};

MongoClient.connect(url, (err, db)=> {
    console.log("连接成功！");
    find_one(db,(result)=>{
      console.log(result);
    });
});