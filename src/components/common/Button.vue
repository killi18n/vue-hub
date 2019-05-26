<template>
  <div>
    <div v-if="type === 'login'">
      <a
        href="#"
        onClick="MyWindow=window.open('https://github.com/login/oauth/authorize?scope=user:email&client_id=github_client_id','MyWindow',width=600,height=300); return false;"
      >Github Authentication</a>
    </div>
    <div v-else class="button">{{title}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        title: String,
        type: String,
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

