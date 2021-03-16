export const myMixin = {
  data () {
    return {
      num: 1111
    }
  },
  created () {
    this.hello()
  },
  methods: {
    hello () {
      console.log('hello')
    },
    // 异步请求
    func_one () {
      new Promise((resolve, reject) => {
        let a = 1
        setTimeout(() => {
          resolve(a)
        }, 500)
      }).then(res => {
        console.log(res, 'res')
        return res
      })
    },
    async func_two () {
      let result = await new Promise((resolve, reject) => {
        let a = 2
        setTimeout(() => {
          resolve(a)
        }, 500)
      })
      return result
    }
  }
}
