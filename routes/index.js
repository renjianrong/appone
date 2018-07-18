var express = require('express');
var router = express.Router();

const submitSingleUser=require("../model/submitSingleUser.js");
const getallusers=require("../model/getallusers.js");
const deluser=require("../model/deluser.js");
const modifyUser=require("../model/modifyUser.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// 创建用户的接口submitSingleUser
router.post("/submitSingleUser",submitSingleUser);
// 获取所有用户的接口（用户管理）
router.get('/getallusers',getallusers); 
//删除用户的接口
router.post('/deluser',deluser);
//修改用户名的接口
router.post('/modifyUser',modifyUser);

module.exports = router;
