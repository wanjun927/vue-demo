<template>
    <div>
        <h1>otherPage</h1>
        <input type="text">
    </div>
</template>

<script>
export default {
  name: 'otherPage',
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = false
    next()
  }
}
</script>

<style scoped>

</style>
