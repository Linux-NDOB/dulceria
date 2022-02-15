import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/añadir-usuarios",
    name: "AñadirUsuarios",
    component: () =>
    import(/* webpackChunkName: "about" */ "../components/usuarios/AñadirUsuarios.vue"),
  },
  {
    path: "/editar-usuarios/:id",
    name: "EditarUsuarios",
    component: () =>
    import(/* webpackChunkName: "about" */ "../components/usuarios/EditarUsuarios.vue"),
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pedidos.vue"),
  },
  {
    path: "/mostrar-pedidos",
    name: "MPedidos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Pedidos/MPedidos.vue"),
  },{
    path: "/añadir-pedidos",
    name: "APedidos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Pedidos/APedidos.vue"),
  },
  {
    path: "/editar-pedidos/:id",
    name: "EPedidos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Pedidos/EPedidos.vue"),
  },
  {
    path: "/inventario",
    name: "Inventario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Inventario.vue"),
  },
  {
    path: "/mostrar-inventario",
    name: "MInventario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Inventario/MInventario.vue"),
  },
  {
    path: "/añadir-inventario",
    name: "AInventario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Inventario/AInventario.vue"),
  },
  {
    path: "/editar-inventario/:id",
    name: "EInventario",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Inventario/EInventario.vue"),
  },
  {
    path: "/ventas",
    name: "Ventas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ventas.vue"),
  },
  {
    path: "/añadir-venta",
    name: "AVentas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Ventas/AVenta.vue"),
  },
  {
    path: "/editar-venta/:id",
    name: "EVenta",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Ventas/EVenta.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
