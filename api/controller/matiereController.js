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
   
    let sql ='SELECT * FROM matiere, filiere,enseignant WHERE matiere.id_filiere =filiere.id_filiere  and matiere.id_enseignant =enseignant.cin_enseignant  ';
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        let arrayResult=[];
        //console.log(result[0].id_matiere);
        /*res.status(200).json({
            result
        })*/
                 result.map((value,i) =>{
                    
                        
                    arrayResult[i]={
                        "id_matiere":value.id_matiere,
                        "intitule_matiere":value.intitule_matiere,
                        "filiere":{
                            "id_filiere":value.id_filiere,
                            "intitule_filiere":value.intitule_filiere,
                            "departement":{
                                "id_dept":value.id_department,
                                
                            }
                        },
                        "enseignant":{
                            "id_enseignant":value.cin_enseignant,
                            "nom_enseignant":value.nom_enseignant,
                            "prenom_enseignant": value.prenom_enseignant,
                            "adresse_enseignant": value.adresse_enseignant,
                            "email_enseignant" :value.email_enseignant,
                            "telephone_enseignant":value.telephone_enseignant,
                        }
                    }
                    
                })

                return res.status(200).json({
                    arrayResult
                })
    })
}


exports.matiere_add = (req,res) => {
    

    const id=req.body.id_matiere;
    const intitule=req.body.intitule;
    const id_filiere=req.body.id_filiere;
    const id_enseignant=req.body.id_enseignant;

    let matiere = {id_matiere:id ,intitule_matiere:intitule ,id_filiere:id_filiere,id_enseignant:id_enseignant};
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
    const id_enseignant=req.body.id_enseignant;



    let sql =`UPDATE matiere set intitule_matiere='${intitule}',id_filiere='${id_filiere}',id_enseignant='${id_enseignant}' WHERE  intitule = ${req.params.id}`;
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