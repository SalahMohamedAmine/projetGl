const Etudiant  = require('../models/etudiant');
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

exports.etudiant_create_table = (req,res) => {
    let sql = "CREATE TABLE etudiant(cin varchar(8) , nom VARCHAR(25),prenom VARCHAR(25), adresse VARCHAR(255), email VARCHAR(25),telephone VARCHAR(16),PRIMARY KEY (cin))";
    db.query(sql , (err,result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.send('table posts cretaed')
    })
}


exports.etudiants_get_all = (req,res) => {
   
    let sql ='SELECT * FROM etudiant';
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


exports.etudiant_add = (req,res) => {
    

    const cin=req.body.cin;
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;


    let etudiant = {cin:cin ,nom:nom ,prenom:prenom ,adresse:adresse ,email:email ,telephone:telephone };
    let sql ='INSERT INTO etudiant set ?';
    let query = db.query(sql,etudiant,(err,result) => {
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


exports.etudiants_get_byid = (req,res) => {
   
    let sql =`SELECT * FROM etudiant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "etudiant not found"
            })
        }

            console.log(result);
            res.status(200).json({
                result
            })

        
    })
}

exports.etudiant_update_byid = (req,res) => {
    const id =req.params.id;
    
    
    let sql =`SELECT * FROM etudiant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "etudiant not found"
            })
        }         
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;



    let sql =`UPDATE etudiant set nom='${nom}',prenom='${prenom}',adresse='${adresse}',email='${email}',telephone='${telephone}' WHERE  cin = ${req.params.id}`;
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


exports.etudiant_delete_byid =(req,res) => {


    let sql =`SELECT * FROM etudiant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "etudiant not found"
            })
        }      
    let sql =`DELETE FROM etudiant  WHERE  cin = ${req.params.id}`;
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

exports.etudiant_login = (req,res,next)=>{
    const id =req.body.cin;
    let sql =`SELECT * FROM etudiant WHERE cin = ${req.body.cin}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "Auth failed"
            })
        }         
        //const nom=req.body.nom;
        //const prenom=req.body.prenom;
        //const adresse=req.body.adresse;
        //const email=req.body.email;
        //const telephone=req.body.telephone;

        const token= jwt.sign({
            email: result[0].email,
            userId:result[0].cin
        },'secret',{
            expiresIn:'1h'
        })
        return res.status(200).json({
            message : 'Auth successful',
            token: token

        })
        
    })
}

