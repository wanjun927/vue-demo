<template>
    <div>
        <h1>事件处理</h1>
        <div>
            <p>事件处理方法</p>
            <p>button click {{count}}</p>
            <button @click="addCount">点击</button>
        </div>
        <div>
            <p>在内联语句处理器中访问原始的DOM事件</p>
            <button @click="warn('can not be submit', $event)">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addCount: function () {
      this.count++
    },
    warn: function (message, event) {
      if (event) {
        // 阻止默认事件
        event.preventDefault()
      }
      alert(message)
    }
  }
}
</script>

<style scoped>

</style>
