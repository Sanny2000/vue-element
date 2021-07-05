<template>
  <div>
      <h1>网站列表</h1>
  <div v-for="site in info" >
    {{ site }}
  </div>
  </div>
</template>

<script type = "text/javascript">
import axios from 'axios'
export default {
  name: "c",
  data () {
    return {
      info: ''
    }
  },
  async created () {
   await axios
    .get('http://localhost:3000/comments')
    .then(response =>  (
      //this.info = response.data
      console.log(response.data)
      ))
    .catch(function (error) { // 请求失败处理
        console.log(error);
    });

     console.log(this.info[0], '~~~~~~')
    //console.log('username is', this.info.username)

  }
};
</script>

