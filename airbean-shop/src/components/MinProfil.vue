<template>
  <div>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
       <form @submit.prevent="onSubmit(profile)">
           <label for="name">Name</label>
           <input type="text" v-model="profile.name" name="name"><br/>
           <label for="email">Email</label>
           <input type="text" v-model="profile.email" name="email"><br/>
          
           <input type="submit" value="Brew Me a Cup">

      </form>
      

  </div>
</template>

<script>

export default {
    data()
    {
        return{
            profile:{
                id:1,
                name:null,
                email:null
            }

            
        }
    },
    computed:{
        abc(){
             return this.$store.getters.user;
        }
    },
    methods:{
onSubmit(profile){
  
            
                this.$store.commit("Add_User",profile)
            
}
    }

}
</script>

<style>

</style>