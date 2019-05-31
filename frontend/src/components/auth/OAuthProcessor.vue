<template>
  <div>
    <rotate-square2></rotate-square2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions, mapGetters } from 'vuex';
import { RotateSquare2 } from 'vue-loading-spinner';

@Component({
    components: {
        RotateSquare2,
    },
    props: {
        code: String,
    },
    methods: {
        ...mapActions(['getGithubAuthentication']),
    },
    computed: {
        ...mapGetters(['isLogged']),
    },
    mounted() {
        const token = localStorage.getItem('token');
        if (token) {
            this.$router.push({ name: 'main' });
            return;
        }
        (this as any).getGithubAuthentication({ code: (this as any).code });
    },
    watch: {
        isLogged(newIsLogged, oldIsLogged) {
            if (newIsLogged) {
                this.$router.push({ name: 'main' });
            }
        },
    },
})
class OAuthProcessor extends Vue {}

export default OAuthProcessor;
</script>

<style lang="scss" scoped>
</style>


