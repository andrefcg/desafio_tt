import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Vendas from '../views/Vendas.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/vendas',
        name: 'Vendas',
        component: Vendas,
    },
];

const router = new VueRouter({
    routes
});

export default router;
