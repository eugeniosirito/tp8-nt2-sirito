import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)




export default new Vuex.Store({
    state: {
        usuarios: [],

    },

    actions: {
        async getUsuarios({ commit }) {
            try {
                const usuarios = await axios.get("https://628d182d3df57e983edbd628.mockapi.io/PostUsuario",)
                commit('GET', usuarios.data)

            }
            catch (error) {
                alert(error)
            }
        },

        async deleteUsuarios({ commit }, id) {
            try {
                const { data: usuario } = await axios.delete("https://628d182d3df57e983edbd628.mockapi.io/PostUsuario", + id)
                commit('DELETE', usuario)

            }
            catch (error) {
                alert(error)
            }
        },

        async putUsuario({ commit }, usuarioNuevo) {
            try {
                const { data: usuario } = await axios.post("https://628d182d3df57e983edbd628.mockapi.io/PostUsuario", usuarioNuevo, { 'content-type': 'application/json' })
                commit('POST', usuario)

            }
            catch (error) {
                alert(error)
            }
        },
    },
    mutations: {
        GET(state, data) {
            state.usuarios = data
        },

        DELETE(state, data) {
            let index = state.usuarios.findIndex(usuario => usuario.id == data.id)
            if (index == -1) throw new Error('usuario no encontrado')
            state.usuarios.splice(index, 1)
        },

        POST(state, data) {
            state.usuarios.push(data)
        }
    }

})



