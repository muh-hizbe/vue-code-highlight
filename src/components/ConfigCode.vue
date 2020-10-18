<template>
    <div class="transition duration-300 ease-in-out w-full p-10 mb-5 bg-white rounded-lg">        
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <label for="language" class="flex-1 w-full appearance-none rounded pl-0 text-gray-700 uppercase font-semibold focus:outline-none">Pilih bahasa : </label>
            <label for="twoslash" class="flex-1 w-full appearance-none rounded pl-0 text-gray-700 uppercase font-semibold focus:outline-none">Pilih twoslash : </label>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <select id="language" v-model="language" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 cursor-pointer bg-blue-100">
                <option>Pilih bahasa</option>
                <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
            </select>
            <select id="twoslash" v-model="twoslash" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 cursor-pointer bg-blue-100">
                <option>Pilih Twoslash</option>
                <option v-for="twoslash in twoslashes" :key="twoslash" :value="twoslash">{{ twoslash }}</option>
            </select>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <input type="text" v-model="fileName" placeholder="Nama berkas" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none bg-yellow-200"/>
            <input type="text" v-model="highlight" placeholder="Baris highlight" class="flex-1 w-full appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none bg-yellow-200"/>
        </div>
        <div class="max-w-lg mx-auto p-1 flex items-center">
            <button @click.prevent="reset" class="flex-1 w-full appearance-none rounded uppercase shadow p-3 text-white font-semibold mr-2 focus:outline-none bg-red-400 hover:bg-red-500">Reset</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            language: '',
            twoslash: '',
            fileName: '',
            highlight: '',

            file: {
                code: '',
                language: '',
                highlight: '',
                twoslash: '',
                fileName: ''
            },

            languages: [],
            twoslashes: [],
        }
    },

    async mounted() {
        let response = await axios.get('/options');
        this.languages = response.data.data.languages;
        this.twoslashes = response.data.data.twoslashes;
    },

    watch: {
        language() {
            this.file.language = this.language;
            this.setConfigFile();
            this.setCode();
            this.getResultHighlightCode();
        },
        twoslash() {
            this.file.twoslash = this.twoslash;
            this.setConfigFile();
            this.setCode();
            this.getResultHighlightCode();
        },
        fileName() {
            this.file.fileName = this.fileName;
            this.setConfigFile();
            this.setCode();
            this.getResultHighlightCode();
        },
        highlight() {
            this.file.highlight = this.highlight;
            this.setConfigFile();
            this.setCode();
            this.getResultHighlightCode();
        },
    },

    methods: {
        ...mapActions({
            format: 'configfile/reset',
            setConfig: 'configfile/setConfig'
        }),

        async reset() {
            this.language = '';
            this.twoslash = '';
            this.fileName = '';
            this.highlight = '';
            this.code = '';
            this.format();
        },

        async setConfigFile() {
            await this.setConfig(this.file);
        },

        async setCode() {
            this.file.code = this.$store.getters['highlight/getCode']
        },

        async getResultHighlightCode() {
            await this.$store.dispatch('highlight/getResultHighlight', this.file, {
                root: true
            })
        }
    },
}
</script>