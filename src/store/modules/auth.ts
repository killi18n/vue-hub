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
    setLogged({ commit, state }: any, isLogged: boolean) {
        commit('setLogged', isLogged);
    },
};

const mutations = {
    setLogged(state: AuthState, { isLogged }: any) {
        state.logged = isLogged;
    },
};

export default {
    namespace: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
