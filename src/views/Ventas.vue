<template>
    <div>
        <h1>Listado de Ventas del Mes</h1>
        <MVentas/>
    </div>
</template>

<script>
import MVentas from "@/components/Ventas/MVenta.vue"
export default {
    components:{
        MVentas,
    }
    
}
</script>