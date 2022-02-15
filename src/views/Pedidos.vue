<template>
  <div class="about">
    <h1>Lista de Pedidos</h1>
    <MPedidos/>
  </div>
</template>

<script>
import MPedidos from "@/components/Pedidos/MPedidos.vue"
export default {
  components:{
    MPedidos,
  }
  
}
</script>