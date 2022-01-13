import HTTP from "../utils/axios";


export function getBanner() {
    return HTTP({
        url: '/banner',
        method: 'get'
    });
}
export function getRecommend() {
    return HTTP({
        url: '/recommend/resource',
        method: 'get'
    });
}