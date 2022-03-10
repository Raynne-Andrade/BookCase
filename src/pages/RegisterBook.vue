<template>
  <h2>Cadastrar um novo livro</h2>
  <form-register-book @sucess="this.sucess = true"/>
  <div v-if="this.sucess" class="modal">
    <div class="card">
      <h2>Livro cadastrado com sucesso!</h2>
      <a :href="'/home/' + name"> Ver na listagem </a>
      <button @click="closeModal">Cadastrar novo livro</button>
    </div>
  </div>
</template>
<script>
import FormRegisterBook from "../components/RegisterBook/FormRegisterBook.vue";
export default {
  components: { FormRegisterBook },
  data() {
    return {
      sucess: false,
    };
  },
  methods: {
    closeModal() {
      this.sucess = false;
    },
  },
  computed: {
    name() {
      return this.$store.state.user.name;
    },
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.705);
  display: flex;
}
.card{
  background: white;
  border-radius: 10px;
  align-items: center;
  margin:auto;
  padding: 25px;
}
a{ 
  color: pink;
  text-decoration: none;
  margin: 15px
}
button{ 
background: pink;
color: white;
border-radius: 5px;
border:none;
padding: 5px 10px ;
}
</style>
