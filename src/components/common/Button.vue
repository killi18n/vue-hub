<template>
  <div>
    <div v-if="type === 'login'">
      <a :href="this.githubURL">Github Authentication</a>
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
    computed: {
        githubURL() {
            return `https://github.com/login/oauth/authorize?scope=user:email&client_id=${
                process.env.VUE_APP_GITHUB_CLIENT_ID
            }`;
        },
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

