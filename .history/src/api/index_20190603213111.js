import fetch from './../axios/fetch'
// 基础路径
const BASE_URL = '/api'

// 请求方法
// 首页轮播
export const getHomeCasual = () => fetch(BASE_URL + '/api/homecasual')

// 首页轮播
export const getHomeNav = () => fetch(BASE_URL + '/api/homenav')

// 首页商品列表
export const getHomeShopList = () => fetch(BASE_URL + '/api/homeshoplist')

// 推荐商品列表
export const getRecommendShopList = params =>
  fetch(BASE_URL + '/api/recommendshoplist', params)

// 发送验证码短信 /api/send_code
export const getPhoneCode = phone =>
  fetch(BASE_URL + '/api/send_code', { phone })

// 手机验证码登录 /api/login_code
export const getLoginCode = (phone, code) =>
  fetch(BASE_URL + '/api/login_code', { phone, code }, 'POST')

// 用户名和密码登录 '/api/login_pwd'
export const getLoginPwd = (name, pwd, captcha) =>
  fetch(BASE_URL + '/api/login_pwd', { name, pwd, captcha }, 'POST')
