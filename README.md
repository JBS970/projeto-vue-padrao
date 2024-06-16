# projeto-vue-padrao

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Símbolos e controle de versão usados pelo npm
- Ex.: 
        usamos:
                 5.6.7  //seria a versão exata 
                                                sendo:
                                                 5 a versão principal do pacote, //Quando > causam modificações profundas que tornam o uso incompativel
                                                 6 é a menor versão , //Quanto > adiciona novas funcionalidades compativeis com esta versao
                                                 7 é a versão de correção de bugs //Quanto > mais estavel

- Ex.:
        usamos:
                ~5.6.7 //Usando o '~' estamos indicando que aceitamos uma versao > .7 (versão de bugs) 
                ^5.6.7 // Usando '^' estamos indicando que aceitamos uma versao < .6 (versao de novas funcionalidades) 

 ### Definições do git
  - 'stage area' é uma area de preparação antes das realização das alterações

  . git status //Exibe as condiçoes do diretorio do projeto e do stage area,ou seja permite ver quais modificações foram feitas(stage area) em relação ao original
  . git add // Carrega as alterações para o stage area
  . git reset //Desfaz as alteraçoes gravadas no stage area
  . git commit // Salva as alterações
  . git log //consulta o historico de commits 
  . git remote -v //Lista os repositorios 
  . git remote set-url repositorio1 https://primeiro_bitbucket-admin@bitbucket.org/primeiro_bitbucket/projeto-vue-padrao2.git //Renomeia o endereço do repositrio
  . git remote add repositorio1 https://primeiro_bitbucket-admin@bitbucket.org/primeiro_bitbucket/projeto-vue-padrao.git //Adiciona este repositorio apelidado de 'repositorio1' no repositorio 'branch master' remoto criado no gitbucket

  ### Comandos para salvar alterações no git "commit"  
        . git add package.json package-lock.json //Adiciona as modificações feitas ao 'stage area' de forma individual
        . git add . //Adiciona todas as modificações ao 'stage area'
        . git commit -m"Iniciando o projeto com modificações preliminares"  //Envia(salva) as alterações no git 
        . git commit -m"Modificando a msg do componente HelloWord" //Envia o 'commit'  

### Branch master (ramificação principal) 
        - Significa que podemos ter varias ramificações partindo da 'ramificação principal' ,para podermos resolver bugs ,sem afetar essa       ramificação ,essas ramificações poedem ser implementadas em paralelo com varios  programadores 

### Comandos para ligar o git ao github
        . git remote add origin https://github.com/JBS970/projeto-vue-padrao.git
        

                                                                    
