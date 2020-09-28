<template>
    <div class="bug-details container">
        <div class="row">
            <h1>{{activeBug.title}}</h1>
        </div>
        <div class="row justify-content-between">
            <p>Reported By: {{activeBug.creatorEmail}}</p>
            <div class="div">
                <div v-if="activeBug.closed" class="col-2 text-success">
                    <h4>Closed</h4>
                </div>
                <div v-if="!activeBug.closed" class="col-2 text-danger">
                    <h4>Open</h4>
                </div>
            </div>
        </div>
        <div class="row border border-dark py-2 px-3">
            <p>{{activeBug.description}}</p>
        </div>
        <div class="row">
            <form @submit.prevent="addNote">
                <div class="input-group mt-3">
                    <input type="text" class="form-control bg-light" v-model="newNote.content" placeholder="Contents">
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="submit">Add Note</button>
                    </div>
                </div>
            </form>
        </div>
        <bug-component v-for="note in notes" :key="note.id" :noteProp="note" />
    </div>
</template>

<script>
    import noteComponent from "../components/noteComponent"
    export default {
        name: "bug-details",
        mounted() {
            this.$store.dispatch("setActiveBugById", this.$route.params.bugId)
            console.log(this.$store.state.notes);
        },
        data() {
            return {
                newNote: {
                    bug: null
                }
            }
        },
        computed: {
            activeBug() {
                this.newNote.bug = this.$store.state.activeBug.id
                return this.$store.state.activeBug;
            },
            notes() {
                return this.$store.state.notes
            },
        },
        methods: {
            addNote() {
                if (this.newNote.content) {
                    this.$store.dispatch("addNote", this.newNote)
                }
            }
        },
        components: {
            noteComponent
        },

    };
</script>