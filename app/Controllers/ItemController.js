import { ProxyState } from "../AppState.js";
import { itemService } from "../Services/ItemService.js";

function drawMoney(){
  document.getElementById('money').innerText = ProxyState.money
}

function drawItems(){
  let template = ''
  ProxyState.items.forEach(i => template +=  /*html*/ `
  <div className="col-3 ">
   <div class="card" style="width: 18rem;">
      <div class="card-body">
         <h5 class="card-title">${i.name}</h5>
         <p class="card-text">${i.description}</p>
         <p class="card-text">Price: $${i.price}</p>
         <p class="card-text">Quantity: ${i.quantity}</p>
         <img src="${i.img}" alt="" />
      </div>
      <button class="btn btn-danger" onclick="app.itemController.purchaseItem('${i.name}')">Purchase Me plz</button>
    </div>
  </div>
  ` )
  document.getElementById('items').innerHTML = template
}

function drawCart(){
  let template = ''
  ProxyState.cart.forEach(c => template +=  /*html*/ `
  <div className="col-3 ">
   <div class="card" style="width: 18rem;">
      <div class="card-body">
         <h5 class="card-title">${c.name}</h5>
         <p class="card-text">${c.description}</p>
         <p class="card-text">Price: $${c.price}</p>
         <p class="card-text">Quantity: ${ProxyState.cart.length}</p>
         <img src="${c.img}" alt="" />
      </div>
      <button class="btn btn-danger" onclick="app.itemController.purchaseItem('${c.name}')">Purchase Me plz</button>
    </div>
  </div>
  ` )
  document.getElementById('cart').innerHTML = template
}


export default class ItemController{
  // TODO once we get something on the page with html, the next thing to start setting up is the controller. Get this linked up FIRST. 
  constructor(){
    console.log("hello form the item controller");
    // Proxystate.on watches whatever we put in the string (that exists in appstate), and will run whatever function we put next to it when the value changes
    ProxyState.on("money", drawMoney)
    ProxyState.on("items", drawItems)
    ProxyState.on("cart", drawCart)
    drawMoney()
    drawItems()
  }

  // TODO once controller is linked, lets start building the path from the html button, down to our service so we can start manipulating data
  addMoney(){
    itemService.addMoney()
  }

  purchaseItem(itemName){
    // TODO alwasy console log the data to make sure it looks how you expect
    console.log(itemName);
    itemService.purchaseItem(itemName)
  } 

}