const {select,insert}=require("../mysql/index.js")
const {USERS_SELECT_USERID,USERS_SELECT_USERNAME,USERS_INSERT}=require("../mysql/sql.js");

async function dealMysql(userid,username,moneyBase,res) { 
    // let userid_info=await select(USERS_SELECT_USERID,[userid]);
    // if(userid_info.length===0){
    //     let username_info = await select(USERS_SELECT_USERNAME,[username]);
    //     if(username_info.length===0){
    //         let inser_info = await insert(USERS_INSERT,[userid,username,moneybase]);
    //         res.send({msg:'创建成功',code:1});
    //     }else{
    //         res.send({msg:'用户名重复',code:0}); 
    //     }
    // }else{
    //     res.send({msg:"用户名id重复",code:0})
    // }
    
    let inser_info = await insert(USERS_INSERT,[userid,username,moneyBase]);
    res.send({msg:'创建成功',code:1});
}

module.exports=(req,res,next)=>{
    let {userid,username,moneyBase}=req.body;
    if(userid===""||username===""||moneyBase===""){
        res.send({msg:"参数错误",code:0})
         }
      
    dealMysql(userid,username,moneyBase,res);
    
}