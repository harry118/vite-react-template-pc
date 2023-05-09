import axios, {type AxiosRequestConfig, type AxiosResponse} from 'axios'
// import { IApiResponse } from '@/index.d';
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

export interface IApiResponse<T> {
  code: number
  data: T
  extra?: {}
  message: string
  success: boolean
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000 * 30
  //   withCredentials: true,
})

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    config.headers = {
      token: Cookies.get('token') ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjMsImlhdCI6MTY4MTcxMTY0N30.E-o1IhUCTZ1uEvjjpKxoEcFt3LaxADPOpn2z1KX8lOg'
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error)
  }
)
axiosInstance.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  function (response: AxiosResponse) {
    // const { data } = response;
    return response
    // return data;
  },
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  async function (error) {
    const navigate = useNavigate()
    const status = error.status
    switch (status) {
      case 401:
        navigate('/login')
        break

      default:
        break
    }
    return await Promise.reject(error)
  }
)
const request = async <T = unknown>(
  config: AxiosRequestConfig
): Promise<IApiResponse<T>> => {
  try {
    const {data} = await axiosInstance.request<IApiResponse<T>>(config)
    return data
  } catch (error: unknown) {
    const msg = (error as any).message
    // console.log(error)
    return {
      code: -1,
      message: msg,
      data: null as any,
      success: false
    }
  } finally {
  }
}

export default request
