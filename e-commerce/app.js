


const allProducts = [
  {
    id: 1,
image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "the doppler",
    price: "$10.00"
  },
  {
    id: 2,
image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: " pentra Reloaded",
    price: "$20.00"
  }, {
    id: 3,
image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: " All pakistani double cheez",
    price: "$30.00"
  }, {
    id: 4,
image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00"
  },
]




function displayCart(){
  let divEl = document.querySelectorAll(".product-list")[0]

for(let i = 0;i < allProducts.length;i++){
  // console.log(allProducts[i]);
  let product = allProducts[i]

  divEl.innerHTML += `
        <div class="product-item">
  <img src="${product.image}" alt="">
   
  <p>${product.productName}</p>
  <h2>${product.price}</h2>
  <button onclick="addToCart(${i})">AddToCart</button>
  </div>
  `
}




}

displayCart()



// let productsItem = localStorage.getItem("product")

// let productsItem = []

let product = []

function addToCart(index){
// product.push(allProducts[index])
 let {id} =  allProducts[index]

 let matchFound = false
 let matchIndex
  product.forEach((item,index)=>{
        if(item.id === id){
         matchFound = true
         matchIndex = index
        }
  })


if(matchFound){
let selectProduct = product[matchIndex]
// console.log(selectProduct);

selectProduct.qty = selectProduct.qty + 1
selectProduct.totalPrice = selectProduct.qty * selectProduct.price.slice(1)
  
}
else{
  let cloneProduct = {...allProducts[index]}
  cloneProduct.qty = 1
  cloneProduct.totalPrice = cloneProduct.qty * cloneProduct.price.slice(1)
  product.push(cloneProduct)
  
}
console.log(product);


let num = 0

 product.map((item)=>{
  return num = num + item.totalPrice
})

console.log(num);

// product.push(num)

// localStorage.setItem("productsItem",JSON.stringify(product))

}



// if(productsItem){
// productsItem = JSON.parse(productsItem)
// }
// else{
//   productsItem = []
// }

// console.log(productsItem);

// productsItem.push(product)


// const slideImages = [
//   "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
//   "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
// ];

// // function displaySlider() {
// //   let slidesContainer = document.querySelectorAll(".slides")[0];

// //   for (let i = 0; i < slideImages.length; i++) {
// //     let img = `<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
// //     slidesContainer.innerHTML += img;
// //   }
// // }

// // displaySlider();

// const products = [
//     {
//         id: "502c305a-997e-4534-97b8-f6f7862f3737",
//         image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
//         productName: "THE Doppler",
//         price: "$10.00",
//       },
//       {
//         id: "67aadbfe-a6d9-4d8d-a436-27c369cff5ff",
//         image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
//         productName: "Pentra RELOADED",
//         price: "$20.00",
//       },
//       {
//         id: "54c3c17e-b3e9-469b-800a-b065d193a6d9",
//         image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
//         productName: "ALL PAKISTANI DOUBLE CHEESE",
//         price: "$50.00",
//       },
//       {
//         id: "e2085e01-f142-4475-8124-e24722cff1d6",
//         image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
//         productName: "Big Bang",
//         price: "$40.00",
//       },
// ]



// function displayItem(){
//   for(let i = 0; i < products.length;i++){
   
//     let divEl = document.querySelectorAll(".product-list")[0]
//     let product = products[i]
//  divEl.innerHTML += `
       
//      <div class="product-item">
//              <img src="${product.image}" alt="">
//             <p>${product.productName}</p>
//             <p>${product.price}</p>
//           <button onclick="addToCart(${i})">addtocart</button>
     
//      </div>


// `

//   }
// }


// displayItem()








// let cart = []
// function addToCart(index){
//   let {id} = products[index]
  
//   let matchFound = false;
//   let targetIndex
//       cart.forEach((item,index)=>{
//     if(item.id === id){
//       matchFound = true
//       targetIndex = index
//     }
//   })


// if(matchFound){
//   let product = cart[targetIndex]
//   product.qty = product.qty + 1
//   product.totalBill = product.qty * product.price.slice(1)
// }

// else{
//   let cloneProduct = {...products[index]}
//   cloneProduct.qty = 1
//   cloneProduct.totalBill = cloneProduct.qty * cloneProduct.price.slice(1)
//   cart.push(cloneProduct)
// }
// console.log(cart);

// let num = 0
// cart.forEach((item)=>{
//      num = num + item.totalBill
// })


// console.log('totalbill',num);

// }
