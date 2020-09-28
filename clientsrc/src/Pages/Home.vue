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
    <div v-if="!filterMode">
      <div class="btn btn-primary" @click="toggleFilter">Filter Bugs</div>
    </div>
    <div v-if="filterMode == 'no filter'">
      <div class="btn btn-primary" @click="toggleFilter">Filter: All</div>
    </div>
    <div v-if="filterMode == 'open'">
      <div class="btn btn-primary" @click="toggleFilter">Filter: Open</div>
    </div>
    <div v-if="filterMode == 'closed'">
      <div class="btn btn-primary" @click="toggleFilter">Filter: Closed</div>
    </div>
    <div class="row">
      <div class="col-2 offset-2">Title</div>
      <div class="col-2">Reported By</div>
      <div class="col-2">Status</div>
      <div class="col-2">Last Modified</div>
    </div>
    <div v-if="!filterMode">
      <bug-component v-for="bug in bugs" :key="bug.id" :bugProp="bug" />
    </div>
    <bug-component v-for="bug in filteredBugs" :key="bug.id" :bugProp="bug" />
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
        filterMode: "",
        filteredBugs: this.filterBugs()
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
      },
      toggleFilter() {
        if (this.filterMode == "no filter") {
          this.filterMode = "open"
        }
        else if (this.filterMode == "open") {
          this.filterMode = "closed"
        }
        else if (this.filterMode == "closed") {
          this.filterMode = "no filter"
        }
        this.filteredBugs = this.filterBugs()
      },
      filterBugs() {
        if (!this.filterMode) {
          this.filterMode = "no filter"
        }
        if (this.filterMode == "no filter") {
          return this.bugs
        }
        else if (this.filterMode == "open") {
          return this.bugs.filter(b => b.closed == false)
        }
        else if (this.filterMode == "closed") {
          return this.bugs.filter(b => b.closed == true)
        }
      }
    },
    components: {
      bugComponent
    },
  };
</script>