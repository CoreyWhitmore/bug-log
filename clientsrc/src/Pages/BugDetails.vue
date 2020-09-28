<template>
    <div class="bug-details container">
        <div v-if="!editMode" class="row align-items-end">
            <h1>{{activeBug.title}}</h1>
            <div v-if="!activeBug.closed && isCreator">
                <p></p><i class="fas fa-pencil-alt" @click="toggleEdit"></i></p>
            </div>
        </div>
        <div v-if="editMode" class="row align-items-end">
            <form @submit.prevent="editBug">
                <div class="input-group mt-3">
                    <input type="text" class="form-control bg-light" v-model="newBug.title" placeholder="Bug Name">
                    <input type="text" class="form-control bg-light" v-model="newBug.description"
                        placeholder="Description">
                    <div class="input-group-append">
                        <button class="btn btn-secondary" type="submit">save</button>
                    </div>
                </div>
            </form>
            <div v-if="!activeBug.closed && isCreator">
                <div class="btn btn-danger" @click="toggleEdit">Cancel</div>
            </div>
        </div>
        <div class="row justify-content-between">
            <p>Reported By: {{activeBug.creatorEmail}}</p>
            <div class="div">
                <div v-if="activeBug.closed" class="col-2 text-success">
                    <h4>Closed</h4>
                </div>
                <div v-if="!activeBug.closed && isCreator" class="col-2 text-danger">
                    <h4>Open</h4>
                </div>
            </div>
        </div>
        <div v-if="!editMode" class="row border border-dark py-2 px-3">
            <p>{{activeBug.description}}</p>
        </div>
        <div class="row align-items-end">
            <div v-if="!activeBug.closed && isCreator" class="col-9 text-success">
                <form @submit.prevent="addNote">
                    <div class="input-group mt-3">
                        <input type="text" class="form-control bg-light" v-model="newNote.content"
                            placeholder="Note Text">
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="submit">Add Note</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-3">
                <div class="btn btn-danger" @click="closeBug">Close Bug</div>
            </div>
        </div>
        <note-component v-for="note in notes" :key="note.id" :noteProp="note" />
    </div>
</template>

<script>
    import noteComponent from "../components/noteComponent"
    export default {
        name: "bug-details",
        mounted() {
            this.$store.dispatch("setActiveBugById", this.$route.params.bugId)
            this.$store.dispatch("getNotes", this.$route.params.bugId)
        },
        data() {
            return {
                newNote: {
                    bug: null,
                    flagged: "pending",
                },
                newBug: this.$store.state.activeBug,
                editMode: false
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
            isCreator() {
                return this.$store.state.activeBug.creatorEmail == this.$store.state.profile.email
            }
        },
        methods: {
            addNote() {
                if (this.newNote.content) {
                    this.$store.dispatch("addNote", this.newNote)
                }
            },
            closeBug() {
                if (confirm("Are you sure you want to close this bug?")) {
                    this.$store.dispatch("closeBug")
                }
            },
            toggleEdit() {
                this.newBug = this.$store.state.activeBug
                this.editMode = !this.editMode
            },
            editBug() {
                this.$store.dispatch("editBug", this.newBug)
                console.log(this.newBug);
                this.toggleEdit()
            }
        },
        components: {
            noteComponent
        },

    };
</script>