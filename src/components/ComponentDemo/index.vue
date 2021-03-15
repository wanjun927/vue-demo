<template>
    <div>
        <h1>动态组件</h1>
        <!-- 输入组件 -->
        <input type="radio" id="checked" value="0" v-model="currentIndex">
        <label for="checked">tab0</label>
        <input type="radio" id="checked" value="1" v-model="currentIndex">
        <label for="checked">tab1</label>
        <component :is="currentComponent"></component>
    </div>
</template>

<script>
import Tab0 from '../ComponentDemo/Tab0'
import Tab1 from '../ComponentDemo/Tab1'
export default {
  data () {
    return {
      currentIndex: 1
    }
  },
  components: {
    'tab-0': Tab0,
    'tab-1': Tab1
  },
  computed: {
    currentComponent () { // 动态计算要挂载的组件的组件名
      return `tab-${this.currentIndex}` // "tab-0" 、"tab-1"
    }
  }
}
</script>

<style scoped>

</style>
