<template>
  <form @submit.prevent="Register" class="Form__register">
    <input
      v-model="title"
      placeholder="Nome do livro"
      class="Form__register--input"
    />
    <input
      v-model="Author"
      placeholder="Nome do/da Autor(a)"
      class="Form__register--input"
    />
    <input
      v-model="Editora"
      placeholder="Nome do/da editora"
      class="Form__register--input"
    />
    <input
      v-model="language"
      placeholder="Idioma do livro"
      class="Form__register--input"
    />
    <input
      v-model="pages"
      inputmode="numeric"
      placeholder="Número de páginas"
      class="Form__register--input"
    />
    <input
      v-model="year"
      inputmode="numeric"
      placeholder="Ano de publicação"
      class="Form__register--input"
    />
    <input
      v-model="imageLink"
      placeholder="Link da imagem do livro"
      class="Form__register--input"
    />
    <select v-model="tag" class="Form__register--input">
      <option value="Lidos">Lidos</option>
      <option value="quero ler">Quero ler</option>
      <option value="Parei">Parei</option>
    </select>
    <button type="submit" class="Form__register--button">Cadastrar</button>
  </form>
</template> 
<script>
import axios from "axios";

export default {
  props: [],
  data() {
    return {
      title: "",
      Author: "",
      Editora: "",
      language: "",
      pages: "",
      year: "",
      imageLink: "",
      tag: "",
    };
  },
  methods: {
    Register() {
      const body = {
        title: this.title,
        author: this.Author,
        Editora: this.Editora,
        language: this.language,
        pages: this.pages,
        year: this.year,
        imageLink: this.imageLink,
        tag: this.tag,
      };
      axios
        .post("http://localhost:3000/books", body)
        .then((res) => {
          console.log(res.data);
          this.$store.dispatch("add", res.data);
          console.log(this.$store.state.books);
          this.$emit("sucess", true);
        })
        .catch((err) => console.log(err));
      event.target.reset();
    },
  },
};
</script>
<style scoped>
.Form__register {
  display: flex;
  flex-direction: column;
  max-width: 860px;
  justify-content: center;
  margin: auto;
}
.Form__register--input {
  border: solid 1px pink;
  background: rgba(255, 192, 203, 0.158);
  border-radius: 5px;
  padding: 10px;
  margin: 5px 15px;
}
.Form__register--button {
  border: solid 1px pink;
  background: pink;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 15px;
  color: #fff;
  text-transform: uppercase;
}
</style>
