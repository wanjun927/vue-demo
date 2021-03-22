<template>
    <div>
        <h1>class 与 style 的绑定</h1>
        <div :class="{active: isActive, 'text-dange': hasError}">对象语法的绑定</div>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">绑定内联样式</div>

        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input
                placeholder="Enter your username"
                key="username-input"
            />
        </template>
        <template v-else>
            <label>Email</label>
            <input
                placeholder="Enter your email address"
                key="email-input"
            />
        </template>
        <button @click="changeType">change</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      activeColor: 'red',
      fontSize: 30,
      loginType: 'username'
    }
  },
  methods: {
    changeType: function () {
      this.loginType === 'username' ? this.loginType = 'email' : this.loginType = 'username'
      return this.loginType
    }
  }
}
</script>

<style scoped>
.active {
    font-size: 20px;
    color: red;
}
</style>
