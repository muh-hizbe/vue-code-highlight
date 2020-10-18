// import axios from 'axios';
export default {
    namespaced: true,
    state: {
        language: '',
        twoslash: '',
        fileName: '',
        highlight: '',
    },
    getters: {
        getLanguage(state) {
            return state.language;
        },
        getTwoslash(state) {
            return state.twoslash;
        },
        getFileName(state) {
            return state.fileName;
        },
        getHighlight(state) {
            return state.highlight;
        },
    },
    mutations: {
        SET_LANGUANGE(state, value) {
            state.language = value;
        },
        SET_TWOSLASH(state, value) {
            state.twoslash = value;
        },
        SET_FILE_NAME(state, value) {
            state.fileName = value;
        },
        SET_HIGHLIGHT(state, value) {
            state.highlight = value;
        },
    },
    actions: {
        async setConfig({commit}, value) {
            commit('SET_LANGUANGE', value.language);
            commit('SET_TWOSLASH', value.twoslash);
            commit('SET_FILE_NAME', value.fileName);
            commit('SET_HIGHLIGHT', value.highlight);

        },

        async reset({commit}) {
            commit('SET_LANGUANGE', '');
            commit('SET_TWOSLASH', '');
            commit('SET_FILE_NAME', '');
            commit('SET_HIGHLIGHT', '');
        }
    }
}