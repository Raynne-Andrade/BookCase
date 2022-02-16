<template>
  <h1>Criar conta</h1>
  <p></p>
  <div>
    <form @submit.prevent="CreateAccount">
      <input placeholder="Nome" v-model="name" />
      <input placeholder="Apelido" v-model="nickname" />
      <input placeholder="E-mail" v-model="email" />
      <button type="submit">Cadastrar</button>
    </form>
    <span> <a href="/"> Já tenho uma conta </a> </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nickname: "",
      email: "",
    };
  },
  methods: {
    CreateAccount() {
      var body = {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
      };
      console.log(body);
    },
  },
};
</script>

<style scoped>
form input {
  margin: 5px 0px;
  border-radius: 5px;
  border: solid 1px rgb(212, 75, 98);
  background: rgba(255, 192, 203, 0.281);
  padding: 10px;
  width: 100%;
}
form button {
  background: pink;
  border-radius: 10px;
  padding: 10px 70px;
  border: solid 1px rgb(212, 75, 98);
  margin: 10px 0px 20px 0px;
  color: #fff;
  font-weight: bolder;
  text-transform: uppercase;
}
div {
  max-width: 450px;
  margin: 100px auto;
}
div span a {
  text-decoration: none;
  color: rgb(212, 75, 98);
  font-family: sans-serif;
  font-size: 17px;
}
</style>