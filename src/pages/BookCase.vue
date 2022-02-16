<template>
  <div>
    <h2>Bem-vinda, {{ name }}</h2>
    <p>Aqui está a sua lista de livros lidos recentemente</p>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Raynne",
    };
  },
};
</script>

<style>
</style>