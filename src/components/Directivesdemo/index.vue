<template>
    <div>
        <div>
            <h1>自定义指令</h1>
            <p></p>
            <input type="text" v-focus>
        </div>
        <div>
            <h2>多值传参</h2>
            <div v-mydirecteive="{title:'物理学家',content:'内容'}"></div>
        </div>
        <div>
            <h2>给元素添加随机</h2>
            <div v-bgcolor id="random_bgcolor"></div>
            <p>{{showColor}}</p>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      time: 15657453400000,
      showColor: '#FFFFFF'
    }
  },
  directives: {
    focus: {
      inserted: function (el, bingding, vnode) {
        console.log(el, bingding, vnode)
        el.focus()
      }
    },
    mydirecteive: {
      bind: function (el, binding, vnode) {
        el.innerHTML = 'title' + binding.value.title + '<br>' + 'content' + binding.value.content + '<br>'
      }
    },
    bgcolor: {
      bind: function (el, vnode) {
        const color = '#' + Math.random().toString(16).slice(2, 8)
        el.style.backgroundColor = color
        console.log(color + '==============' + vnode)
        // this.showColor = color
      }
    }
  }
}
</script>

<style scoped>
#random_bgcolor {
    width: 100px;
    height: 20px;
}
</style>
