<template>
    <div class="note-component row">
        <div class="col-12">
            <hr>
        </div>
        <div v-if="!editMode" class="col-3">{{this.noteProp.creator.name}}<i class="fas fa-pencil-alt"
                @click="toggleEdit"></i><i class="fa fa-times" aria-hidden="true"></i></div>
        <div v-if="!editMode" class="col-9">{{this.noteProp.content}}</div>
        <form v-if="editMode" @submit.prevent="editNote">
            <div class="input-group mt-3">
                <input type="text" class="form-control bg-light" v-model="newNote.content" placeholder="Note Text">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="submit">Save</button>
                </div>
                <button class="btn btn-secondary" type="button" @click="toggleEdit">cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "note-component",
        data() {
            return {
                updated: this.noteProp.updatedAt.split("T")[0].split("-").join("/"),
                newNote: this.noteProp,
                editMode: false
            }
        },
        computed: {
            isCreator() {
                return this.$store.state.activeBug.creatorEmail == this.$store.state.profile.email
            }
        },
        methods: {
            toggleEdit() {
                this.editMode = !this.editMode
            },
            editNote() {

            }
        },
        props: ["noteProp"],
    };
</script>