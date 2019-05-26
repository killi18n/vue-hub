export interface AuthState {
    logged: boolean;
    input: {
        username: string;
        password: string;
    };
}

interface AuthGetters {
    isLogged: any;
}

const initialState: AuthState = {
    logged: false,
    input: {
        username: '',
        password: '',
    },
};

const getters = {
    isLogged: (state: AuthState): boolean => {
        return state.logged;
    },
    getUsername: (state: AuthState): string => {
        return state.input.username;
    },
    getPassword: (state: AuthState): string => {
        return state.input.password;
    },
};

const actions = {
    setLogged({ commit, state }: any, isLogged: boolean) {
        commit('setLogged', isLogged);
    },
    setUsername({ commit, state }: any, payload: any) {
        const { value } = payload.target;
        commit('setUsername', { value });
    },
    setPassword({ commit, state }: any, payload: any) {
        const { value } = payload.target;
        commit('setPassword', { value });
    },
};

const mutations = {
    setLogged(state: AuthState, { isLogged }: any) {
        state.logged = isLogged;
    },
    setUsername(state: AuthState, { value }: any) {
        state.input.username = value;
    },
    setPassword(state: AuthState, { value }: any) {
        state.input.password = value;
    },
};

export default {
    namespace: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
