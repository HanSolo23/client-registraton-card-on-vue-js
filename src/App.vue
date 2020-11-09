<template>
  <div id="app">
    <ClientForm msg="Добро пожаловать на страницу регистрации клиента!"/>
  </div>
</template>

<script>
import ClientForm from './components/ClientForm.vue'

export default {
  name: 'App',
  components: {
    ClientForm
  }
}
</script>

<style>
body {
  background-color: rgba(223, 208, 208, 0.404);
  
}
/* #app {
  
  font-family: "Nunito Sans", sans-serif;
} */

</style>
