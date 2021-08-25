import { useRequest } from 'ahooks';
import {
  BaseOptions,
  BaseResult,
  OptionsWithFormat,
} from '@ahooksjs/use-request/lib/types';
import queryString from 'query-string';
import { message } from 'antd';
import { Toast } from 'zarm';

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';

type Servers = {
  [key: string]: <T>(
    startParams?: any,
    options?: BaseOptions<any, any> | OptionsWithFormat<any, any, any, any>
  ) => BaseResult<any, any>;
};

class HttpTool {
  servers: Servers;
  // 构造函数构造
  constructor(api: { [key: string]: string }) {
    this.servers = HttpTool.initCore(api);
  }
  // init 逻辑
  static initCore(api: { [key: string]: string }) {
    const _servers: Servers = {};
    Object.keys(api).forEach(item => {
      const [method, url] = api[item].trim().replace(/\s+/g, ',').split(',');

      _servers[item] = this.createRequest(method as Method, url);
    });
    return _servers;
  }
  // 返回一个useRequest 的包装函数，处理了传参，扩展 data 和 params 选项
  static createRequest(method: Method, url: string) {
    return <T>(startParams: any = {}, options = {}) =>
      useRequest<T>(
        (runParams = {}) => {
          const {
            headers: startHeaders,
            params: startQuery,
            data: startData,
            ...restParams
          } = startParams;

          const { headers, params, data, ...rest } = runParams;
          let query = '';
          if (params || startQuery) {
            query = `?${queryString.stringify(params || startQuery, {
              skipEmptyString: true,
              skipNull: true,
            })}`;
          }
          return {
            url: `${url}${query}`,
            method,
            body: data || startData ? JSON.stringify(data || startData) : null,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              Accept: 'application/json',
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              tenantId: localStorage.getItem('tenantId'),
              ...headers,
              ...startHeaders,
            },
            ...rest,
            ...restParams,
          };
        },
        {
          ...options,
          throwOnError: true,
          onSuccess: this.catchFailed,
          onError: error => {
            console.log(error);
          },
        }
      );
  }
  //全局失败提示,根据后端返回的结果处理
  static catchFailed(res) {
    console.log(res);
    if (!res.success) {
      Toast.show({
        content: res.msg,
        stayTime: 3000,
      });
    }
  }
  //根据处理结果向用户提示内容，可以传入一个回调做下一步动作，也可以 handleSuccess(...).then()做下一步动作
  handleSuccess(res: any, content: string, callback?: (...rest) => any) {
    return new Promise<void>((resolve, reject) => {
      if (res.success) {
        Toast.show({
          content: content,
          stayTime: 3000,
        });

        const callbackResult = (callback && callback(res)) || '处理成功';
        resolve(callbackResult);
      }
      reject('请求失败');
    });
  }
}
export default HttpTool;
