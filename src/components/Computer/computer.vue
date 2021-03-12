<template>
    <div>
        <h1>计算属性</h1>
        {{message}}
        <p>通过methods方法来实现字符串的反转</p>
        <p>{{reverseMessage()}}</p>
        <p>{{now()}}</p>
        <p>{{showMessage}}</p>
        <p>{{datanow}}</p>
        <div>
            <input type="text" placeholder="your fullname" v-model="fullName">
            <p>{{firstName}}</p>
            <p>{{lastName}}</p>
        </div>
    </div>
</template>

<script>
export default {
/* eslint-disable */
  data () {
      return {
          message:'hello world',
          firstName: '',
          lastName: ''
      }
  },
  methods: {
      reverseMessage: function() {
          return this.message.split('').reverse().join('')
      },
      now: function() {
          return Date.now()
      }
  },
  computed: {
      showMessage: function() {
          return this.message+'1'
      },
      datanow: function() {
          return Date.now()
      },
      fullName: {
          get: function() {
              return this.firstName, this.lastName
          },
          set: function(newValue) {
              var name = newValue.split(',')
              this.firstName = name[0]
              this.lastName = name[name.length-1]
          }
      }
  }
}
</script>

<style scoped>

</style>
