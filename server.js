//Este arquivo faz a ligação do node com o express
const express = require('express') 
const app = express()

//Este comando carrega os arquivos estaticos do programa
app.use(express.static(__dirname + '/dist/'))

//Responder as requisições feitas para o servidor web por meio da rota get
app.get('/',function(req,res){
    res.send(__dirname + '/dist/index.html')
})

//'listen' define uma porta na qual estará ouvindo o servidor e exibindo no navegador
app.listen(3000,function(){
    console.log('Servidor web rodando com Express')
})