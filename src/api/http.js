import axios from 'axios'
import { Message } from "element-ui";
import nprogress from "nprogress";
import "nprogress/nprogress.css";


let config = {
    timeout: 10000       //设置最大请求时间
}
const _axios = axios.create(config)

/* 请求拦截器（请求之前的操作） */
_axios.interceptors.request.use(
    config => {
        let token = ''
        if (window.localStorage.getItem('tokenStr')) {
            token = window.localStorage.getItem('tokenStr');
        } else if (window.sessionStorage.getItem('tokenStr')) {
            token = window.sessionStorage.getItem('tokenStr');
        }
        config.headers.Authorization = token;  //添加token
        nprogress.start()
        return config;
    },
    err => console.log(err)
);

/* 请求之后的操作 */
_axios.interceptors.response.use(
    res => {
        nprogress.done()
        //这里用于处理返回的结果，比如如果是返回401无权限，可能会是跳回到登录页的操作，结合自己的业务逻辑写
        if (res.data.code == 200) {
            if (res.data.message !== '') {
                Message.success({ message: res.data.message });
            }
        } else {
            if (res.data.code == 500216) {
                localStorage.removeItem('tokenStr')
                sessionStorage.removeItem('tokenStr')
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('isLogged')
            }
            Message.error({ message: res.data.message });
        }
        return res;
    },
    err => {
        if (err) {
            Message.error({ message: "网络连接失败" });
        }
    }
);

//封装post,get方法
const http = {
    get(url = '', params = {}) {
        return new Promise((resolve, reject) => {
            _axios({
                url,
                params,
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                method: 'GET'
            }).then(res => {
                resolve(res.data)
                return res
            }).catch(error => {
                reject(error)
            })
        })
    },
    post(url = '', params = {}) {
        return new Promise((resolve, reject) => {
            _axios({
                url,
                data: params,
                headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                method: 'POST'
            }).then(res => {
                resolve(res.data)
                return res
            }).catch(error => {
                reject(error)
            })
        })
    }
}


export default http