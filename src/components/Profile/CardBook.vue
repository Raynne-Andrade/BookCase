<template>
  <div v-if="books.length > 0" class="home__card">
    <div v-for="book in books" :key="book.title" class="home__card--container">
      <img :src="book.imageLink" width="200" height="250" />
      <h3 class="home__card--title">{{ book.title }}</h3>
      <span class="home__card--author"> {{ book.author }} </span>
      <div>
        <favorite-settings-outline />
      </div>
    </div>
  </div>
  <div v-else>Não tem livros</div>
</template>
<script>
export default ({
props:["books"],
  data() {
    return {};
  },
});
</script>
