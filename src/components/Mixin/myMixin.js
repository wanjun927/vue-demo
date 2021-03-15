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
    }
  }
}
