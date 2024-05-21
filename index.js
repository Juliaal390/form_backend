const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Posts');


//configura o handlebars como template engine de uma aplicação express
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'})) //importamos o template
app.set('view engine', 'handlebars') //configura ele como template

//bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//
app.get('/', (req, res)=>{
    res.render('formulario')
})

app.post('/enviado', (req, res)=>{   
    Post.create({ //salva informações no bd
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        res.send('Erro: '+err)
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando'); 
}); 
