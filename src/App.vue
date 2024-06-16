<!-- É o ponto de entrada da aplicação vue-->
<template>
  <img alt="Logo Vue" src="./assets/logo.png">
  <HelloWorld /> <!-- Faz a importação do 'HelloWorld'-que é um componente-->
  
</template>
<!--------- template acima, é a parte visual renderizada no navegador----------->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<!----------- script acima é a configuração da instancia do vue ,onde iremos usar as propriedades e metodos--------------->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!--------------- style é a configuração css utilizada no appp ---------------------->
