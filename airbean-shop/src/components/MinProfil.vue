<template>
  <section class="my-profil-background">
    <img src="../assets/ourcoffeetop.svg" />
    <section class="login">
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <form @submit.prevent="onSubmit(profile)">
        <label for="name">Name</label>
        <input type="text" v-model="profile.name" name="name" /><br />
        <label for="email">Email</label>
        <input type="text" v-model="profile.email" name="email" /><br />

        <input type="submit" value="Brew Me a Cup" />
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        id: 1,
        name: null,
        email: null,
      },
    };
  },
  computed: {
    abc() {
      return this.$store.getters.user;
    },
  },
  methods: {
    onSubmit(profile) {
      this.$store.commit("Add_User", profile);
    },
  },
};
</script>

<style scoped>
.my-profil-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #2f2926;
  max-width: 375px;
  align-items: center;
  height: 100%;
}
.login {
  background-color: #f3e4e1;
  margin: -35px 15px 15px 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: left;
}

input:last-of-type {
  background-color: #2f2926;
  color: white;
  border-radius: 50px;
  padding: 15px 50px;
  font-family: serif;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
  border: none;
}
</style>