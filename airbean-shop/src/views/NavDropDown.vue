<template>
  <nav>
    <ul>
      <li>Meny</li>
      <hr />
      <li><router-link to="/OurCoffee">Vårt Kaffe</router-link></li>
      <hr />
      <li>Min profil</li>
      <hr />
      <li>Orderstatus</li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  min-height: 700px;
  background-color: #2f2926;
  max-width: 375px;
  align-items: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: white;
  font-size: 1.8rem;
  font-family: serif;
}

hr {
  width: 50px;
  border: 1px solid #595451;
}
</style>