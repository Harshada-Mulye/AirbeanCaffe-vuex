<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img class="left" src="../assets/homeleft.svg" />
    <img src="../assets/homelogo.svg" />
    <img class="right" src="../assets/homeright.svg" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  min-height: 500px;
  background-color: #0e927d;
  max-width: 375px;
}

.left {
  margin-right: -97px;
}

.right {
  margin-left: -97px;
}
</style>
