<template>
    <div>
        <h1>mixin中的num{{num}}</h1>
    </div>
</template>

<script>
import {myMixin} from './myMixin'
export default {
  name: 'myMixin',
  mixins: [myMixin],
  created () {
    this.num++
  },
  mounted () {
    console.log(this.func_one(), 'template_func_one')
    this.func_two().then(res => {
      console.log(res, 'template_func_two')
    })
  }
}
</script>

<style scoped>

</style>
