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

      {{x}}   Total: {{hist[index]}} 

          </h2>
         </div>
        
  </div>
  </div>
</template>

<script>
export default {
    data(){
        x=0;
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
             this.x = Math.floor((Math.random() * 10) + 1);
        }
    }

}
</script>

<style>

</style>