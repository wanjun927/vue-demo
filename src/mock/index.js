// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// 使用mockjs模拟数据
// '/api/data'，url
// (res, req)表示生成响应数据的函数
Mock.mock('/api/data', (res, req) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  // 定义一个数组，用来存储生成的数据
  let list = []
  for (let i = 0; i < 10; i++) {
    let listObject = {
      'title': Random.csentence(5, 10), // 随机生成一段中文文本。
      'company': Random.csentence(5, 10),
      'attention_degree': Random.integer(100, 9999), // 返回一个随机的整数。
      'photo': Random.image('114x83', '#00405d', '#FFF', 'Mock.js'),
      'color': Random.color(),
      'name': Random.cname()
    }
    list.push(listObject)
  }
  return {
    data: list
  }
})
