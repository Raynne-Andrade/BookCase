<template>
  <div class="home">
    <h2>Bem-vinda, {{ name }}</h2>
    <div>
      <search @search="SearchTerm" />
      <card-book v-bind:books="this.books" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardBook from "../components/Home/CardBook.vue";
import Search from "../components/Search.vue";
export default {
  components: {
    CardBook,
    Search,
  },
  data() {
    return {
      books: [],
    };
  },
  computed: {
    name() {
      return this.$store.state.user.name;
    },
  },
  mounted() {
    this.name = this.$route.params.user;
    console.log(this.$store.state.books)
    axios.get("http://localhost:3000/books").then((res) => {
      console.log(res.data);
      this.books = res.data;
    });
    axios.get(`http://localhost:3000/user?user=${this.$store.state.user.user}`)
    .then((res) => { 
       this.$store.dispatch('updateUser', res.data[0])
       console.log(res.data[0])
    })
  },
  methods: {
    SearchTerm(body) {
      axios
        .get(
          `http://localhost:3000/books?${
            body.term ? "title=" + body.term : ""
          }${body.tag ? "&tag=" + body.tag : ""}`
        )
        .then((res) => {
          console.log(res.data);
          this.books = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 860px;
  margin: auto;
}
</style>