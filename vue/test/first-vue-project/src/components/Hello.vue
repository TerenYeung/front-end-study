<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">Click!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from partA!',
    }
  },
  methods:{
    onClickMe:fucntion(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}

</style>
