// 接口基地址：http://public-api-v1.aspirantzhang.com
import { request } from 'umi'
/**
 * 获取用户列表
 * @param params 
 */
export const getRemoteList = async params => {
  return request('/api/users', {
    method: 'get',
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * 编辑
 * @param param0 
 */
export const editRecord = async ({ id, value }) => {
  return request(`/api/users/${id}`, {
    method: 'put',
    data: value
  })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log(error);
    });
}

