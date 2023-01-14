// service统一出口
import Request from './request'

import localCache from '@/utils/cache'

const request = new Request({
  baseURL: '',
  timeout: 50000,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token')
      // console.log(token)

      if (token) {
        config.headers!.Authorization = `${token}`
      }
      return config
    },
    requestInterceptorCatch: (err: any) => {
      return err
    },
    responseInterceptor: (res: any) => {
      return res
    },
    responseInterceptorCatch: (err: any) => {
      return err
    }
  }
})

export { Request, request }
