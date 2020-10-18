<template>
    <div class="transition duration-300 ease-in-out w-full py-10 mb-5 bg-white rounded-lg">
        <form action="#" @submit.prevent="login">
            <div class="max-w-lg mx-auto p-1 flex items-center">
                <input type="text" placeholder="Nama" v-model="loginForm.name" class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none">
                <button type="submit" class="transition duration-300 ease-in-out appearance-none bg-blue-400 text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-blue-600">Masuk</button>
            </div>
        </form>
        <form action="#" @submit.prevent="register">
            <div class="max-w-lg mx-auto p-1 flex items-center">
                <input type="text" placeholder="Nama" v-model="registerForm.name" class="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none">
                <button type="submit" class="transition duration-300 ease-in-out appearance-none bg-blue-400 text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-blue-600">Daftar</button>
            </div>
        </form>
        <div class="max-w-lg mx-auto p-1">
            <button type="submit" @click.prevent="logout" class="transition duration-300 ease-in-out appearance-none w-full bg-red-400 text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-red-500">Keluar</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            loginForm: {
                name: 'hizbe'
            },
            registerForm: {
                name: ''
            }
        }
    },

    methods: {
        ...mapActions({
            signin: 'auth/login',
            newUser: 'auth/register',
            signout: 'auth/logout'
        }),

        async login() {
            await this.signin(this.loginForm);
        },

        async register() {
            await this.newUser(this.registerForm);
        },

        async logout() {
            await this.signout();
        }
    }
}
</script>

<style>

</style>