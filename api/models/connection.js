const mysql =require('mysql');
const db=mysql.createConnection({
    
    host : 'localhost',
    user : 'root',
    password : '',
    database :'projetnodejs',

});

//var connection = mysql.createConnection('mysql://id11888269_root:polytech@localhost/id11888269_projetgl?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700');

db.connect((err) => {
    if(err){
        console.log("error",err);
    }
    console.log('Mysql Connected');
})

exports.db=db;