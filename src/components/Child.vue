<template>
    <div>
        {{propsname}}
        <button @click="showFather">show</button>
        <!-- <p>在父组件上插入子组件，然后在子组件上添加自定义</p> -->
    </div>
</template>

<script>
export default {
  props: [ 'propsname' ],
  methods: {
    showFather () {
      this.$emit('show')
    }
  }
}
</script>

<style scoped>

</style>
