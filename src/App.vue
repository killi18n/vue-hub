<template>
  <Main/>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Main from './routes/Main.vue';

@Component({
    components: {
        Main: Main,
    },
})
class App extends Vue {}

export default App;
</script>


<style lang="scss">
@import '@/styles/index.scss';
</style>
