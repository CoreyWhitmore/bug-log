<template>
  <div class="home container-fluid">
    <div class="row">
      <form @submit.prevent="addBug">
        <div class="input-group mt-3">
          <input type="text" class="form-control bg-light" v-model="newBug.title" placeholder="Bug Name">
          <input type="text" class="form-control bg-light" v-model="newBug.description" placeholder="Description">
          <div class="input-group-append">
            <button class="btn btn-secondary" type="submit">Submit Bug Report</button>
          </div>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-2 offset-2">Title</div>
      <div class="col-2">Reported By</div>
      <div class="col-2">Status</div>
      <div class="col-2">Last Modified</div>
    </div>
    <bug-component v-for="bug in bugs" :key="bug.id" :bugProp="bug" />
  </div>
</template>

<script>
  import bugComponent from "../components/bugComponent"
  export default {
    name: "home",
    mounted() {
      this.$store.dispatch("getBugs");
    },
    data() {
      return {
        newBug: {

        },
      }
    },
    computed: {
      bugs() {
        return this.$store.state.bugs;
      },
    },
    methods: {
      addBug() {
        if (this.newBug.title && this.newBug.description) {
          this.$store.dispatch("addBug", this.newBug)
        }
      }
    },
    components: {
      bugComponent
    },
  };
</script>