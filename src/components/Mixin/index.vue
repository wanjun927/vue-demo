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
  }
}
</script>

<style scoped>

</style>
