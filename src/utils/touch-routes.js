
import { router } from '../routes'
export const touchPushRouter = (name,direction) =>{
    let routes = router.options.routes[0].children
    let index=  routes.findIndex(route=>{
        return route.name==name
    })
    console.log(index+direction)
    if(index+direction>=0&&index+direction<routes.length)
    router.push(routes[index+direction])
    //return index
}