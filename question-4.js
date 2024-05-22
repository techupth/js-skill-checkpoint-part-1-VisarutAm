// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
// console.log(inventory[1].name)
let minQuantity = inventory[0].quantity;
// let nameMin = inventory[1].name;
let nameMin = "";

for (let item of inventory) {
  // console.log(item.name)
  // console.log(item.quantity);
  if (item.quantity < minQuantity) {
    minQuantity = item.quantity;
    nameMin = item.name;
  }
}
// console.log(nameMin);
console.log(
  "สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ " +
    nameMin +
    " ซึ่งมี " +
    minQuantity +
    " ชิ้น"
);
// console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameMin} ซึ่งมี ${minQuantity} ชิ้น`)
