import Vue from 'vue';
import hello from './components/hello.vue'
Vue.component('hello',hello);
var v=new Vue({
  el:'#app',
  data:{

  },
  created:function() {
    alert("created");
  }
});
