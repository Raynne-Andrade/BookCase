<template>
  <div class="a">
    <div>
      <h1>Criar conta</h1>
      <div>
        <form @submit.prevent="CreateAccount">
          <input placeholder="Nome" v-model="name" />
          <input placeholder="Apelido" v-model="nickname" />
          <input placeholder="E-mail" v-model="email" />
          <input placeholder="Senha" v-model="password" />
          <button type="submit">Cadastrar</button>
        </form>
        <span v-if="error">
          Não foi possivel efetuar o cadastro, tente novamente mais tarde!
        </span>
        <br />
        <span> <a href="/"> Já tenho uma conta </a> </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      name: "",
      nickname: "",
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    CreateAccount() {
      var body = {
        name: this.name,
        user: this.nickname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("updateUser", body);

      axios
        .post("http://localhost:3000/user/", body)
        .then(() => {
          window.location.assign(`/home/${body.user}`);
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.a {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
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
  margin:auto;
}
div span a {
  text-decoration: none;
  color: rgb(212, 75, 98);
  font-family: sans-serif;
  font-size: 17px;
}
h1 {
  color: rgb(255, 0, 64);
  font-family: sans-serif;
  text-transform: uppercase;
}
span {
  color: red;
  font-size: 14px;
  line-height: 30px;
}
</style>