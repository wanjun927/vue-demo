<template>
    <div>
        <h1>Mockjs</h1>
        <button @click="showMockInfo">点击</button>
        <ul>
          <li v-for="item in data" :key="item.title">
            <span>{{item.title}}</span>
            <span>{{item.company}}</span>
            <span>{{item.attention_degree}}</span>
            <span>{{item.photo}}</span>
            <p :style="{color: item.color}">随机颜色</p>
            <p>{{item.name}}</p>
          </li>
        </ul>
        <button @click="showUserInfo">点击</button>
        <ul>
          <li v-for="(item, index) in userData" :key="index">
            <span>{{item.id}}</span>
            <span>{{item.userName}}</span><span>{{item.addr}}</span>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: [],
      userData: []
    }
  },
  methods: {
    showMockInfo () {
      axios.get('/api/data').then(res => { // get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
        this.data = res.data.data
        console.log(res.data) // 在console中看到数据
      }).catch(res => {
        alert('wrong')
      })
    },
    showUserInfo () {
      axios.get('/api/user').then(res => {
        this.userData = res.data.data
        console.log(res.data)
      }).catch(res => {
        alert('wrong')
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from)
    next()
  },
  beforeRouterLeave (to, from, next) {
    console.log(to, from, this.data)
  }
}
</script>
