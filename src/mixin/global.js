const global = {
  data: () => {
    return {
      TASK_STATUSES: {
        CAUTION: "precaución",
        ALERT: "alerta",
        DANGEROUS: "peligroso",
      },
      USER_STATUSES: {
        ACTIVE: "activo",
        DISABLED: "inactivo",
      },
      VIEWS:{
        DASHBOARD: "dashboard",
        LOGIN: "login",
        CONTACT: "contacts",
        HOME: "home",
        HISTORY: "history",
        PROFILE: "profile"
      }
    };
  },
  methods:{
    replaceRouteWithParams(name, params){
      this.$router.replace({
        name: name,
        params: params,
      });
    },
    replaceRoute(name){
      this.$router.replace({
        name: name,
      });
    }
  }
};

export default global;
