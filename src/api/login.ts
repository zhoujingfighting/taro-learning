import HTTP from "../utils/axios";


export function phoneLogin( {phone , password} ){
    return HTTP({
        url: '/login/cellphone',
        method: 'get',
        params:{
            phone, 
            password
        }
      });
}


export function capthaLogin( {phone , captcha} ){
    return HTTP({
        url: '/login/cellphone',
        method: 'get',
        params:{
            phone, 
            captcha
        }
      });
}
export function getCaptha( {phone} ){
    return HTTP({
        url: '/captcha/sent',
        method: 'get',
        params:{
            phone : phone
        }
      });
}