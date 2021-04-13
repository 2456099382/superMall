import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
    method: "GET"
  });
}

export function getHomeGoods(params) {
  return request({
    url: "/home/data",
    params,
    method: "GET"
  });
}
