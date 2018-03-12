<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="./../assets/logo.png">
    <!--<h2 v-on:click="jumpDetail()">Detail page</h2>-->
    <h2>
      <router-link :to="{ path: 'DetailPlayPage'}">DETAIL PAGE</router-link>
    </h2>
    <h2>
      <router-link :to="{ path: 'hetaoPage'}">核桃编程</router-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  method() {
    function jumpDetail(){
      // router.push('home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
