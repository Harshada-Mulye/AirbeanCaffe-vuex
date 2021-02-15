<template>
  <div>
      <h1>Meny component</h1>
       <div v-for ="k in kaffe" :key=k.id  class="kaffestyle">
           <button @click="AddItems(k)">+</button>
          <h2>
              {{k.name}}

          </h2>
          <h3>
              {{k.price}}
          </h3>
      
      </div>
  
  
  </div>
</template>

<script>
export default {
computed:{
        kaffe()
        {
            return this.$store.getters.kaffe;
        }
     
},
        methods:{
            AddItems(k)
            {
                this.$store.commit("Add_Order",k)
            }
        }
}

</script>

<style>

</style>