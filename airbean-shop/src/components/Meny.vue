<template>
  <div>
      <h1>Meny component</h1>
       <div v-for ="k in kaffe" :key=k.id  class="kaffestyle">
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
        },
}
}
</script>

<style>

</style>