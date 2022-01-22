var names=['chocolat','cheese','Kda mena','pizza','lben','chekhchoukha','mhalbi','jus'];
var prices=[120,130,140,120,130,160,50,82];
var images=['/p.jpg','/p.jpg','/p.jpg','/p.jpg','/p.jpg','/p.jpg','/p.jpg','/p.jpg'];
var descriptions=['good','guzzel','chuk leziz','bnina','hlowa','bninaa','goood','aywah'];

var products = []
var cart = []
var displayHTML = ""
for( let i=0;i<names.length;i++){
     const name = names[i];
     var price=prices[i];
     var description =descriptions[i];
     var image=images[i];

     var product = {
         id:i,
       name :name,
       price:price,
       description:description,
       image:image,
       quantité:1
     }
products.push(product)

displayHTML += `
<div class="col-4">
<div class="card" style="width: 18rem;">
  <img src=${image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6>${price}</h6>
    <p class="card-text">${description}</p>
    <a onclick="achri(${i})" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
</div>
`
}
document.getElementById('products').innerHTML = displayHTML
function achri (i){
  const currentproduct=products[i];
  var displayHTML=  document.getElementById('cartitems').innerHTML

cart.push(currentproduct)
displayHTML +=`
<tr id='pro${i}'>
<td>${i}</td>
<td>${currentproduct.name}</td>
<td id='quantité${i}'>${currentproduct.quantité}</td>
<td>${currentproduct.price}</td>
<td> <button onclick="removeitem(${currentproduct.id})">delete</button></td>
`
document.getElementById('cartitems').innerHTML=displayHTML

}
function removeitem(id){
  cart=cart.filter(Element => Element.id!= id)
   var currentproduct=products[id]
  if (currentproduct.quantité>1){
     currentproduct.quantité--
    document.getElementById('quantité'+id).innerHTML=currentproduct.quantité
  }else {
      document.getElementById("pro"+id).remove()
       }
  
}
  

