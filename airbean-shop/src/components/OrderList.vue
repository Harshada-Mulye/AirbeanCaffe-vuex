<template>
  <div class="container">
       <router-link to="/OrderDelivery"></router-link>
       <div class="total_amt">
       <p class="p_amt">{{total_amt}}{{amtTotal}}</p>
       </div>
      <h1>Din beställning</h1>
       <div v-for ="(k,index) in order" :key=index  class="kaffestyle">
         <div>  
          <h2>
              {{k.name}}_ _ _ _ _ _ _

          </h2>
        
        <p>
              {{k.price}}Kr
          </p>
         </div>
         <div><p class="amount">
          {{k.amount}}</p>
         </div>
      </div>
<div class="priceT">
    <div>
    <h1>Total:</h1><p>inkl moms + drönarleverans</p></div><div><h1> {{sum}} {{priceTotal}}Kr</h1></div>
    </div>
    <button @click="toStatus">Take My Money</button>

  </div>
</template>

<script>
export default {
    data(){
        return{
            priceTotal:0,
            amtTotal:0
        }
    },
 computed:{
        order(){
             return this.$store.getters.order;
        },
        sum(){
             this.priceTotal = this.order.reduce(function(prev, cur) {
          return prev + cur.price*cur.amount
}, 0);

console.log('Total ', this.priceTotal)
        },
        total_amt(){
this.amtTotal=this.order.reduce(function(prev, cur) {
          return prev + cur.amount
}, 0);
        }
},
methods:{
    toStatus(){
         this.$router.push("OrderDelivery");
    }
}


}
</script>

<style scoped >
.container{
    background-image: url("../assets/Group.svg");
}
.kaffestyle{
    display:flex;
    justify-content: space-between;
    margin: 20px;
       
}
h2{
    font-family: 'PT Serif';
    font-size: 20px;
}
p{
    font-family: 'Work Sans';
    font-size: 12;
    margin-top:15px;
}
p.amount{
     font-family: 'Work Sans';
    font-size: 12;
    margin-top: 15px;
}
.total_amt{
   color:white;
   float:right;
   margin-right:20px;
   background-color:black;
   height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  

}
.p_amt{
    
    margin-top:10px;
}
.priceT{
    display:flex;
    justify-content: space-between;
    font-family: 'PT Serif';
    font-size:19px;
    margin:15px;
    
}
button{
     border-radius: 50px;
  padding: 15px 50px;
  font-family: serif;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: black;
  color:white;

}
</style>