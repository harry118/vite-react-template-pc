import request from '@utils/request'

export interface ILogin {
  token: string
}

export const login = async (params: any) => {
  return await request<ILogin>({
    url: '/apis/auth/login',
    method: 'post',
    data: params
  })
}
