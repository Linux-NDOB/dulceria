<template>
  <div class="hello">
    <hr>

    <router-link to="/añadir-pedidos" class="btn btn-danger"> Añadir Pedido</router-link>

    <br>

    <hr>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id </th>
          <th scope="col">Nombre Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Direccion</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="el of vector" :key="el.id">
          <th scope="row">{{ el.id }}</th>
          <td>{{ el.nombre }}</td>
          <td>{{ el.cantidad }}</td>
          <td>{{ el.precio }}</td>
          <td>{{ el.direccion }}</td>
         
          <td>
            <router-link :to="{ name: 'EPedidos', params: { id: el.id }}" class="btn btn-primary">Editar</router-link>
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
  name: "MPedidos",
  data: function () {
    return {
      vector: [],
    };
  },
  created: function () {
    this.consultarPedidos();
  },
  methods: {
    consultarPedidos: function () {
      fetch("http://localhost:3000/pedidos", {
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
      fetch("http://localhost:3000/pedidos/"+id,{
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        }

      })
      .then(() => (window.location.href = "/pedidos"));
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
