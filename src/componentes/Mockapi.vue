<template>
  <section class="src-componentes-usuario">
    <div class="jumbotron">
      <h2>MockApi</h2>
      <hr />
      <hr />
      <br />

      <div v-if="mostrarUsuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th class="text-center">Edad</th>
            <th class="text-center">Borrar Usuario</th>
          </tr>

          <tr v-for="(usuario, index) in mostrarUsuarios" :key="index">
            <td>{{ usuario.name }}</td>
            <td class="text-center">{{ usuario.edad }}</td>
            <td>{{ usuario.email }}</td>
            <td class="text-center">
              <button
                class="btn btn-danger"
                @click="borrarUsuarios(usuario.id)"
              >
                Borrar
              </button>
            </td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        No se encontraron usuarios
      </h4>
    </div>
  </section>
</template>

<script lang="js">



  export default  {
    name: 'src-componentes-usuario',
    props: [],
    mounted () { 
     console.log("GET USUARIOS")
     this.$store.dispatch('getUsuarios')
    },
    data () {
      return {    

      }
    },
    methods: {

      borrarUsuarios(id) {
        console.log("DELETE USUARIOS")
        this.$store.dispatch('deleteUsuarios',id)
      },

    },
    computed: {
      mostrarUsuarios() {
        let usuarios = this.$store.state.usuarios
        return usuarios
      },

      
    }
    
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: teal;
  color: white;
}
</style>
