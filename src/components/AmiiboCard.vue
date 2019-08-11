<template>
    <div class="card">
        <img v-if="image !== undefined" :src="amiibo.image">
        
        <h4> {{name}} </h4>
        
    </div>
</template>

<script>
export default {
    name: 'card',
    props: ["name", "image"],
    data () {
        return {
        }
    }
}
</script>