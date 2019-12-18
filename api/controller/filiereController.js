const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql =require('mysql');

/*    host : 'localhost',
    user : 'id11888269_root',
    password : 'polytech',
    database :'id11888269_projetgl',
    port: 3307
*/

//create connection
const db=mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database :'projetnodejs',
});


db.connect((err) => {
    if(err){
        console.log("error",err);
    }
    console.log('Mysql Connected');
})



exports.filieres_get_all = (req,res) => {
   
    let sql ='SELECT * FROM filiere ,department WHERE filiere.id_department = department.id_department';
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        console.log(result);

        let arrayResult=[];
        result.map((value,i) =>{
            arrayResult[i]={
                    "id_filiere":value.id_filiere,
                    "intitule_filiere":value.intitule_filiere,
                    "departement":{
                        "id_department":value.id_department,
                        "intitule_department":value.intitule_department,
                        
                    }
            }
        })

        res.status(200).json({
            arrayResult
        })
    })
}


exports.filiere_add = (req,res) => {
    

    const id=req.body.id;
    const intitule=req.body.intitule;
    const id_dept=req.body.id_dept;

    let filiere = {id_filiere:id ,intitule_filiere:intitule ,id_department:id_dept };
    let sql ='INSERT INTO filiere set ?';
    let query = db.query(sql,filiere,(err,result) => {
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


exports.filieres_get_byid = (req,res) => {
   
    let sql =`SELECT * FROM filiere ,department WHERE id_filiere = ${req.params.id} and filiere.id_department = department.id_department `;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "filiere not found"
            })
        }

            console.log(result);
            let arrayResult=[];
            result.map((value,i) =>{
            arrayResult[i]={
                    "id_filiere":value.id_filiere,
                    "intitule_filiere":value.intitule_filiere,
                    "departement":{
                        "id_department":value.id_department,
                        "intitule_department":value.intitule_department,
                        }
            }
        })

        res.status(200).json({
            arrayResult
        })
        
    })
}

exports.filiere_update_byid = (req,res) => {
    const id =req.params.id;
    
    
    let sql =`SELECT * FROM filiere WHERE id_filiere = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "filiere not found"
            })
        }         
    const intitule=req.body.intitule;
    const id_dept=req.body.id_dept;

    let sql =`UPDATE filiere set intitule_filiere='${intitule}',id_department='${id_dept}' WHERE  id_filiere = ${req.params.id}`;
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


exports.filiere_delete_byid =(req,res) => {


    let sql =`SELECT * FROM filiere WHERE id_filiere = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "filiere not found"
            })
        }      
    let sql =`DELETE FROM filiere  WHERE  id_filiere = ${req.params.id}`;
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