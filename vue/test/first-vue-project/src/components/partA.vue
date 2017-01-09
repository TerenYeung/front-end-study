<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-text="datafromfather"></h2>
    <button @click="onClickMe">Click Me</button>

    <button v-on:click="onClickChild">datafromChild</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello from partA'
    }
  },
  props:['datafromfather'],
  methods:{
    onClickMe:function(){
      console.log(this.datafromfather)
    },
    onClickChild:function(){
      this.$emit('child-report',this.msg)
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
