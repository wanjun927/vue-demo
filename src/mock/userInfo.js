// 引入 mockjs
const Mock = require('mockjs')
// 使用 mockjs 模拟数据
Mock.mock('/api/user', (res, req) => {
  let list = []
  for (let i = 0; i < 10; i++) {
    let result = Mock.mock({
      'id|+1': 1,
      'userName': Mock.mock('@cname'),
      'age|18-45': 1,
      'addr': Mock.mock('@city(true)')
    })
    list.push(result)
  }
  return {
    data: list
  }
})
