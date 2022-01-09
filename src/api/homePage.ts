import HTTP from "../utils/axios";


export function getBanner() {
    return HTTP({
        url: '/banner',
        method: 'get'
    });
}