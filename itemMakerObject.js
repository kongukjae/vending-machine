// const dummyItems = [
//   {
//     order:0,
//     emoji: "",
//     price: 1000,
//   }
// ]

/**
 * 
 * ? 1. order : 배열의 크기만큼
 * ? 2. emoji : 랜덤으로 결정
 * ? 3. price : 랜덤으로 결정
 * ? 4. isClick : 기본값 false
 * 
 */

function vendingMachineItemMakerObject(order, emoji, price, clickState) {
  return {
    order:order,
    emoji:emoji,
    price:price,
    isClick:clickState,
  }
}

module.exports = vendingMachineItemMakerObject;