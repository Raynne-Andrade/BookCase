<template>
  <h2>{{ titleBook }}</h2>
  <p>{{ description }}</p>
  <div>
    <div class="form_container">
      <form @submit="login">
        <div>
          <input placeholder="Usuário" v-model="user" />
          <input placeholder="Senha" type="password" v-model="password" />
        </div>
        <div>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <span> <a href="/create"> Não tenho uma conta </a> </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      lastName: "",
      Email: "",
      titleBook: "Bem-vindos a sua estante virtual",
      description:
        "Aqui você poderá cadastrar os livros que já leu, aquele livro que está na fila para ser lidos e também vai contar com recomendações de livros de acordo com seu gosto literário.",
    };
  },
  methods: {
    login() {
      console.log(this.Email);
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
.form_container {
  max-width: 450px;
  margin: 100px auto;
}
.form_container span a {
  text-decoration: none;
  color: rgb(212, 75, 98);
  font-family: sans-serif;
  font-size: 17px;
}
.template { 
  max-width: 1000px;
  background-image: image(url(https://i.pinimg.com/736x/54/dd/1c/54dd1c82d9d34b9c71dc2410a151a8fa.jpg));
}
h2{ 
  color: rgb(255, 0, 64);
  font-family: sans-serif;
  text-transform: uppercase;
}
p{ 
  color: #757575;
  font-family: sans-serif;
}
</style>
