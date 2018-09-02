import axios from 'axios'
import { resolve } from 'uri-js';
export const getRobotMsg=(msg)=>{
    return new Promise((resolve,reject)=>{
        axios.get(`http://jisuznwd.market.alicloudapi.com/iqa/query?question=${msg}`,{
            headers: {
                'Authorization': 'APPCODE ee87f98d712a42128421c78d72e985a0',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            if(res.data.msg=='ok'){
                resolve(res.data.result.content)
            }else{
                resolve('无法回答您哟')
            }
        })
    })
    
}