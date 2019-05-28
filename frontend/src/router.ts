import Vue from 'vue';
import Router from 'vue-router';
import Main from './routes/Main.vue';
import Auth from './routes/Auth.vue';
import NotFound from './routes/NotFound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
        },
        {
            path: '/auth',
            name: 'auth',
            component: Auth,
        },
        {
            path: '*',
            component: NotFound,
        },
    ],
});
