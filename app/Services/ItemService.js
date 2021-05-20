import { ProxyState } from "../AppState.js";


class ItemService{
  constructor(){
    console.log("hgello from the serviiiice");
  }

  addMoney(){
    // TODO we only ever want the service to be maniuplating our data - we linked the button to the controller then to the service
    ProxyState.money += 1
    console.log(ProxyState.money);
  }

  purchaseItem(itemName){
    let foundItem = ProxyState.items.find(i => i.name == itemName)
    console.log("found item in service",foundItem);
    if(ProxyState.money >= foundItem.price){
      ProxyState.money -= foundItem.price
      foundItem.quantity--
      ProxyState.cart.push(foundItem)
      ProxyState.cart = ProxyState.cart
      ProxyState.items = ProxyState.items
      console.log("cart", ProxyState.cart );
    } else {
      window.alert("you aint got money")
    }
  }

}

export const itemService = new ItemService()