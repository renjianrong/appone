const {insert} = require('../mysql');
const {USERS_MODIFY} = require('../mysql/sql');
async function dealMysql(newUsername,userid,res){
    let modify_info = await insert(USERS_MODIFY,[newUsername,userid]);
    res.send({msg:'更改数据成功',code:1,data:modify_info});
}
module.exports = (req,res,next)=>{
    let {userid,newUsername,}=req.body;
    dealMysql(newUsername,userid,res);
}