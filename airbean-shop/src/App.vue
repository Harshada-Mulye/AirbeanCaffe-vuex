<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/OurCoffee">Vårt Kaffe</router-link>|
      <router-link to="/KaffeMeny">KaffeMeny</router-link>|
      <router-link to="/Order">Your Order</router-link> |
      <router-link to="/OrderDelivery">Delivery</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: #f3e4e1;
  color: #2f2926;
  width: 375px;
  /* height: 839px; */
  display: grid;
  justify-content: center;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  display: flex;
  justify-content: center;
}
</style>
