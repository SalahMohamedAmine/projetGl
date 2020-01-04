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
exports.etudiants_get_all = (req,res) => {
   
    let sql ='SELECT * FROM etudiant ,filiere where etudiant.id_filiere=filiere.id_filiere';
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
                "etudiant":[
                {
                    "cin_etudiant":value.cin_etudiant,
                    "nom_etudiant":value.nom_etudiant,
                    "prenom_etudiant": value.prenom_etudiant,
                    "adresse_etudiant": value.adresse_etudiant,
                    "email_etudiant" :value.email_etudiant,
                    "telephone_etudiant":value.telephone_etudiant,
                }],
                "Filiere":[
                {
                    "id_filiere":value.id_filiere,
                    "intitule_filiere":value.intitule_filiere,
                    "id_department":value.id_department,
                }]
            }
            
        })

        res.status(200).json({
            arrayResult
        })
    })
}

//add new etrudiant
exports.etudiant_add = (req,res) => {
    

    const cin=req.body.cin;
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;
    const id_filiere=req.body.id_filiere;


    let etudiant = {cin_etudiant:cin ,nom_etudiant:nom ,prenom_etudiant:prenom ,adresse_etudiant:adresse ,email_etudiant:email ,telephone_etudiant:telephone,id_filiere:id_filiere };
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


//select a etudiant by cin
exports.etudiants_get_byid = (req,res) => {
    
    //check if etudiant  exist or not
    let sql =`SELECT * FROM etudiant,filiere  WHERE cin_etudiant = ${req.params.id} and  etudiant.id_filiere=filiere.id_filiere`;
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
                    "etudiant":[
                    {
                        "cin_etudiant":value.cin_etudiant,
                        "nom_etudiant":value.nom_etudiant,
                        "prenom_etudiant": value.prenom_etudiant,
                        "adresse_etudiant": value.adresse_etudiant,
                        "email_etudiant" :value.email_etudiant,
                        "telephone_etudiant":value.telephone_etudiant,
                    }],
                    "Filiere":[
                    {
                        "id_filiere":value.id_filiere,
                        "intitule_filiere":value.intitule_filiere,
                        "id_department":value.id_department,
                    }]
                }
                
            })
    
            res.status(200).json({
                arrayResult
            })

        
    })
}

//update etudiant 
exports.etudiant_update_byid = (req,res) => {
    const id =req.params.id;
    
        //check if etudiant  exist or not
    let sql =`SELECT * FROM etudiant WHERE cin_etudiant = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        } //if etudiant dosen't exist return bad request
        if(result.length ==0){
           return res.status(400).json({
                message : "etudiant not found"
            })
        }      
         //if etudiant exist get parametres from body    
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;
    const id_filiere=req.body.id_filiere;



    let sql =`UPDATE etudiant set nom_etudiant='${nom}',prenom_etudiant='${prenom}',adresse_etudiant='${adresse}',email_etudiant='${email}',telephone_etudiant='${telephone}',id_filiere='${id_filiere}' WHERE  cin_etudiant = ${req.params.id}`;
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

//delete etudiant
exports.etudiant_delete_byid =(req,res) => {


    let sql =`SELECT * FROM etudiant WHERE cin_etudiant = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }//if etudiant dosen't exist return bad request
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

})//end query
}


exports.getAllEnseignantByEtudiant=(req,res,next) =>{

    let sql =`SELECT nom_enseignant,prenom_enseignant,intitule_matiere,intitule_filiere FROM etudiant ,matiere, filiere , enseignant WHERE 
    etudiant.id_filiere=filiere.id_filiere and 
    filiere.id_filiere = matiere.id_filiere  and 
    matiere.id_enseignant=enseignant.cin_enseignant`;
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
}



/*exports.getAllMatiereByEtudiant=(req,res,next) =>{


    let idEtudiant=req.params.idEtudiant;

    let sql =`SELECT * FROM etudiant ,matiere, filiere WHERE 
    cin_etudiant=${idEtudiant} and
    etudiant.id_filiere=filiere.id_filiere and 
    filiere.id_filiere = matiere.id_filiere `;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }

        let arrayResult=[];
            result.map((value,i) =>{
                arrayResult[i]={
                    "etudiant":{
                        "cin_etudiant":value.cin_etudiant,
                        "nom_etudiant":value.nom_etudiant,
                        "prenom_etudiant": value.prenom_etudiant,
                        "adresse_etudiant": value.adresse_etudiant,
                        "email_etudiant" :value.email_etudiant,
                        "telephone_etudiant":value.telephone_etudiant,
                    },
                    "Filiere":{
                        "id_filiere":value.id_filiere,
                        "intitule_filiere":value.intitule_filiere,
                        "id_department":value.id_department,
                    },
                    "Matiere":{
                        "id_matiere":value.id_matiere,
                        "intitule_matiere":value.intitule_matiere,
                        "id_enseignant":value.id_enseignant
                    }
                }
                
            })
    
            res.status(200).json({
                arrayResult
            })

    })
}*/



//etudiant login 
exports.etudiant_login = (req,res,next)=>{
    //check if etudiant is exist or not
    const id =req.body.cin;
    let sql =`SELECT * FROM etudiant WHERE cin_etudiant = ${req.body.cin}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }// test empty array  // if empty array etudiant not exist
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


        // create token with 2 parameter (email and cin)
        //expire token in 1 hour
        const token= jwt.sign({
            email: result[0].email_etudiant,
            userId:result[0].cin_etudiant
        },'secret',{
            expiresIn:'1h'
        })
        return res.status(200).json({
            arrayResult:[{
                "message" : 'Auth successful',
                "token" : token
            }]
        })
    })
}



exports.getAllMatiereByEtudiant=(req,res,next) =>{


    let idEtudiant=req.params.idEtudiant;

    let sql =`SELECT * FROM etudiant ,matiere, filiere,enseignant WHERE 
    cin_etudiant=${idEtudiant} and
    etudiant.id_filiere=filiere.id_filiere and 
    filiere.id_filiere = matiere.id_filiere and
    matiere.id_enseignant = enseignant.cin_enseignant `;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }

        let arrayResult=[];
            result.map((value,i) =>{
                arrayResult[i]={
                    "id_matiere":value.id_matiere,
                    "intitule_matiere":value.intitule_matiere,
                    "filiere":[{
                        "id_filiere":value.id_filiere,
                        "intitule_filiere":value.intitule_filiere,
                        "departement": [{ "id_dept":value.id_department}],
                    }],
                    "enseignant":[{
                        "id_enseignant":value.cin_etudiant,
                        "nom_enseignant":value.nom_etudiant,
                        "prenom_enseignant": value.prenom_etudiant,
                        "adresse_enseignant": value.adresse_etudiant,
                        "email_enseignant" :value.email_etudiant,
                        "telephone_enseignant":value.telephone_etudiant,
                    }],
                    "etudiant":[{
                        "cin_etudiant":value.cin_etudiant,
                        "nom_etudiant":value.nom_etudiant,
                        "prenom_etudiant": value.prenom_etudiant,
                        "adresse_etudiant": value.adresse_etudiant,
                        "email_etudiant" :value.email_etudiant,
                        "telephone_etudiant":value.telephone_etudiant,
                    }]
                }
                
            })
    
            res.status(200).json({
                arrayResult
            })

    })
}




