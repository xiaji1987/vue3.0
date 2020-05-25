import store from '@/store/index'

export function buttonPermission (permission) {
  // console.log(permission)
  const button = store.getters['app/buttonPermission']
  // console.log(button.includes(permission))
  return button.includes(permission)
}