<template>
  <div class="form-wrapper">
    <div v-if="this.$router.currentRoute.query.type === 'login'">
      <LoginForm/>
    </div>
    <div v-if="this.$router.currentRoute.query.type === 'register'">
      <RegisterForm/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';

@Component({
    components: {
        LoginForm,
        RegisterForm,
    },
})
class Auth extends Vue {
    // mounted() {
    //     const { type } = this.$router.currentRoute.query;
    // }
}

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

