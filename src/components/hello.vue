<template>
    <div>
        {{msg}}
        <button v-on:click="test()">Click</button>

    </div>
</template>
<script>
  export default{
    name: "hello",
    data:function(){
      return{
        msg:"Hello World"
      };
    },//end of data
    methods:{
      test:()=>{
        alert("soemthing");
      }
    }
  }//end of exports
</script>
