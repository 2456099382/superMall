import { request } from "./request";

export function getDetailData(iid) {
  // console.log("get");
  const result = request({
    url: "/detail",
    params: {
      iid
    }
  });
  return result;
}

export function getRecommend() {
  const result = request({
    url: "/recommend"
  });
  return result;
}

export class Goods {
  constructor(columns, itemInfo, service) {
    this.title = itemInfo.title;
    this.discount = itemInfo.discountDesc;
    this.oldPrice = itemInfo.lowPrice;
    this.newPrice = itemInfo.lowNowPrice;
    this.columns = columns;
    this.service = service;
    this.desc = itemInfo.desc;
    this.iid = itemInfo.iid;
  }
}

export class Business {
  constructor(shopInfo, score) {
    this.count = shopInfo.cSells;
    this.allGoods = shopInfo.cGoods;
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.score = score;
  }
}
export class CommentInfo {
  constructor(rate) {
    this.content = rate.content;
    this.user = rate.user;
    this.style = rate.style;
    this.time = rate.created;
    this.images = rate.images;
  }
}
