<template>
  <section>
    <h1 class="mt-5">Formulario</h1>

    <vue-form :state="formState" @submit.prevent="enviar()">
      <validate tag="div">
        <input
          placeholder="Nombre y Apellido"
          v-model.trim="formData.name"
          id="name"
          name="name"
          type="text"
          class="form-control mt-3"
          autocomplete="off"
          required
          :minlength="nameMinLength"
          :maxlength="nameMaxLength"
        />

        <field-messages name="name" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
          <div class="alert alert-danger mt-1" slot="minlength">
            El name debe tener entre {{ nameMinLength }} y
            {{ nameMaxLength }} caracteres.
          </div>
        </field-messages>
      </validate>

      <validate tag="div">
        <input
          placeholder="Edad"
          v-model.trim="formData.edad"
          id="edad"
          name="edad"
          type="number"
          class="form-control mt-3"
          autocomplete="off"
          required
          :min="edadMin"
          :max="edadMax"
        />

        <field-messages name="edad" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
          <div class="alert alert-danger mt-1" slot="min">
            La edad debe ser entre {{ edadMin }} y {{ edadMax }} años.
          </div>
        </field-messages>
      </validate>

      <validate tag="div">
        <input
          placeholder="Correo Eléctronico"
          v-model.trim="formData.email"
          id="email"
          name="email"
          type="email"
          class="form-control mt-3"
          autocomplete="off"
          required
        />

        <field-messages name="email" show="$dirty">
          <div class="alert alert-success mt-1">Perfecto!</div>
          <div class="alert alert-danger mt-1" slot="required">
            Campo obligatorio
          </div>
          <div class="alert alert-danger mt-1" slot="email">
            El correo ingresado es inválido.
          </div>
        </field-messages>
      </validate>

      <button class="btn btn-success my-3" :disabled="formState.$invalid">
        Enviar
      </button>
    </vue-form>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState :{},
        formData : this.getInicialData(),
        nameMinLength : 3,
        nameMaxLength : 15,
        edadMin : 18,
        edadMax : 120,       
    
       }
    },
    methods: {     

      enviar(){
        
        console.log({...this.formData})        
        const usuario = { name: this.formData.name, edad: this.formData.edad, email: this.formData.email } 
        this.$store.dispatch('putUsuario', usuario)
        this.formData = this.getInicialData()
        this.formState._reset()
        },

      getInicialData(){
        return {
          name: '',         
          edad:'',
          email: ''
          }
      },

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
h1 {
  color: coral;
}
</style>