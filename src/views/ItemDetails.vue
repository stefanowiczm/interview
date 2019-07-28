<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10 text-center">
                So this is the way how Vue routing works, right? Great!
            </div>
            <div class="col-md-2 text-right">
                <a v-on:click="goToMainPage()" class="btn btn-primary">
                    <span style="color:white">Go Back</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemdetails',
    methods: {
        goToMainPage: function() {
            this.$router.push("/items");
        }
    }
}
</script>
