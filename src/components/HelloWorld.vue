<template>
  <div class="hello">
    <hr>

    <router-link to="/añadir-usuarios" class="btn btn-warning"> Añadir Usuarios</router-link>

    <br>

    <hr>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Contraseña</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el of vector" :key="el.id">
          <th scope="row">{{ el.id }}</th>
          <td>{{ el.nombre }}</td>
          <td>{{ el.apellido }}</td>
          <td>{{ el.email }} </td>
          <td>{{ el.contraseña }}</td>
          <td>
            <router-link :to="{ name: 'EditarUsuarios', params: { id: el.id }}" class="btn btn-primary">Editar</router-link>
            <button class="btn btn-primary" @click="eliminar(el.id)" >Eliminar </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import func from 'vue-editor-bridge';
export default {
  name: "HelloWorld",
  data: function () {
    return {
      vector: [],
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios: function () {
      fetch("http://localhost:3000/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          this.vector = [];
          this.vector = datos;
          console.log(datos.id);
        });
    },
    eliminar: function(id){
      fetch("http://localhost:3000/usuarios/"+id,{
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        }

      })
      .then(() => (window.location.href = "/"));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  //color: #42b983;
}
.btn{
  margin-left: 5%;
  
}
</style>
