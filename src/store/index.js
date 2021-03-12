import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nickname: 'Simba',
    age: 20,
    gender: '男',
    // list[{id:1,content,'',done:true/false}]
    list: []
  },
  mutations: {
    edit (state, payload) {
      state.nickname = payload
    },
    add (state, payload) {
      console.log(payload)
      const listitem = {}
      const {id, content} = payload
      listitem.id = id
      listitem.content = content
      listitem.done = false
      state.list.push(listitem)
      console.log(state.list)
    },
    delete (state, payload) {
      console.log(payload)
      state.list.splice(payload, 1)
    },
    complete (state, payload) {
      console.log(payload, state)
      state.list[payload].done = true
    }
  },
  actions: {
    aEdit (context, payload) {
      setTimeout(() => {
        context.commit('edit', payload)
      }, 2000)
    }
  },
  modules: {},
  getters: {
    fullInfo (state, getters) {
      return state.nickname + '年龄' + state.age
    },
    listInfo (state) {
      return state.list
    },
    listLength (state) {
      return state.list.length
    }
  }
})

export default store
