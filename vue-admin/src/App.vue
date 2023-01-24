<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>Name: {{ name }}</p>
  <p>Job: {{ job }}</p>

</template>

<script>
export default {
  data(){
    return{
      name: 'Alex',
      job: 'EPAM'
    }
  } 
}
</script>
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
