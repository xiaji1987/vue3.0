import service from "@/utils/request";

export function GetSms(data) {
  return service.request({
    method: "post",
    url: "/getSms/",
    data
  })
}

export function getUserRole(data = {}) {
  return service.request({
    method: "post",
    url: "/userRole/",
    data
    // data: data, 左边的data是变量名（key）后台接收的。右边的Data是接收的参数。如果两者都是同名的情况下，可以写成单一个即可（ES6的写法）
  })
}

export function logout(data = {}) {
  return service.request({
    method: 'post',
    url: '/logout/',
    data
  })
}

export function Login(data) {
  return service.request({
    method: "post",
    url: "/login/",
    data: data
  })
}

/**
 * 注册
 */
export function Register(data) {
  return service.request({
    method: "post",
    url: "/register/",
    data
  })
}