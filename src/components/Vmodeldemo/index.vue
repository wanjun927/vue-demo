<template>
    <div>
        <h1>表单输入绑定</h1>
        <input type="text" v-model="message" placeholder="edit">
        <p>{{message}}</p>
        <div>
            <p>单个复选框绑</p>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{checked}}</label>
        </div>
        <div>
            <p>单选按钮</p>
            <div>
                <input type="radio" id="one" value="one" v-model="picked">
                <label for="one">One</label>
            </div>
            <div>
                <input type="radio" id="two" value="two" v-model="picked">
                <label for="two">Two</label>
            </div>
            <span>Picked: {{picked}}</span>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      checked: false,
      picked: ''
    }
  }
}
</script>

<style scoped>

</style>
