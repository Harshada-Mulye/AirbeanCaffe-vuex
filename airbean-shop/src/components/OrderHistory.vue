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
          {{hist[index]}} 

          </h2>
         </div>
        
  </div>
  </div>
</template>

<script>
export default {
    computed:{
      hist()
        {
            return this.$store.getters.history;
        },
        user()
        {
            return this.$store.getters.user;
        }
    }

}
</script>

<style>

</style>