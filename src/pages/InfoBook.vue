<template>
  <div class="info">
    <div>
      <img
        src="https://marketplace.canva.com/EAD0UPCkitY/1/0/1024w/canva-capa-de-livro-de-suspense-monocrom%C3%A1tica-com-foto-de-floresta-U1dpnJ3bwKw.jpg"
        alt="img default"
        width="200"
        height="330"
        class="info--img"
      />
    </div>
    <div class="info--content">
      <div>
        <h3>{{ this.info.title }}</h3>
      </div>
      <div>{{ this.info.author }} - {{ this.info.year }}</div>
      <div><strong> Editora: </strong>{{ this.info.Editora }}</div>
      <div><strong> Idioma: </strong> {{ this.info.language }}</div>
      <div><strong> Páginas: </strong> {{ this.info.pages }}</div>
      <div class="info--btn">
        <button @click="changeModal">Excluir livro</button>
      </div>
    </div>
    <div v-if="confirmExcl" class="modal">
      <div class="card">
        <h2>Confirma a exclusão do livro?</h2>
        <p>
          Ao excluir o livro ele será completamente removido de nosso sistema e
          nao será possivel voltar a ação! Caso queira poderá cadastrar o livro
          novamente.
        </p>
        <div>
          <button class="info-rowback" @click="changeModal">Voltar</button>
          <button @click="Delete">Excluir</button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="deleteSucess">
      <div class="card">
        <h2 class="modal--sucess__title">Livro excluído com sucesso</h2>
        <div>
          <button class="info-rowback">
            <a :href="'/home/' + name" class="info-rowback__a">
              Voltar para lista
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {},
      confirmExcl: false,
      deleteSucess: false,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get(`http://localhost:3000/books/${this.id}`)
      .then((res) => {
        this.info = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    Delete() {
      axios.delete(`http://localhost:3000/books/${this.id}`).then((res) => {
        console.log(res, "res");
        this.$store.dispatch("remove", this.id);
        this.deleteSucess = true;
        this.confirmExcl = false;
      });
    },
    changeModal() {
      this.confirmExcl = !this.confirmExcl;
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
button {
  color: white;
  background: red;
  border: none;
  border-radius: 5px;
  padding: 5px 30px;
  margin: auto;
}
.info {
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  gap: 25px;
}
.info--img {
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
}
.info--content {
  text-align: start;
}
.info--btn {
  text-align: center;
  margin: 15px 0 0 0;
}
.modal {
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.705);
  display: flex;
}
.card {
  background: white;
  border-radius: 10px;
  align-items: center;
  margin: auto;
  padding: 25px;
  max-width: 350px;
}
.info-rowback {
  margin: 10px;
  background: palevioletred;
}
.info-rowback__a {
  color: #fff;
  text-decoration: none;
}
/* .modal--sucess__title{ 
  color:chartreuse
} */
@media (max-width: 750px) {
  .info {
    display: block;
  }
  .info--content {
    text-align: center;
    margin: 15px 0 0px 0;
  }
}
</style>