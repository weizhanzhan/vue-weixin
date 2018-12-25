import axios from 'axios'
import { resolve } from 'uri-js';
import {fetch} from '../axios/fetch'
export const getRobotMsg=(msg)=>{
    return new Promise((resolve,reject)=>{
    
        axios.get(`http://www.tuling123.com/openapi/api?key=e2302ce755764f8caa1883323a0f3f2a&info=${msg}`,)
        .then(res=>{
            console.log(res)
            if(res.statusText=='OK'){
                resolve(res.data.text)
            }else{
                resolve('无法回答您哟')
            }
        })
    })
    
}