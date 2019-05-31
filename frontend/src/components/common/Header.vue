<template>
  <div class="header">
    <router-link to="/" class="header-title">Vue Hub</router-link>
    <button class="logout-button">LOGOUT</button>
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

    .logout-button {
        margin-left: auto;
        margin-right: 2.5rem;
        background: $oc-blue-3;
        border: none;
        color: white;
        font-size: 1.25rem;
        border-radius: 2px;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        outline: none;
        cursor: pointer;

        &:hover {
            background: $oc-blue-5;
        }

        &:active {
            background: $oc-blue-4;
        }
    }
}
</style>
