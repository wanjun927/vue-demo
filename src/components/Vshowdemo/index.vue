<template>
    <div>
        <h1>条件渲染</h1>
        <transition name="fade" mode="out-in">
        <div v-show="isShow">v-show的条件渲染</div>
        </transition>
        <button @click="changeShow">change</button>
        <div class="list-item">
            <button v-on:click="add">Add</button>
            <button v-on:click="remove">Remove</button>
            <transition-group name="list" tag="p">
                <span v-for="item in list" v-bind:key="item" class="list-item">
                    {{ item }}
                </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nuxtNum: 10
    }
  },
  methods: {
    changeShow: function () {
      this.isShow = !this.isShow
      return this.isShow
    },
    // 随机生成
    randomIndex: function () {
      // Math.random()返回0-1之间的随机数
      // Math.floor() 向下取整
      // Math.ceil() 向上取整
      return Math.floor(Math.random() * this.list.length)
    },
    add: function () {
      this.list.splice(this.randomIndex(), 0, this.nuxtNum++)
    },
    remove: function () {
      this.list.splice(this.randomIndex(), 1)
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>
