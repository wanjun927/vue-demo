<template>
    <div>
        <h1>s-about</h1>
        {{$store.state.nickname}}
        <button @click="changeName">changeName</button>
        <p>{{$store.getters.fullInfo}}</p>
    </div>
</template>

<script>
export default {
  methods: {
    changeName: function () {
      this.$store.commit('edit', 'Jerry')
    }
  }
}
</script>

<style scoped>

</style>
