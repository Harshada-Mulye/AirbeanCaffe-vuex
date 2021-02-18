<template>
  <div>
      <h1>Order History</h1>
       <div v-for ="(k,index) in user" :key=index  class="kaffestyle">
         <div>  
          <h2>
          {{k.name}} 
          {{k.email}}

          </h2>
         </div>
        
  </div>
        
       <div v-for ="(k,index) in hist" :key=index  class="kaffestyle">
         <div>  
          <h2>

    XAB{{random()}} Total: {{hist[index]}} 

          </h2>
         </div>
        
  </div>
  </div>
</template>

<script>
export default {
    
    data(){
        return{
        x:0
        }
    },
    computed:{
      hist()
        {
            return this.$store.getters.history;
        },
        user()
        {
            return this.$store.getters.user;
        }
    },
    methods:{
         random(){
         return Math.floor((Math.random() * 1000000) + 1);
        }
    }
 
}
</script>

<style>

</style>