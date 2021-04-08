import { request } from "./request";
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
    method: "GET"
  });
}

export function getHomeGoods() {
  return request({
    url: "/home"
  });
}
