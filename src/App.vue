<template>
  <div id="app">
    <router-link :to="{name: 'Login'}" class="router_btn"></router-link>
    <router-view/>
  </div>
</template>

<script>
import Login from './views/login/Login'
export default {
  name: 'App',
  components: { Login }
}
</script>

<style>
.router_btn{
  color: #fff;
  text-decoration:none;
  font-size: 40px;
}

</style>
