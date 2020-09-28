<template>
    <div class="bug-component row" @click="details">
        <div class="col-2 offset-2">{{this.bugProp.title}}</div>
        <div class="col-2">{{this.bugProp.creator.name}}</div>
        <div v-if="this.bugProp.closed" class="col-2 text-success">Closed</div>
        <div v-if="!this.bugProp.closed" class="col-2 text-danger">Open</div>
        <div class="col-2">{{updated}}</div>
    </div>

</template>

<script>
    export default {
        name: "bug-component",
        data() {
            return {
                bugs: this.$store.state.bugs,
                updated: this.bugProp.updatedAt.split("T")[0].split("-").join("/")
            }
        },
        methods: {
            details() {
                this.$store.dispatch("setActiveBug", this.bugProp)
            }
        },
        props: ["bugProp"],
    };
</script>