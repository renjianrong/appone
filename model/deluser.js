const {insert} = require('../mysql');
const {USERS_DEL} = require('../mysql/sql');
async function dealMysql(userid,res){
    console.log(userid);
    let del_info = await insert(USERS_DEL,[userid]);
    console.log(del_info);
    res.send({msg:'删除数据成功',code:1,data:del_info});
}
module.exports = (req,res,next)=>{
    let {userid}=req.body;
    dealMysql(userid,res);
}