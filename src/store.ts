import { createStore } from 'vuex';

const store = createStore({
    // namespaced: true,
    state() {
        return {
            // background color
            bgColor: '65, 184, 131',
            // dark mode
            darkMode: false,
            // array of objects which will be insert the data from the server (downloaded from firebase)
            workExperience: ""
        }
    },
    getters: {
        bgColor(state:any) {
            return state.bgColor;
        },
        darkMode(state) {
            return state.darkMode;
        },
        workExperience(state) {
            return state.workExperience;
        }
    },
    mutations: {
        changeBgColor(state, payload) {
            state.bgColor = payload;
        },
        setDarkMode(state, payload) {
            state.darkMode = payload;
        },
        workExperience(state, payload) {
            state.workExperience = payload;
        }
    },
    actions: {
        changeBgColor(context, color) {
            localStorage.setItem("bgColor", color);
            context.commit("changeBgColor", color);
        },
        setDarkMode(context, dark) {
            localStorage.setItem("darkMode", JSON.stringify(dark));
            context.commit("setDarkMode", dark);
        },
        workExperience(context, work) {
            context.commit("workExperience", work);
        }
    },
}
);
export default store;