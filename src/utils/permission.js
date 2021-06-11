// 自定义指令的注册
import Vue from 'vue'
import router from '@/router'
Vue.directive('permission', {
  inserted (el, binding) {
    // console.log(el)
    // console.log(binding)
    const action = binding.value.action
    const effect = binding.value.effect
    // 判断 当前的路由所对应的组件中 如何判断用户是否具备action的权限
    // console.log(router.currentRoute.meta, '按钮权限')
    // 给给个路由规则添加meta属性，进而判断这个meta是否有权限
    if (router.currentRoute.meta.indexOf(action) === -1) { // 等于-1说明没找到 不具备权限
      if (effect === 'disabled') {//处于禁用的状态
        el.disabled = true
        // 遵循element ui给元素添加一个类名
        el.classList.add('is-disabled')
      } else {
        el.parentNode.removeChild(el)
      }

      // 第二种场景：是一个添加按钮，如果这个用户有这个权限就显示按钮，没有就删除这个按钮
      // if(router.currentRoute.meta.indexOf(action) === -1){//-1说明没有找到
      //   // 删除这个按钮
      //   el.parentNode.removeChild(el)
      // }
    }
  }
})
