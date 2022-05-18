import router from "../../router/index";
export default {
  namespaced: true,
  state: {
    data_session: {
      username: "",
      password: "",
    },
    token_session: "b674ee59-dbba-4771-96af-8f408cb04b60",
  },
  mutations: {
    logIn: function (state, session_data) {
      state.data_session.username = session_data.username;
      state.data_session.password = session_data.password;
      localStorage.setItem("username", session_data.username);
      localStorage.setItem("password", session_data.password);
    },
    logOut: function (state) {
      state.data_session.username = "";
      state.data_session.password = "";
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    },
  },
  actions: {
    LOG_IN: function ({ commit }, session_data) {
      commit("logIn", session_data);

      let current_view = router.history.current.name;
      if (current_view != "home") {
        router.replace({
          name: "home",
        });
      }
    },
    LOG_OUT: function ({ commit }) {
      commit("logOut");
      router.replace({
        name: "login",
      });
    },
    RECOVERY_SESSION: function ({ dispatch }) {
      try {
        if (
          localStorage.getItem("username") != "null" &&
          localStorage.getItem("password") != "null"
        ) {
          const data_session = {
            username: localStorage.getItem("username"),
            password: localStorage.getItem("password"),
          };
          dispatch("LOG_IN", data_session);
        } else {
          let current_view = router.history.current.name;
          if (current_view != "login") {
            router.replace({
              name: "login",
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    GET_TOKEN_SESSION: function (state) {
      return state.token_session;
    },
    GET_DATA_SESSION: function (state) {
      return state.data_session;
    },
  },
};
