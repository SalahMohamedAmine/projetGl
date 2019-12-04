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

exports.matieres_get_all = (req,res) => {
   
    let sql ='SELECT * FROM matiere';
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


exports.matiere_add = (req,res) => {
    

    const id=req.body.id_matiere;
    const intitule=req.body.intitule;
    const id_filiere=req.body.id_filiere;

    let matiere = {id_matiere:id ,intitule:intitule ,id_filiere:id_filiere};
    let sql ='INSERT INTO matiere set ?';
    let query = db.query(sql,matiere,(err,result) => {
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


exports.matieres_get_byid = (req,res) => {
   
    let sql =`SELECT * FROM matiere WHERE id_matiere = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "matiere not found"
            })
        }

            console.log(result);
            res.status(200).json({
                result
            })

        
    })
}

exports.matiere_update_byid = (req,res) => {
    const id =req.params.id;
    
    
    let sql =`SELECT * FROM matiere WHERE id_matiere = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "matiere not found"
            })
        }         
    const intitule=req.body.intitule;
    const id_filiere=req.body.id_filiere;




    let sql =`UPDATE matiere set intitule='${intitule}',id_filiere='${id_filiere}' WHERE  intitule = ${req.params.id}`;
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


exports.matiere_delete_byid =(req,res) => {


    let sql =`SELECT * FROM matiere WHERE id_matiere = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "matiere not found"
            })
        }      
    let sql =`DELETE FROM matiere  WHERE  id_matiere = ${req.params.id}`;
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