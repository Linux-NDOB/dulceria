<template>
  <div class="hello">
    <hr>

    <router-link to="/añadir-venta" class="btn btn-danger"> Registrar Ventas</router-link>

    <br>

    <hr>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Codigo </th>
          <th scope="col">Comprador</th>
          <th scope="col">Vendedor</th>
          <th scope="col">Monto Transaccion</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="el of vector" :key="el.id">
          <th scope="row">{{ el.id }}</th>
          <td>{{ el.comprador }}</td>
          <td>{{ el.vendedor }}</td>
          <td>{{ el.precio }}</td>
         
          <td>
            <router-link :to="{ name: 'EVenta', params: { id: el.id }}" class="btn btn-primary">Editar</router-link>
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
    this.consultarVentas();
  },
  methods: {
    consultarVentas: function () {
      fetch("http://localhost:3000/ventas", {
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
      fetch("http://localhost:3000/ventas/"+id,{
        method: "DELETE",
        headers: {
          "Content-Type" : "application/json"
        }

      })
      .then(() => (window.location.href = "/ventas"));
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
