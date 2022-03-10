<template>
  <div style="width: 100%">
    <nav v-if="!isMobile" class="header">
      <ul>
        <li><a :href="'/home/' + name"> Inicio </a></li>
        <li><a href="/register-book"> Cadastrar livro </a></li>
        <li><a href="/profile"> Perfil </a></li>
        <li><a href="/">Sair</a></li>
      </ul>
    </nav>
    <nav v-else class="header">
      <menu-icon
        @click="OpenMenu"
        fillColor="#fff"
        style="position: fixed; right: 10px"
      />
      <div class="headerMobile" id="Menu" style="display: none">
        <close-icon
          @click="CloseMenu"
          fillColor="#fff"
          style="position: fixed; right: 0; padding: 10px"
        />
        <ul>
          <li><a :href="'/home/' + name"> Inicio </a></li>
          <li><a href="/register-book"> Cadastrar livro </a></li>
          <li><a href="/profile"> Perfil </a></li>
          <li><a href="/">Sair</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
export default {
  components: {
    MenuIcon,
    CloseIcon,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    OpenMenu() {
      document.getElementById("Menu").style.display = "block";
      this.open = true;
    },
    CloseMenu() {
      document.getElementById("Menu").style.display = "none";
      this.open = false;
    },
  },
  computed: {
    isMobile: function () {
      if (window.screen.width >= 750) {
        return false;
      } else {
        return true;
      }
    },
    name() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style>
.header {
  background: pink;
  padding: 5px;
  margin: 0;
  min-height: 25px;
}
li a,
li {
  display: inline;
  max-width: 35px;
  padding: 10px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
}
ul {
  list-style-type: none;
}
@media only screen and (max-width: 750px) {
  .headerMobile {
    background: rgba(0, 0, 0, 0.904);
    min-height: 100vh;
    width: 250px;
    right: 0;
    position: fixed;
    top: 0px;
    z-index: 998;
  }
  li {
    display: block;
    max-width: 250px;
    text-align: left;
    padding-top: 15px;
  }
}
</style>