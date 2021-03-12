<template>
    <div class="list_container">
        <h1>TodoList</h1>
        <todo-input class="todo_input"/>
        <todo-list />
        <div v-if="showList" class="remind">。。。。。。。。。。。。。。。。。</div>
    </div>
</template>

<script>
import TodoInput from './todo-input.vue'
import TodoList from './todo-list.vue'
export default {
  components: {
    TodoInput,
    TodoList
  },
  computed: {
    showList: function () {
      if (this.$store.getters.listLength === 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    showListLength () {
      return this.$store.getters.listLength
    }
  }
}
</script>

<style scoped>
.list_container {
    min-width: 600px;
    /* text-align: center; */
    background:#eeeeee;
    min-height: 200px;
    margin: 0 auto;
    padding: 20px;
}
h1 {
    text-align: center;
}
.todo_input {
    text-align: center;
}
.remind {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
</style>
