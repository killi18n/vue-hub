import axios from 'axios';

export interface AuthState {
    logged: boolean;
}

interface AuthGetters {
    isLogged: any;
}

const initialState: AuthState = {
    logged: false,
};

const getters = {
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
            const res = await axios.post(
                'https://github.com/login/oauth/access_token',
                {
                    code,
                    client_id: process.env.VUE_APP_GITHUB_CLIENT_ID,
                    client_secret: process.env.VUE_APP_GITHUB_CLIENT_SECRET,
                }
            );
            commit('setGithubAuthentication', { res });
        } catch (e) {
            throw new Error(e);
        }
    },
};

const mutations = {
    setLogged(state: AuthState, { isLogged }: any) {
        state.logged = isLogged;
    },
    setGithubAuthentication(state: AuthState, { res }: any) {
        console.log(res);
    },
};

export default {
    namespace: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
