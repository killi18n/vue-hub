<template>
  <div class="login-form">
    <div class="title">REGISTER</div>
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
      <div class="description" v-on:click="this.moveToLogin">MOVE TO LOGIN</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapActions } from 'vuex';
import CustomButton from '@/components/common/Button.vue';

@Component({
    props: {
        username: String,
        password: String,
    },
    components: {
        CustomButton,
    },
    methods: {
        ...mapActions(['setUsername', 'setPassword']),
        moveToLogin() {
            this.$router.push({ name: 'auth', query: { type: 'login' } });
        },
    },
})
class RegisterForm extends Vue {}

export default RegisterForm;
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


