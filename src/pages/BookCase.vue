<template>
  <div class="home">
    <h2>Bem-vinda, {{ name }}</h2>
    <p>Aqui está a sua lista de livros lidos recentemente</p>
    <card-book v-bind:books="this.books"/>
  </div>
</template>

<script>
import axios from "axios";
import CardBook from "../components/Profile/CardBook.vue";
export default {
  components: {
    CardBook,
  },
  data() {
    return {
      name: "",
      books: [],
    };
  },
  mounted() {
    this.name = this.$route.params.user
    axios.get("http://localhost:3000/books").then((res) => {
      console.log(res.data);
      this.books = res.data;
    });
  },
  computed: {
    isBook: function () {
      return this.books;
    },
  },
};
</script>

<style>
.home {
  max-width: 860px;
  margin: auto;
}
.home__card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.home__card--container {
  max-height: 400px;
  max-width: 250px;
  border: solid 1px #c2c1c1;
  border-radius: 10px;
  background: #d4d3d371;
  overflow: hidden;
  box-shadow: 5px 5px 15px #747474;
  padding-bottom: 15px;
}

.home__card--title {
  font-size: 20px;
  line-height: 25px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 15px;
  margin: inherit;
}
.home__card--author {
  font-size: 15px;
  line-height: 20px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 15px;
}
</style>