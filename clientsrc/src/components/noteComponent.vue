<template>
    <div class="note-component row" @click="details">
        <div class="col-2">{{this.noteProp.creator.name}}</div>
        <div v-if="this.noteProp.closed" class="col-2 text-success">Closed</div>
        <div v-if="!this.noteProp.closed" class="col-2 text-danger">Open</div>
        <div class="col-2">{{updated}}</div>
    </div>

</template>

<script>
    export default {
        name: "note-component",
        data() {
            return {
                updated: this.noteProp.updatedAt.split("T")[0].split("-").join("/")
            }
        },
        methods: {
            details() {
                this.$store.dispatch("setActiveBug", this.noteProp)
            }
        },
        props: ["noteProp"],
    };
</script>