<template>
    <div class="note-component row">
        <div class="col-12">
            <hr>
        </div>
        <div class="col-3">{{this.noteProp.creator.name}}</div>
        <div class="col-9">{{this.noteProp.content}}</div>
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

        },
        props: ["noteProp"],
    };
</script>