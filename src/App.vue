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

/* #app {
  
  font-family: "Nunito Sans", sans-serif;
} */

</style>
