const express= require("express");
const format = require('date-format');

const app= express();

//swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT||4000;

app.get("/",(req,res)=> {
res.status(201).send("server is up");
});

app.get("/api/v1/instagram",(req,res) => {
    const instaSocial = {
        username: "parthajyoti" ,
        followers : 234,
        follows: 345,
        date: format.asString("dd/MM - hh:mm:ss",new Date())
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook",(req,res) => {
    const facebookSocial = {
        username: "parthajyoti pandey" ,
        followers : 234,
        follows: 345,
        date: format.asString("dd/MM - hh:mm:ss",new Date())
    };

    res.status(200).json(facebookSocial);
});

app.get("/api/v1/linkedin",(req,res) => {
    const linkedinSocial = {
        username: "parthajyoti pandey" ,
        followers : 46,
        follows: 3937,
        date: format.asString("dd/MM - hh:mm:ss",new Date())
    };

    res.status(200).json(linkedinSocial);
});

app.get("/api/v1/:token",(req,res) => {
const urlname = req.params.token;
res.status(200).json({param : urlname});
});


app.listen(PORT, () => {
console.log("server is running on port 4000");
});