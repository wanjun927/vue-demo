<template>
    <div>
        <h1>生命周期</h1>
        <input type="text" v-model="message">
        <div v-if="show">
            <p>show something</p>
        </div>
        <button @click="changeShowInfo">点击</button>
    </div>
</template>

<script>
export default {
  name: 'lifecircle',
  data () {
    return {
      message: '1',
      show: false
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this.$el, this.$data)
  },
  created () {
    console.log('created', this.$el, this.$data)
  },
  beforeMount () {
    console.log('beforeMount', this.$el, this.message)
  },
  mounted () {
    console.log('mounted', this.$el, this.$data)
  },
  beforeUpdate () {
    console.log('beforeUpdata', this.$el, this.message)
  },
  updated () {
    console.log('updated', this.$el, this.message)
  },
  beforeDestroy () {
    console.log('beforeDestroy', this.$el, this.message)
  },
  destroyed () {
    console.log('destroyed', this.$el, this.message)
  },
  methods: {
    changeShowInfo () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>

</style>
