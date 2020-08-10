
import Mock from 'mockjs'
Mock.mock('/meun', /post|get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    // 随机数字1-100
    'number|1-100': 100,
    // 返回city数组，每次里面有三个
    'city|3': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
    },
    'list':[
        '服务商代码','航空公司代码','开账周期','预付快设定额','币种','预付快期限','备注'
    ]
  }]
})

Mock.mock('/phone', /post|get/i, (req,res)=> {
    // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      return {
        data: [
            '服务商代码1','航空公司代码1','开账周期1','预付快设定额1','币种1','预付快期限','备注'
        ]
      } 
  })



  const menuList = function(){
    return {
      data: [
        {
          'id':'01',
          'title':'基础信息',
          'subPages':[
            {
              'pathName':'openBank',
              'pageN':'开立账户',
              'id':'1'
            },
            {
              'pathName':'capitalReportAbroad',
              'pageN':'资金报告',
              'id':'2'
            },
            {
              'pathName':'detail',
              'pageN':'航司开账周期',
              'id':'3'
            }
          ]
        },
        {
          'id':'02',
          'title':'数据处理',
          'subPages':[
            {
              'pathName':'file',
              'pageN':'文件上传',
              'id':'1'

            }
          ]
        }
      ]
    } 
  }

  Mock.mock('/Menu', 'get',menuList );