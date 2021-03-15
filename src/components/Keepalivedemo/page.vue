<template>
    <div>
        <h1>page1</h1>
        <input type="text">
    </div>
</template>

<script>
export default {
  name: 'page',
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = false
    next()
  }
}
</script>

<style scoped>

</style>
