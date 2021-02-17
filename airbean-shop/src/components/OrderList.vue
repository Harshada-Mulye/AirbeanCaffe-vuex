<template>
  <div>
       <router-link to="/OrderDelivery"></router-link>
       <p>{{total_amt}}{{amtTotal}}</p>
      <h1>Your Order</h1>
       <div v-for ="(k,index) in order" :key=index  class="kaffestyle">
         <div>  
          <h2>
              {{k.name}}

          </h2>
         </div>
         <div>
          <h3>
              {{k.price}}
          </h3>
         </div>
         <div>
          {{k.amount}}
         </div>
      </div>
    Total: {{sum}} {{priceTotal}}
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
.kaffestyle{
    display:flex;
    justify-content: space-between;
       
}
</style>