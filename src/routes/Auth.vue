<template>
  <div class="form-wrapper">
    <div v-if="this.type === 'login'">
      <LoginForm/>
    </div>
    <div v-if="this.type === 'oauth'">
      <OAuthProcessor :code="code"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoginForm from '@/components/auth/LoginForm.vue';
import OAuthProcessor from '@/components/auth/OAuthProcessor.vue';

@Component({
    components: {
        LoginForm,
        OAuthProcessor,
    },
    data() {
        return {
            type: '',
            code: '',
        };
    },
    beforeRouteUpdate(to, from, next) {
        (this as any).type = to.query.type;
        next();
    },
    beforeMount() {
        (this as any).type = this.$router.currentRoute.query.type;
        if (this.$router.currentRoute.query.code) {
            (this as any).code = this.$router.currentRoute.query.code;
        }
    },
})
class Auth extends Vue {}

export default Auth;
</script>

<style lang="scss" scoped>
.form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 15rem);
}
</style>

