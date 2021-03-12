<template>
    <div>
        <h1>列表渲染</h1>
        <ul v-for="(item,index) of obj" :key="index">{{item}}</ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        title: 'how to do list in vue',
        author: 'Jane Doe',
        publicAt: '2020-09-08'
      }
    }
  }
}
</script>

<style scoped>

</style>
