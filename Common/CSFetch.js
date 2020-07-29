//接口地址
const kHost = 'http://zy.aqnews.com.cn/travelone-query'
//测试
const kTest = 'https://facebook.github.io/react-native/movies.json'

//post请求
export function sendPostRequest(api,params) {
    return fetch(kHost+api, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            //'model': 'cors',
            Authorization: 'Basic aW9zX2FwaV91c2VyOjIyYzlhMTZkN2RhNGM3NDI4NjE0NzAyY2JjYzhjODY1'
        },
        body: JSON.stringify(params)
    }).then((response) => response.json()/*{
            if (response.ok) {
                return response.json()
            } else {
                return response
            }
        }*/)
        .then((responseJson) => {
            console.log(responseJson)
            return result(0,responseJson,null)
        })
        .catch((error) => {
            console.error('error=',error)
            return result(1,null,error)
        })
}

//get请求
export function sendGetRequest(api,params) {
    console.log('params=',params)
    if (params !== {} && params && params !== undefined) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (api.search(/\?/) === -1) {
            api += '?' + paramsArray.join('&')
        } else {
            api += '&' + paramsArray.join('&')
        }
        console.log('api=',api)
    }
    return fetch(kTest+api).then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson)
            return result(0,responseJson,null)
        })
        .catch((error)=>{
            console.log(error)
            return result(1,null,error)
        })
}

//结果处理
function result(status,responseJson,error) {
    return {'status':status,'responseJson':responseJson,'error':error}
}