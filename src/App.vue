<template>
    <div class="bg-gray-700">
        <main id="app" class="container mx-auto py-10">
            <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
            <section>
                <h1 class="font-semibold text-4xl text-center text-gray-200 py-10">CODE HIGHLIGHT</h1>
            </section>
            <section class="container grid grid-cols-2 gap-5">
                <Auth />
                <ConfigCode />
            </section>
            <CodeZone />
            <template v-if="this.$store.state.auth.user !== null && this.$store.state.auth.authenticated === true">
                <ConfigListCode />
                <ListResult />
            </template>
        </main>
    </div>
</template>

<script>
import './assets/style/main.scss'
import Auth from './components/Auth.vue'
import ConfigCode from './components/ConfigCode.vue'
import CodeZone from './components/CodeZone.vue'
import ConfigListCode from './components/ConfigListCode.vue'
import ListResult from './components/ListResult.vue'

export default {
    name: 'App',
        components: {
            Auth,
            ConfigCode,
            CodeZone,
            ConfigListCode,
            ListResult,
    }
}
</script>

<style lang="scss">
</style>
