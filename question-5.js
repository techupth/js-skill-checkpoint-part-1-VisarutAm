// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

let totalPrice = 0;

function calculateTotalPrice(products, promotionCode) {
  for (let item of products) {
    //   console.log(item.price)
    // console.log(item.quantity)
    totalPrice = totalPrice + item.price * item.quantity;
  }

  if (promotionCode === "SALE20") {
    return (totalPrice = totalPrice * 0.8);
  } else if (promotionCode === "SALE50") {
    return (totalPrice = totalPrice * 0.5);
  } else {
    return totalPrice;
  }
}
console.log(calculateTotalPrice(products, promotionCode));

// ไว้กลับมาลองทำ switch-case
