<template>
  <div>
      <h1>Your Order</h1>
       <div v-for ="(k,index) in order" :key=index  class="kaffestyle">
           
          <h2>
              {{k.name}}

          </h2>
          <h3>
              {{k.price}}
          </h3>
      
      </div>
    Total:  {{sum}} {{priceTotal}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            priceTotal:0
        }
    },
 computed:{
        order(){
             return this.$store.getters.order;
        },
        sum(){
             this.priceTotal = this.order.reduce(function(prev, cur) {
          return prev + cur.price;
}, 0);

console.log('Total ', this.priceTotal)
        }
}

}
</script>

<style >
.kaffestyle{
    display:flex;
    justify-content: space-between;
    
}
</style>