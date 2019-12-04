const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const mysql =require('mysql');

const etudiantRoutes = require('./api/routes/etudiant');
const departmentRoutes = require('./api/routes/department');
const filiereRoutes = require('./api/routes/filiere');
const matiereRoutes = require('./api/routes/matiere');

const enseignantRoutes = require('./api/routes/enseignant');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    if(req.method ==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","PUT,POST,PATCH,DELETE,GET");
        return res.status(200).json({});
    }
    next();
});

app.use("/etudiant",etudiantRoutes);
app.use("/department",departmentRoutes);
app.use("/filiere",filiereRoutes);
app.use("/matiere",matiereRoutes);
app.use("/enseignant",enseignantRoutes);




module.exports = app;