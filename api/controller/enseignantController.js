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



exports.enseignants_get_all = (req,res) => {
   
    let sql ='SELECT * FROM enseignant';
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


exports.enseignant_add = (req,res) => {
    

    const cin=req.body.cin;
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;


    let enseignant = {cin:cin ,nom:nom ,prenom:prenom ,adresse:adresse ,email:email ,telephone:telephone };
    let sql ='INSERT INTO enseignant set ?';
    let query = db.query(sql,enseignant,(err,result) => {
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


exports.enseignants_get_byid = (req,res) => {
   
    let sql =`SELECT * FROM enseignant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "enseignant not found"
            })
        }

            console.log(result);
            res.status(200).json({
                result
            })

        
    })
}

exports.enseignant_update_byid = (req,res) => {
    const id =req.params.id;
    
    
    let sql =`SELECT * FROM enseignant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "enseignant not found"
            })
        }         
    const nom=req.body.nom;
    const prenom=req.body.prenom;
    const adresse=req.body.adresse;
    const email=req.body.email;
    const telephone=req.body.telephone;



    let sql =`UPDATE enseignant set nom='${nom}',prenom='${prenom}',adresse='${adresse}',email='${email}',telephone='${telephone}' WHERE  cin = ${req.params.id}`;
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


exports.enseignant_delete_byid =(req,res) => {


    let sql =`SELECT * FROM enseignant WHERE cin = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if (err){
            return res.status(404).json({
                error: err
            })
        }
        if(result.length ==0){
           return res.status(400).json({
                message : "enseignant not found"
            })
        }      
    let sql =`DELETE FROM enseignant  WHERE  cin = ${req.params.id}`;
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

exports.enseignant_login = (req,res,next)=>{
    const id =req.body.cin;
    let sql =`SELECT * FROM enseignant WHERE cin = ${req.body.cin}`;
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

