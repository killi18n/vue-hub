<template>
  <div class="form-wrapper">
    <div v-if="this.type === 'login'">
      <LoginForm :username="username" :password="password"/>
    </div>
    <div v-if="this.type === 'register'">
      <RegisterForm :username="username" :password="password"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex';
import LoginForm from '@/components/auth/LoginForm.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';

@Component({
    components: {
        LoginForm,
        RegisterForm,
    },
    computed: {
        ...mapGetters({
            username: 'getUsername',
            password: 'getPassword',
        }),
    },
    data() {
        return {
            type: '',
        };
    },
    methods: {
        ...mapActions(['initializeInputs']),
    },
    beforeRouteUpdate(to, from, next) {
        (this as any).initializeInputs();
        (this as any).type = to.query.type;
        next();
    },
    beforeMount() {
        (this as any).type = this.$router.currentRoute.query.type;
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

