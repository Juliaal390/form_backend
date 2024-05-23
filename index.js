const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Posts');


//configura o handlebars como template engine de uma aplicação express
app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  runtimeOptions: {
    allowProtoPropertiesByDefault: true,

    allowProtoMethodsByDefault: true,
}})) //importamos o template
app.set('view engine', 'handlebars') //configura ele como template

//bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//
app.get('/', (req, res)=>{
    Post.findAll().then((postsaseremexibidos)=>{ //exibir posts
        res.render('formulario', {posts: postsaseremexibidos})
    })
    
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
