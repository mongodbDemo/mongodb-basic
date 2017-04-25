const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");

var insertData = (db, callback)=> {
    const collection=db.collection("users");
    //要插入的数据
    const data=[{"name":"Look","age":"45"},
               {"name":"Rose","age":"27"}];
    collection.insert(data,(err,result)=>{
        if(err){
            console.log("ERROR");
        }else{
            callback(result);
        }

        db.close();
    });
};


MongoClient.connect(url,(err,db)=>{
    console.log("连接成功");
        insertData(db,(result)=>{
                console.log(result);
            })
        });