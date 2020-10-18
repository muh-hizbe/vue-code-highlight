<template>
    <section class="transition duration-300 ease-in-out w-full p-10 mb-5 bg-white rounded-lg">
        <template v-if="user.name">
            <h2 class="text-center font-semibold text-3xl mb-5 uppercase">Hai {{ user.name }}</h2>
        </template>
        <div class="max-w-full mx-auto p-1 grid grid-cols-2 gap-5">
            <textarea placeholder="Paste your code here" v-model="code" class="transition duration-300 ease-in-out no-resize appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-auto resize-none shiki"></textarea>
            <div class="">                
                <div v-if="result" v-html="result" class="bg-blue-900 rounded p-5 mb-3 overflow-auto">
                    
                </div>
                <div v-if="user.name !== null && auth === true" class="flex items-start h-12 rounded">
                    <button @click.prevent="storeCodeHighlight" class="transition duration-300 ease-in-out px-3 py-2 h-full bg-green-400 hover:bg-green-600 text-white font-semibold uppercase rounded mr-3">Simpan</button>
                    <button class="transition duration-300 ease-in-out px-3 py-2 h-full bg-blue-400 hover:bg-blue-600 text-white font-semibold uppercase rounded mr-3">Unduh</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {    
    data() {
        return {
            code: '',  
            data: {
                code: '',
                language: '',
                highlight: '',
                twoslash: '',
                fileName: ''
            }
        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/userData',
            auth: 'auth/checkAuth',
            result: 'highlight/getResult',
            language: 'configfile/getLanguage',
            line: 'configfile/getHighlight',
            twoslash: 'configfile/getTwoslash',
            fileName: 'configfile/getFileName',
        }),
    },    

    watch: {        
        code() {
            this.data.code = this.code;
            this.data.language = this.language;
            this.data.highlight = this.line;
            this.data.twoslash = this.twoslash;
            this.data.fileName = this.fileName;
            this.setHighlightCode();
            this.getResultHighlightCode();
        },
    },

    methods: {
        ...mapActions({
            setCode: 'highlight/setCode',
            getResultHighlight: 'highlight/getResultHighlight',          
        }),

        async setHighlightCode() {
            await this.setCode(this.data.code);
        },

        async getResultHighlightCode() {
            await this.getResultHighlight(this.data);
        },        

        async storeCodeHighlight() {
            let response = await axios.post('/code/store', {
                user: this.user.id,
                content: {
                    lang: this.language,
                    code: this.code,
                    highlight: this.line,
                    fileName: this.fileName,
                    twoslash: this.twoslash
                }
            })
            console.log(response);
        }
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=swap');
.shiki, code {
    font-family: 'Fira Code', monospace;
}
.shiki__meta {
    display: flex;
    color: white;
    justify-content: space-between !important;
    padding-bottom: 15px;
    border-bottom: rgba(255, 255, 255, 0.473) solid 1px;
}
.shiki__code {
    margin-top: 15px;
}
.highlight {
    background-color: rgba(160, 233, 255, 0.199) !important;
    border-left: yellow solid 3px;
}
</style>