const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");  //数据库为second-sale


const find_all=(db,callback)=>{
    const collection=db.collection("users");
    //查找 users 文档中的所有数据
    collection.find({}).toArray((err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            console.log(" callback before");
            callback(result);
            console.log("callback after");
        }
    });
};

MongoClient.connect(url,(err,db)=>{
    //连接到表 users
    console.log("连接成功！");
    find_all(db,(result)=>{
      console.log(result.length);
        for(var i=0;i<result.length;i++){
            console.log(result[i]);
        }
        db.close();
    });
});

