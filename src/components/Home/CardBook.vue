<template>
  <div v-if="books.length > 0" class="card">
    <div v-for="book in books" :key="book.title" class="card__container">
      <a :href="'/info/' + book.title + '/' + book.id">
        <img :src="book.imageLink" width="200" height="250" />
        <div class="card__tag">
          {{ book.tag }}
        </div>
        <h3 class="card__title">{{ book.title }}</h3>
        <span class="card__author"> {{ book.author }} </span>
      </a>
    </div>
  </div>
  <div v-else>Não tem livros</div>
</template>
<script>
export default {
  props: ["books"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px 0 50px 0;
}
.card__container {
  max-height: 400px;
  max-width: 250px;
  border: solid 1px #c2c1c1;
  border-radius: 10px;
  background: #d4d3d371;
  overflow: hidden;
  box-shadow: 5px 5px 15px #747474;
  padding-bottom: 15px;
}

.card__title {
  font-size: 20px;
  line-height: 25px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 15px;
  margin: inherit;
  color: rgb(61, 61, 61);
}
.card__author {
  font-size: 15px;
  line-height: 20px;
  font-family: sans-serif;
  text-align: center;
  padding-top: 15px;
  color: pink;
}
.card__tag {
  background: pink;
  color: #fff;
  width: 150px;
  border-radius: 5px;
  position: relative;
  top: 10px;
  margin: auto;
  text-transform: uppercase;
  font-size: 13px;
}
a {
  color: write;
  text-decoration: none;
}
</style>
