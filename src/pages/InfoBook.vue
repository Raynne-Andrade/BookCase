<template>
  <div>
    <div><button @click="Delete">deletar</button></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    Delete() {
      axios.delete(`http://localhost:3000/books/${this.id}`).then((res) => {
        console.log(res, "res");
        this.$store.dispatch("remove", this.id);
        console.log(this.$store.state.books);
      });
    },
  },
};
</script>

<style>
</style>