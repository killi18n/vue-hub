<template>
  <div class="footer">Footer</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

class Footer extends Vue {}

export default Footer;
</script>

<style lang="scss" scoped>
@import '@/styles/utils.scss';
.footer {
    height: 10rem;
    background: $oc-gray-7;
    color: white;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
}
</style>
