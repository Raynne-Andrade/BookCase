import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      user: {
        user: '',
        name: '',
        id: '',
        email: '',
        password: ''
      },
      books: []
    }
  },
  plugins: [createPersistedState()],
  mutations: {
    updateUser(state, body) {
      state.user = body
    },
    addBook(state, body) {
      state.books.push(body)
    },
    removeBook(state, id) {
      var index = state.books.findIndex(book => book.id == id);
      state.books.splice(index, 1)
    }
  },
  actions: {
    updateUser(context, body) {
      context.commit('updateUser', body)
    },
    add(context, body) {
      context.commit('addBook', body)
    },
    remove(context, id) {
      context.commit('removeBook', id)
    },
  }
})

export default store


// Install the store instance as a plugin
