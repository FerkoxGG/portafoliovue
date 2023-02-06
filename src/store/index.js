import Vue from 'vue'
import Vuex from 'vuex'
import Fotoperfil1 from '@/assets/img/foto_perfil1.jpg'
import Fotoperfil2 from '@/assets/img/foto_perfil2.png'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fotoPerfil: Fotoperfil1,
    fotoPerfil2: Fotoperfil2,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
