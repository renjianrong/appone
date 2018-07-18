const USERS_SELECT_USERID = 'USERS_SELECT_USERID';
const USERS_SELECT_USERNAME = 'USERS_SELECT_USERNAME';
const USERS_INSERT = 'USERS_INSERT';
const USERS_SELECT_ALL = 'USERS_SELECT_ALL';
const USERS_DEL='USERS_DEL';
const USERS_MODIFY='USERS_MODIFY';
module.exports={
    [USERS_SELECT_USERID]:'select userid from users where userid=?',
    [USERS_SELECT_USERNAME]:'select username from users where username=?',
    [USERS_INSERT]:'insert into users (userid,username,moneyBase) values (?,?,?)',
    [USERS_SELECT_ALL]:'select * from users',
    [USERS_DEL]:'delete from users where userid=?',
    [USERS_MODIFY]:'update users set username=? where userid=?'
}
