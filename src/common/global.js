import http from './http'
import {valid} from './validate.js'

export default{
    install(Vue){
        Vue.prototype.$valid = valid;
        Vue.prototype.$getData = http.get;
        Vue.prototype.$setData = http.set;
    }
}