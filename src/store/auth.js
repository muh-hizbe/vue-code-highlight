import axios from 'axios';
export default {
    namespaced: true,
    state: {
        authenticated: false,
        user: []
    },
    getters: {
        checkAuth(state) {
            return state.authenticated;
        },
        userData(state) {
            return state.user;
        }
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },

        SET_USER(state, name) {
            state.user = name;
        }
    },
    actions: {
        async login({commit}, name) {
            let response = await axios.post('/user/login', name);
            commit('SET_AUTHENTICATED', true);
            commit('SET_USER', response.data.data);
        },
        async register({commit}, name) {
            let response = await axios.post('/user/register', name);
            await axios.post('/user/login', response.data.data.name);
            commit('SET_AUTHENTICATED', true);
            commit('SET_USER', response.data.data);
            console.log(response.data.data);
        },
        async logout({commit}) {
            commit('SET_AUTHENTICATED', false);
            commit('SET_USER', []);
        },
    }
}