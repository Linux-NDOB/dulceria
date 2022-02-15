<template>
    <div>
        <h1>Lista de Productos en el Inventario</h1>
        <MInventario/>
    </div>
</template>

<script>
import MInventario from "@/components/Inventario/MInventario.vue"
export default {
    components:{
        MInventario,
    }
    
}
</script>