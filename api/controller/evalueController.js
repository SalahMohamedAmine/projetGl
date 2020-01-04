const Etudiant  = require('../models/etudiant');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql =require('mysql');

//wb5D@!KEebW6h@U
//salahmohamedamine93@gmail.com

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


//get all etudiant
exports.evalue_get_all = (req,res) => {
   
    let sql =`SELECT * FROM evalue ,etudiant,matiere where 
    etudiant.cin_etudiant =evalue.id_etudiant and  
    evalue.id_matiere =matiere.id_matiere `;
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
                "id_evalue":value.id_evalue,

                "etudiant":[
                {
                    "cin_etudiant":value.cin_etudiant,
                    "nom_etudiant":value.nom_etudiant,
                    "prenom_etudiant": value.prenom_etudiant,
                    "adresse_etudiant": value.adresse_etudiant,
                    "email_etudiant" :value.email_etudiant,
                    "telephone_etudiant":value.telephone_etudiant,
                }],
                "matiere":[
                {
                    "id_matiere":value.id_matiere,
                    "intitule_matiere":value.intitule_matiere,
                    "id_department":value.id_department,
                }],
                "id_filiere":value.id_filiere,
                "review":value.review
            }
            
        })

        res.status(200).json({
            arrayResult
        })
    })
}

//add new etrudiant
exports.evalue_add = (req,res) => {
    

    const id_etudiant =req.body.id_etudiant ;
    const id_matiere =req.body.id_matiere ;
    const review =req.body.review ;


    let evalue = {id_etudiant:id_etudiant ,id_matiere:id_matiere ,review:review  };
    let sql ='INSERT INTO evalue set ?';
    let query = db.query(sql,evalue,(err,result) => {
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



exports.evalue_get_byid = (req,res) => {

    //check if etudiant  exist or not
    let sql = `SELECT * FROM evalue ,etudiant,matiere where
        id_evalue  = ${req.params.id} and
        etudiant.cin_etudiant =evalue.id_etudiant and  
        evalue.id_matiere =matiere.id_matiere  `;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
            //if etudiant dosen't exist return bad request
           return res.status(400).json({
                message : "etudiant not found"
            })
        }
            //if etudiant exist return 200 status and return result
            console.log(result);
            let arrayResult=[];
            result.map((value,i) =>{
                arrayResult[i]={
                    "id_evalue":value.id_evalue,
    
                    "etudiant":[
                    {
                        "cin_etudiant":value.cin_etudiant,
                        "nom_etudiant":value.nom_etudiant,
                        "prenom_etudiant": value.prenom_etudiant,
                        "adresse_etudiant": value.adresse_etudiant,
                        "email_etudiant" :value.email_etudiant,
                        "telephone_etudiant":value.telephone_etudiant,
                    }],
                    "matiere":[
                    {
                        "id_matiere":value.id_matiere,
                        "intitule_matiere":value.intitule_matiere,
                        "id_department":value.id_department,
                    }],
                    "id_filiere":value.id_filiere,
                    "review":value.review
                }
                
            })
    
            res.status(200).json({
                arrayResult
            })

        
    })
}

exports.evalue_getEvalue_byidEtu_idMat = (req,res) => {

    //check if etudiant  exist or not
    let sql = `SELECT * FROM evalue ,etudiant,matiere where
        evalue.id_etudiant   = ${req.params.id_etudiant} and
        evalue.id_matiere =${req.params.id_matiere} and 
        evalue.id_etudiant = etudiant.cin_etudiant  and
        evalue.id_matiere = matiere.id_matiere`; 
        
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
            //if etudiant dosen't exist return bad request
           return res.status(400).json({
                message : "etudiant not found"
            })
        }
            //if etudiant exist return 200 status and return result
            console.log(result);
            let arrayResult=[];
            result.map((value,i) =>{
                arrayResult[i]={
                    "id_evalue":value.id_evalue,
                    "id_filiere":value.id_filiere,
                    "review":value.review,
                    "etudiant":[
                    {
                        "cin_etudiant":value.cin_etudiant,
                        "nom_etudiant":value.nom_etudiant,
                        "prenom_etudiant": value.prenom_etudiant,
                        "adresse_etudiant": value.adresse_etudiant,
                        "email_etudiant" :value.email_etudiant,
                        "telephone_etudiant":value.telephone_etudiant,
                    }],
                    "matiere":[
                    {
                        "id_matiere":value.id_matiere,
                        "intitule_matiere":value.intitule_matiere,
                        "id_department":value.id_department,
                    }],
                    
                }
                
            })
    
            res.status(200).json({
                arrayResult
            })

        
    })
}

