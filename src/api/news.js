import service from '../utils/request'

export function AddFirstCategory(data) {
  return service.request({
    method: 'post',
    url: '/news/addFirstCategory/',
    data
  })
}

export function GetCategory(data) {
  return service.request({
    method: 'post',
    url: '/news/getCategory/',
    data
  })
}

export function DeleteCategory(data) {
  return service.request({
    method: 'post',
    url: '/news/deleteCategory/',
    data
  })
}