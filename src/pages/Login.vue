<template >
  <div class="a">
    <diV>
      <h2>{{ titleBook }}</h2>
      <p>{{ description }}</p>
      <div>
        <div class="form_container">
          <form @submit.prevent="login">
            <div>
              <input placeholder="Usuário" v-model="user" enterkeyhint="next" />
              <input placeholder="Senha" type="password" v-model="password" />
            </div>
            <div>
              <button type="submit">Entrar</button>
            </div>
            <div style="margin-bottom: 15px; color: red" v-if="error">
              Usuario não encontrado. Confira o seu usuario e senha!
            </div>
          </form>
          <span> <a href="/create"> Não tenho uma conta </a> </span>
        </div>
      </div>
    </diV>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      error: false,
      image: "{backgroundImage: url(.../assets/images.png) }",
      user: "",
      password: "",
      titleBook: "Bem-vindos a sua estante virtual",
      description:
        "Aqui você poderá cadastrar os livros que já leu, aquele livro que está na fila para ser lidos e também vai contar com recomendações de livros de acordo com seu gosto literário.",
    };
  },
  methods: {
    login() {
      this.error = false;
      axios
        .get(
          `http://localhost:3000/user?user=${this.user}&password=${this.password}`
        )
        .then((res) => {
          console.log(res);
          if (res.data.length == 0) {
            this.error = true;
          } else {
            window.location.assign(`/home/${this.user}`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.a {
  height: calc(100vh - 70px);
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
.form_container {
  max-width: 450px;
  margin: 80px auto;
}
.form_container span a {
  text-decoration: none;
  color: rgb(212, 75, 98);
  font-family: sans-serif;
  font-size: 17px;
}
.template {
  max-width: 1000px;
}
h2 {
  color: rgb(255, 0, 64);
  font-family: sans-serif;
  text-transform: uppercase;
}
p {
  color: #757575;
  font-family: sans-serif;
  max-width: 700px;
  margin: auto;
  line-height: 25px;
}
@media (max-width: 600px) {
  .a {
    max-width: 320px;
    margin: auto
  }
  form input {
  width: 320px;
}
}
</style>
