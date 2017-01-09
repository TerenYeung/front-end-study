<template>
  <div id="app">
    <img src="./assets/logo.png">
     <h1>{{message}}</h1>   
     <h2>{{title}}</h2>
     <input type="text" v-model="newItem" v-on:keyup.enter="addItem">  
     <ul>
       <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
     </ul>

    <part-a datafromfather="father" v-on:child-report="listenToChild"></part-a>
    <p>child tells me : {{childWords}}</p>
    <!-- <div abc="abc" @click="print">abc</div> -->
  </div>
</template>

<script>
import Store from './store'
import PartA from './components/partA'
export default {
  data(){
    return{
      message:"Hello Vue.js",
      title:"this is a todo list",
      items:Store.fetch(),
      //[
      //   // {
      //   //   label:'coding',
      //   //   isFinished:true
      //   // },
      //],
      newItem:'',
      childWords:""
    }
  },
  components:{PartA},
  methods:{
    toggleFinish:function(item){
        item.isFinished = !item.isFinished
    },
    addItem:function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      })
      this.newItem = ''
    },
    listenToChild:function(data){
      this.childWords = data
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  }
  /*data:function(){
    return{
      message:"Hello Vue.js"
    }
  }*/
}
</script>

<style>
.finished{
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
