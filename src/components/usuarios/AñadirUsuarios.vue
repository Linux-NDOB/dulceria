<template>
  <div>
    <h1>Añadir Usuarios</h1>
    <form class="container col-4" v-on:submit.prevent="añadirUsuarios">
      <div class="form-group">
        <div class="form-group">
          <label for="exampleInputEmail1">Id</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="id"
            v-model="objeto.id"
          />
        </div>

        <label for="exampleInputEmail1">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nombre"
          v-model="objeto.nombre"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Apellidos</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Apellidos"
          v-model="objeto.apellido"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          v-model="objeto.email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Contraseña"
          v-model="objeto.contraseña"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click="añadirUsuarios">
        Enviar
      </button>

      <router-link to="/" class="btn btn-warning">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
//import func from 'vue-editor-bridge';
export default {
  name: "AñadirUsuarios",
  data() {
    return {
      objeto: {},
    };
  },
  methods: {
    añadirUsuarios: function () {
        fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.objeto.id,
            nombre: this.objeto.nombre,
            apellido: this.objeto.apellido,
            email: this.objeto.email,
            contraseña: this.objeto.contraseña,
          }),
        })
       .then((res) => res.json())
       .then(() => {window.location.href='/'})
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-left: 5%;
}
</style>