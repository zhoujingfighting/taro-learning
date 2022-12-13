import HTTP from "../utils/axios";

export function getZhaolei( {id} ){
    return HTTP({
        url: '/artists',
        method: 'get',
        params:{
            id
        }
      });
}