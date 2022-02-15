<template>
  <div>
    <h1>Añadir Pedido</h1>
    <form class="container col-4" v-on:submit.prevent="añadirPedidos">
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
          placeholder="Nombre Producto"
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
          placeholder="Cantidad"
          v-model="objeto.cantidad"
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

       <div class="form-group">
        <label for="exampleInputEmail1">Destino </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          
          placeholder="Destino"
          v-model="objeto.direccion"
        />
      </div>
      

      <button type="submit" class="btn btn-primary" @click="añadirPedidos">
        Enviar
      </button>

      <router-link to="/pedidos" class="btn btn-warning">Cancelar</router-link>
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
    añadirPedidos: function () {
        fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.objeto.id,
            nombre: this.objeto.nombre,
            cantidad: this.objeto.cantidad,
            precio: this.objeto.precio,
            direccion: this.objeto.direccion,
            
          }),
        })
       .then((res) => res.json())
       .then(() => {window.location.href='/pedidos'})
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
  margin-left: 5%;
}
</style>