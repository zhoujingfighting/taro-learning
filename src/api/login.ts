import HTTP from "src/utils/axios";


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