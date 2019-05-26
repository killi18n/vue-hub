<template>
  <div class="button">{{title}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        title: String,
    },
})
class Button extends Vue {}

export default Button;
</script>

<style lang="scss" scoped>
@import '~open-color/open-color';
.button {
    background: $oc-blue-5;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    text-align: center;
    color: white;
    cursor: pointer;
}
</style>

