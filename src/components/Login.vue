<template>
  <span class="navbar-item login" @click="handleLogin">
    <span class="id" :class="isAuthorized ? 'green' : 'red'">{{
      userText
    }}</span>
    <span class="esri-icon-user" :class="isAuthorized ? 'green' : 'red'"></span>
  </span>
</template>
<script>
import { ref, computed, watch } from "vue";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import PortalItem from "@arcgis/core/portal/PortalItem";
import { useStore } from "vuex";
export default {
  setup() {
    const userText = ref("Login");
    const store = useStore();
    let info = new OAuthInfo({
      appId: import.meta.env.VITE_APP_SECRET,
      portalUrl: import.meta.env.VITE_PORTAL_URL,
      popup: true,
    });
    IdentityManager.registerOAuthInfos([info]);

    const isAuthorized = computed(() => store.state.authorized);
    const setAuth = (payload) => store.commit("SETAUTH", payload);
    return { userText, isAuthorized, info, setAuth };
  },
  methods: {
    async authorize() {
      try {
        const appItem = new PortalItem({
          id: import.meta.env.VITE_ITEMID,
          portal: {
            url: import.meta.env.VITE_PORTAL_URL,
          },
        });
        await appItem.load();
        window.addEventListener("beforeunload", this.logout);
        this.setAuth(true);
      } catch (err) {
        console.log("You do not have permission to resource");
        IdentityManager.destroyCredentials();
      }
    },
    async authenticate() {
      const cred = await IdentityManager.getCredential(
        this.info.portalUrl + "/sharing",
        {
          oAuthPopupConfirmation: false,
        }
      );
      this.userText = cred.userId;
      this.esriId = IdentityManager;
      this.authorize();
    },

    logout() {
      IdentityManager.destroyCredentials();
      this.esriId = null;
      this.userText = "Login";
      this.setAuth(false);
    },
    handleLogin() {
      if (!this.esriId) {
        this.authenticate();
      } else {
        this.logout();
      }
    },
  },
};
</script>
<style scoped>
.esri-icon-user {
  font-size: 1.5em;
}
.login:hover {
  cursor: pointer;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
