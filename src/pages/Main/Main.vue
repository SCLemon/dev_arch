<template>
  <div>{{text}}</div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Main',
  data(){
    return {
      text:''
    }
  },
  mounted(){
    axios.get('/run/main')
    .then((resp)=>{
      this.text = resp.data
    })
  }
}
</script>

<style scoped>

</style>