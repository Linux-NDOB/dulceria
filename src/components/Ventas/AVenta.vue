<template>
  <div>
    <h1>Añadir venta al Registro</h1>
    <form class="container col-4" v-on:submit.prevent="añadirVenta">
      <div class="form-group">
        <div class="form-group">
          <label for="exampleInputEmail1">Codigo de Factura</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Codigo"
            v-model="objeto.id"
          />
        </div>

        <label for="exampleInputEmail1">Comprador</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nombre Comprador"
          v-model="objeto.comprador"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Vendedor</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nombre Vendedor"
          v-model="objeto.vendedor"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Precio </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          
          placeholder="Precio"
          v-model="objeto.precio"
        />
      </div>
      

      <button type="submit" class="btn btn-primary" @click="añadirVenta">
        Enviar
      </button>

      <router-link to="/ventas" class="btn btn-warning">Cancelar</router-link>
    </form>
  </div>
</template>

<script>
//import func from 'vue-editor-bridge';
export default {
  name: "AVenta",
  data() {
    return {
      objeto: {},
    };
  },
  methods: {
    añadirVenta: function () {
        fetch("http://localhost:3000/ventas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.objeto.id,
            comprador: this.objeto.comprador,
            vendedor: this.objeto.vendedor,
            precio: this.objeto.precio,
            
          }),
        })
       .then((res) => res.json())
       .then(() => {window.location.href='/ventas'})
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-left: 5%;
}
</style>