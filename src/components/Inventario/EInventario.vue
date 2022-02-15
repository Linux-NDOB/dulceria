<template>
  <div>
    <h1>Editar Pedidos</h1>
    <form class="container col-4" v-on:submit.prevent="editarProducto">
      <div class="form-group">
          <label for="exampleInputEmail1">Id Producto</label>
          <input
            type="text"
            class="form-control"
            
            id="exampleInputEmail1"
            v-model="objeto.id"
          />
        </div>

      <div class="form-group">
        
          <label for="exampleInputEmail1">Nombre Producto</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            v-model="objeto.nombre"
          />
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Cantidad</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
         
          v-model="objeto.cantidad"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Precio Prodcuto</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          
          v-model="objeto.precio"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click="editarProducto">
        Actualizar
      </button>

      <router-link to="/inventario" class="btn btn-warning">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "EPedidos",
  data: function () {
    return {
      objeto: {},
    };
  },
  created: function () {
    this.consultarPedidos();
  },
  methods: {
    consultarPedidos: function () {
      console.log("OK");
      fetch("http://localhost:3000/productos/" + this.$route.params.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          this.objeto = [];
          this.objeto = datos;
          console.log(datos.id);
        });
    },
    editarProducto: function () {
      console.log(this.$route.params.id);

      fetch("http://localhost:3000/productos/" + this.$route.params.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   id: this.objeto.id,
          nombre: this.objeto.nombre,
          cantidad: this.objeto.cantidad,
          precio: this.objeto.precio,
          id: this.objeto.id,
        }),
      })
         
        .then((res) => res.json())
        .then(() => {
          window.location.href = "/inventario";
        });
      // },
    },
  },
};
</script>

<style scoped lang="scss">
</style>