<template>
  <div>{{code}}</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';

@Component({
    props: {
        code: String,
    },
    methods: {
        ...mapActions(['getGithubAuthentication']),
    },
    mounted() {
        (this as any).getGithubAuthentication({ code: (this as any).code });
    },
})
class OAuthProcessor extends Vue {}

export default OAuthProcessor;
</script>

<style lang="scss" scoped>
</style>


