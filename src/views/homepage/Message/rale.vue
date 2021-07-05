<template>
  <div>
    <el-rate
    v-model="value"
    show-text>
    </el-rate>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: null
      }
    }
  }
</script>
