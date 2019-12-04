
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql =require('mysql');


//create connection
const db=mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database :'projetnodejs'
});


db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected');
})



exports.departments_get_all = (req,res) => {
   
    let sql ='SELECT * FROM department';
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        console.log(result);
        res.status(200).json({
            result
        })
    })
}


exports.department_add = (req,res) => {
    

    const id=req.body.id_dept;
    const intitule=req.body.intitule;
    


    let department = {id_dept:id ,intitule:intitule};
    let sql ='INSERT INTO department set ?';
    let query = db.query(sql,department,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        console.log(result);
        res.status(200).json({
            result
        })
    })
}


exports.departments_get_byid = (req,res) => {
   
    let sql =`SELECT * FROM department WHERE id_dept = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "department not found"
            })
        }

            console.log(result);
            res.status(200).json({
                result
            })

        
    })
}

exports.department_update_byid = (req,res) => {
    const id =req.params.id;
    
    
    let sql =`SELECT * FROM department WHERE id_dept = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "department not found"
            })
        }         
    const intitule=req.body.intitule;
    



    let sql =`UPDATE department set id_dept='${id}',intitule='${intitule}' WHERE  id_dept = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        console.log(result);
        res.status(200).json({
            result
        })
    })
        
    })
}


exports.department_delete_byid =(req,res) => {


    let sql =`SELECT * FROM department WHERE id_dept = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "department not found"
            })
        }      
    let sql =`DELETE FROM department  WHERE  id_dept = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        //console.log(result);
        res.status(200).json({
            result
        })
    })

})
}