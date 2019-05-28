<template>
  <div class="header">
    <router-link to="/" class="header-title">Vue Hub</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class Header extends Vue {}

export default Header;
</script>

<style lang="scss" scoped>
@import '@/styles/utils.scss';
.header {
    height: 5rem;
    background: $oc-blue-8;
    color: white;

    display: flex;
    align-items: center;

    .header-title {
        margin-left: 2rem;
        font-size: 1.5rem;
        font-weight: 800;
    }
}
</style>
