<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Child :propsname="1" @show="showAlert"/>
    <SlotDemo />
    <ul>
      <li>
        <router-link :to="{name: 'Computer'}">
          计算属性
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Bindclass'}">
          Class 与 style 的绑定
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Vshowdemo'}">
          条件渲染
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Vfordemo'}">
          条件渲染
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Vonshow'}">
          事件处理
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Vmodeldemo'}">
          事件处理
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Keepalive'}">
          动态组件
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Todo'}">
          Todo
        </router-link>
      </li>
    </ul>
    <Sabout />
    <Shome />
  </div>
</template>

<script>
import Child from './Child'
import SlotDemo from './Slot/index'
import Sabout from './Storedemo/s-about'
import Shome from './Storedemo/s-home'
export default {
  components: {
    Child,
    SlotDemo,
    Sabout,
    Shome
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showAlert () {
      console.log('hello')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
