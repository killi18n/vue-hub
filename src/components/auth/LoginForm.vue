<template>
  <div class="login-form">
    <div class="title">LOGIN</div>
    <div class="contents">
      <div class="input-with-label">
        <div class="label">Username</div>
        <input type="text" name="username" :value="this.$props.username" @input="setUsername">
      </div>
      <div class="input-with-label">
        <div class="label">Password</div>
        <input type="password" name="password" :value="this.$props.password" @input="setPassword">
      </div>
    </div>
    <div class="button-wrapper">
      <CustomButton title="LOGIN"/>
    </div>
    <div class="description-wrapper">
      <div class="description" v-on:click="this.moveToRegister">MOVE TO REGISTER</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Component from 'vue-class-component';
import CustomButton from '@/components/common/Button.vue';

@Component({
    components: {
        CustomButton,
    },
    props: {
        username: String,
        password: String,
    },
    methods: {
        ...mapActions(['setUsername', 'setPassword']),
        moveToRegister() {
            this.$router.push({ name: 'auth', query: { type: 'register' } });
        },
    },
})
class LoginForm extends Vue {}

export default LoginForm;
</script>

<style lang="scss" scoped>
@import '~open-color/open-color';
.login-form {
    border: 1px solid $oc-gray-3;
    border-radius: 2px;
    padding: 1rem;
    width: 400px;

    .title {
        font-size: 2.5rem;
        font-weight: 600;
    }

    .contents {
        display: flex;
        flex-direction: column;

        .input-with-label {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;

            .label {
                font-size: 1.25rem;
                margin-bottom: 1rem;
            }

            input {
                flex: 1;
                border: 1px solid $oc-gray-5;
                outline: none;
                font-size: 1.25rem;
                padding: 0.35rem;
            }
        }
    }

    .button-wrapper {
        margin-top: 1rem;
    }

    .description-wrapper {
        margin-top: 1rem;
        display: flex;
        .description {
            margin-left: auto;
            cursor: pointer;
        }
    }
}
</style>


