import Item from "./Models/Item.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  //TODO first thing I want to do is give my data a place to live, and then create a contructor/class for that data 
  money = 0
  items = [new Item("baseball bat", "it hits things", 20.00, 3, "https://shop.slugger.com/media/catalog/product/cache/40/image/1800x/040ec09b1e35df139433887a97daa66f/9/1/9111f5a8905d47e7da8f1eaf62c826668e494f89_WTLW3AMIXA16_0_GENUINE_S3X_MIX_NAT_Front_2019.jpg"), new Item("golf club", "also hits thins just less frequently", 500.00, 1, "https://miro.medium.com/max/900/1*OnVRTxt2MPCwi47pbglOFA.jpeg"), new Item("snowboard", "i hit things while using this", 450.00, 8, "https://images.evo.com/imgp/enlarge/77092/372511/lib-tech-skate-banana-btx-snowboard-2015--front.jpg")]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
