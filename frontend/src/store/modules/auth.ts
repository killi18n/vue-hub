import axios from 'axios';
import { GetterTree } from 'vuex';

export interface AuthState {
    logged: boolean;
}

const initialState: AuthState = {
    logged: false,
};

const getters: GetterTree<any, {}> = {
    isLogged: (state: AuthState): boolean => {
        return state.logged;
    },
};

const actions = {
    setLogged({ commit, state }: any, payload: any) {
        const { isLogged } = payload;
        commit('setLogged', { isLogged });
    },
    async getGithubAuthentication({ commit, state }: any, payload: any) {
        const { code } = payload;
        try {
            const res = await axios.post('/api/github/authenticate', {
                code,
                clientId: process.env.VUE_APP_GITHUB_CLIENT_ID,
                clientSecret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
            });
            commit('setGithubAuthentication', { res });
        } catch (e) {
            throw new Error(e);
        }
    },
    async checkUser({ commit, state }: any, payload: any) {
        const token = localStorage.getItem('token');
        if (!token) {
            commit('setLogged', { isLogged: false });
            return;
        }
        try {
            const res = await axios.get('/api/github/check', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            if (res.data) {
                commit('setLogged', { isLogged: true });
            }
        } catch (e) {
            commit('setLogged', { isLogged: false });
        }
    },
};

const mutations = {
    setLogged(state: AuthState, { isLogged }: any) {
        state.logged = isLogged;
    },
    setGithubAuthentication(state: AuthState, { res }: any) {
        const { data } = res;
        if (data) {
            if (data.error) {
                localStorage.removeItem('token');
                return;
            }
            const { access_token: accessToken } = data;
            localStorage.setItem('token', accessToken);
            state.logged = true;
        }
    },
};

export default {
    namespace: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
