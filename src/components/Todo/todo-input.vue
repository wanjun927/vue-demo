<template>
    <div class="list_input_container">
        <input class="list_input" type="text" v-model="info" @keyup.enter="addList">
        <!-- <p v-show="warnmsg">请填写内容</p> -->
        <button class="add_btn" @click="addList">add</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      info: '',
      warnmsg: 'true'
    }
  },
  methods: {
    addList () {
      if (!this.info) {
        // this.warnmsg = !this.warnmsg
        return
      }
      let id = this.GenNonDuplicateID()
      const obj = {
        id,
        content: this.info
      }
      this.$store.commit('add', obj)
      this.info = ''
    },
    // 随机生成不重复的id
    GenNonDuplicateID () {
      return Date.now()
    }
  }
}
</script>

<style scoped>
.list_input_container {
    height: 35px;
    line-height: 35px;
}
.list_input {
    font-size: 20px;
    outline: none;
    height: 30px;
    width: 400px;
    border-radius: 4px;
    border: 1px solid rgb(196, 196, 196);
}
.add_btn {
    height: 30px;
    width: 100px;
    margin-left: 20px;
    font-size: 20px;
    background-color: #5FB878;
    outline: none;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 4px;
}
</style>
