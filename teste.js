const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

//configura o handlebars como template engine de uma aplicação express
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //importamos o template
app.set('view engine', 'handlebars') //configura ele como template

//bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//conexão com o bd
const sequelize = new Sequelize('minha_empresa', 'root', '74739', {
    host: 'localhost',
    dialect: 'mysql'
});

//
app.get('/', (req, res)=>{
    res.render('formulario')
})

app.post('/enviado', (req, res)=>{
    
    res.send('Formulário recebido, '+req.body.name);
})

app.listen(3000, () => {
    console.log('Servidor rodando'); 
}); 
