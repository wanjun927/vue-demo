import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nickname: 'Simba',
    age: 20,
    gender: '男',
    // list[{id:1,content,'',done:true/false}]
    list: [],
    viewTagsList: []
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
    },
    addTags (state, payload) {
      console.log('add')
      const {route} = payload
      let flag = state.viewTagsList.some(item => item.path === route.path)
      if (!flag) {
        state.viewTagsList.push(
          Object.assign(
            {},
            {
              path: route.path,
              name: route.name
            }
          )
        )
      }
      console.log(state.viewTagsList)
    },
    deleteTags (state, payload) {
      for (const [key, item] of state.viewTagsList.entries()) {
        if (item.name === payload) {
          state.viewTagsList.splice(key, 1)
          console.log(state.viewTagsList)
          const lastestView = state.viewTagsList[state.viewTagsList.length - 1]
          console.log(lastestView)
          if (lastestView) {
            this.$router.push(lastestView)
          } else {
            this.$router.push({name: 'home'})
          }
        }
      }
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
    },
    viewTags (state) {
      return state.viewTagsList
    }
  }
})

export default store
