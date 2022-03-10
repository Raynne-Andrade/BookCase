<template>
  <div class="Search">
    <form @submit.prevent="search">
      <input
        v-model="term"
        placeholder="Pesquisar por livros"
        class="Search__text"
      />
      <select class="Search__select" v-model="tag">
        <option value="Lidos">Lidos</option>
        <option value="quero ler">Quero ler</option>
        <option value="Parei">Parei</option>
        <option value="">Todos</option>
      </select>
      <button type="submit" class="Search_button">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      term: "",
      tag: "",
    };
  },
  methods: {
    search() {
      const terms = {
        term: this.term,
        tag: this.tag,
      };
      this.$emit("search", terms);
    },
  },
};
</script>
<style>
.Search {
  margin: 15px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.Search__text {
  width: 45%;
  border: solid 1px pink;
  border-radius: 5px;
  padding: 10px;
  background: rgba(255, 192, 203, 0.349);
}
.Search__select {
  width: 30%;
  border: solid 1px pink;
  border-radius: 5px;
  padding: 10px;
  margin: 0 15px;
  background: rgba(255, 192, 203, 0.295);
}
.Search_button {
  border-radius: 5px;
  padding: 10px;
  border: solid 1px pink;
  width: 10%;
  background: rgb(255, 192, 203);
  color: #fff;
}
</style>