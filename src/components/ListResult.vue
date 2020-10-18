<template>
    <section class="transition duration-300 ease-in-out w-full p-10 mb-5 bg-white rounded-lg">
        <div class="max-w-full grid grid-cols-3 gap-5 mx-auto p-1 items-center">
            <div v-for="code in codes" :key="code.id" class="transition duration-300 ease-in-out no-resize appearance-none block w-full text-gray-700 rounded py-3 px-4 mb-3 shadow-lg">
                <div class="bg-blue-900 rounded p-5 mb-3 overflow-auto">
                    {{ code.code }}
                </div>
                <div class="flex items-start h-12 rounded">
                    <button class="transition duration-300 ease-in-out px-3 py-2 h-full bg-red-400 hover:bg-red-600 text-white font-semibold uppercase rounded mr-3">Hapus</button>
                    <button class="transition duration-300 ease-in-out px-3 py-2 h-full bg-blue-400 hover:bg-blue-600 text-white font-semibold uppercase rounded mr-3">Unduh</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            codes: []
        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/userData',
        }),
    },

    watch: {
        codes() {
            let response = axios.post('/code/list', {user: this.user.id});
            this.codes = response.data;
            console.log(response);
        }
    }
}
</script>

<style>

</style>