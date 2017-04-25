const MongoClient=require("./helps/mongodb");
const url=require("./helps/get-url");


var find_and_modify = ( db, callback)=> {
    const collection=db.collection("users");
    collection.findAndModify({name:"Bob"},{age:"30"},(result)=>{

    });
};


MongoClient.connect(url,(err,db)=>{
     console.log("连接成功！");
    find_and_modify(,db,(result)=>{

    });
});
