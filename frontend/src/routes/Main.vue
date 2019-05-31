<template>
  <div>Main.vue</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class Main extends Vue {
    // private mounted() {
    //     if (!this.$store.state.auth.logged) {
    //         this.$router.push({ name: 'auth', query: { type: 'login' } });
    //     }
    // }
}

export default Main;
</script>

<style lang="scss" scoped>
</style>


