import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService"

Vue.use(Vuex);



export default new Vuex.Store({
  state: {
    profile: {},
    bugs: [],
    activeBug: {},
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBugs() {
      try {
        let res = await api.get("bugs")
        this.commit("setBugs", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addBug({ dispatch, commit }, newBug) {
      try {
        let res = await api.post("bugs", newBug)
        dispatch("getBugs")
      } catch (error) {
        console.error(error);
      }
    },
    async setActiveBug({ dispatch, commit }, bug) {
      try {
        await commit("setActiveBug", bug)
        router.push({ name: 'BugDetails', params: { bugId: bug.id } })
      } catch (error) {
        console.error(error);
      }
    },
    async setActiveBugById({ dispatch, commit }, bugId) {
      try {
        let res = await api.get("bugs/" + bugId)
        await commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getNotes({ dispatch, commit }, bug) {
      try {
        let res = await api.get("bugs/" + bug + "/notes")
        commit("setNotes", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async addNote({ dispatch, commit }, note) {
      try {
        let res = await api.post("notes", note)
        dispatch("getNotes", note.bug)
      } catch (error) {
        console.error(error);
      }

    },
  }
});
