<template>
  <div>
    <h1>Editar Factura</h1>
    <form class="container col-4" v-on:submit.prevent="editarVentas">
      <div class="form-group">
          <label for="exampleInputEmail1">Codigo de Factura</label>
          <input
            type="text"
            class="form-control"
            
            id="exampleInputEmail1"
            v-model="objeto.id"
          />
        </div>

      <div class="form-group">
        
          <label for="exampleInputEmail1">Comprador</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            v-model="objeto.comprador"
          />
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Vendedor</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          
         
          v-model="objeto.vendedor"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Monto de Factura</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          
          v-model="objeto.precio"
        />
      </div>

      <button type="submit" class="btn btn-primary" @click="editarVentas">
        Actualizar
      </button>

      <router-link to="/ventas" class="btn btn-warning">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "EVenta",
  data: function () {
    return {
      objeto: {},
    };
  },
  created: function () {
    this.consultarVentas();
  },
  methods: {
    consultarVentas: function () {
      console.log("OK");
      fetch("http://localhost:3000/ventas/" + this.$route.params.id, {
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
    editarVentas: function () {
      console.log(this.$route.params.id);

      fetch("http://localhost:3000/ventas/" + this.$route.params.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   id: this.objeto.id,
          id: this.objeto.id,
          comprador: this.objeto.comprador,
          
          vendedor: this.objeto.vendedor,
          precio: this.objeto.precio,
        }),
      })
         
        .then((res) => res.json())
        .then(() => {
          window.location.href = "/ventas";
        });
      // },
    },
  },
};
</script>

<style scoped lang="scss">
</style>