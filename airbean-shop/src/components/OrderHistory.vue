<template>
  <div class="my-profile-history">
     <img src="../assets/ourcoffeetop.svg" />
      <img src="../assets/profile.png"   class="profile"/>
       <div v-for ="(k,index) in user" :key=index  class="kaffestyle">
         <div>  
          <h2 class="name">{{k.name}} </h2>
        <h2 class="email">  {{k.email}} </h2>

         
         </div>
         <h1 class="order">Orderhistorik</h1>
      
        
  </div>
        
       <div v-for ="(k,index) in hist" :key=index  class="kaffestyle">
         <div class="display">
           <div>  
          <h2 class="randnum">

    XAB{{random()}}  </h2>
 <p>total ordersumma</p> <p>_ _ _ _ _ _ _  _</p></div> 
 <div>
  <p>{{new Date().toLocaleString()}} </p><p>{{hist[index]}}</p> 
   <p>_ _ _ _ _ _ _  _</p>
  </div>
 </div>
       
        
  </div>
  <div>
   <h1 class="spend">Totalt spenderat</h1>
  <p>{{hist.reduce(sum)}}</p>
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
        
    },
    methods:{
         random(){
         return Math.floor((Math.random() * 1000000) + 1);
        },
       sum(total, num) {
      return total +num;
}

      
 }
}
</script>

<style scoped>
.my-profile-history{
  background-color: rgb(53, 48, 48);
  color:white;
}
.profile {
  width:70px;
  height:70px;
}
.name{
  font-family: 'PT Serif';
  font-size: 24px;
}
.email{
  font-family: 'Work Sans';
  font-size: 14px;
}
.order{
  font-family: 'PT Serif';
  font-size: 22px;
}
.randnum{
   font-family: 'Work Sans';
  font-size: 14px;
}
p{
     font-family: 'Work Sans';
  font-size: 12px;
}
.spend{
    font-family: 'Work Sans';
  font-size: 14px;
}
.display{
  display:flex;
  justify-content: space-between;
  margin:20px;
}
</style>