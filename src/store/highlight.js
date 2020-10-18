import axios from 'axios';
export default {
    namespaced: true,
    state: {
        language: '',
        fileName: '',
        highlight: '',
        twoslash: '',
        download: '',
        code: '',
        result: ''
    },
    getters: {
        getLanguage(state) {
            return state.language;
        },
        getFileName(state) {
            return state.fileName;
        },
        getHighlight(state) {
            return state.highlight;
        },
        getTwoslash(state) {
            return state.twoslash;
        },
        getDownload(state) {
            return state.download;
        },
        getCode(state) {
            return state.code;
        },
        getResult(state) {
            return state.result;
        }
    },
    mutations: {
        SET_HIGHLIGHT(state, value) {
            state.result = value;
        },
        SET_CODE(state, value) {
            state.code = value;
        }
    },
    actions: {
        async setCode({
            commit
        }, value) {
            commit('SET_CODE', value);
        },

        async getResultHighlight({
            commit
        }, value) {
            let query = `?lang=${value.language}`;

            if (value.fileName && value.highlight) {
                query = `?lang=${value.language}&highlight=${value.highlight}&fileName=${value.fileName}`;
            } else if (value.highlight && value.fileName === '') {
                query = `?lang=${value.language}&highlight=${value.highlight}`;
            } else if (value.fileName && value.highlight === '') {
                query = `?lang=${value.language}&fileName=${value.fileName}`;
            }

            let response = await axios.post(query, {code: value.code});            
            console.log(query);
            // console.log(response.data.data);
            commit('SET_HIGHLIGHT', response.data.data);
        },
    }
}