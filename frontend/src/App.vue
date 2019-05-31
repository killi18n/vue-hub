<template>
  <div>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
    <!-- <AuthChecker/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import Main from './routes/Main.vue';
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

@Component({
    components: {
        Main,
        Header,
        Footer,
    },
    methods: {
        ...mapActions(['checkUser']),
    },
    computed: {
        ...mapGetters(['isLogged']),
    },
    async beforeMount() {
        if (this.$router.currentRoute.query.type === 'oauth') {
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            this.$router.push({ name: 'auth', query: { type: 'login' } });
            return;
        }
        await (this as any).checkUser();
        if (!(this as any).isLogged) {
            localStorage.removeItem('token');
            this.$router.push({ name: 'auth', query: { type: 'login' } });
        }
    },
    watch: {
        async $route(to, from) {
            if (to.query.type === 'oauth') {
                return;
            }
            const token = localStorage.getItem('token');
            if (!token) {
                this.$router.push({ name: 'auth', query: { type: 'login' } });
                return;
            }
            await (this as any).checkUser();
            if (!(this as any).isLogged) {
                localStorage.removeItem('token');
                this.$router.push({ name: 'auth', query: { type: 'login' } });
            }
        },
    },
})
class App extends Vue {}

export default App;
</script>


<style lang="scss">
@import '@/styles/index.scss';

main {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15rem);
}
</style>
