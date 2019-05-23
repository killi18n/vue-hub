<template>
  <div>
    <Header/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Main from './routes/Main.vue';
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

@Component({
    components: {
        Main,
        Header,
        Footer,
    },
})
class App extends Vue {}

export default App;
</script>


<style lang="scss">
@import '@/styles/index.scss';

main {
    min-height: calc(100vh - 15rem);
}
</style>
