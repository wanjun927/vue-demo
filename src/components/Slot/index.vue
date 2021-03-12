<template>
    <div>
        slot father page
        <Child><p>传递的值</p> </Child>
    </div>
</template>

<script>
import Child from '../Slot/child'
export default {
  name: 'SlotDemo',
  components: {
    Child
  }
}
</script>

<style scoped>

</style>
