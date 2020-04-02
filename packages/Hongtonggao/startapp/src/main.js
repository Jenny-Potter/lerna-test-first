import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)
const app = new Vue(App)
app.$mount()
// 以下添加相当于原生小程序中app.js的项目配置config
export default {
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '第一个小程序',
      navigationBarTextStyle: 'black'
    }
  }
}
