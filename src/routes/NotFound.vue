<template>
  <div class="notfound">404 - NotFound</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class NotFound extends Vue {}

export default NotFound;
</script>

<style lang="scss" scoped>
.notfound {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 15rem);
}
</style>
