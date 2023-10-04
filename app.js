// 그린아카데미 화장실 옆 자판기 사장님으로부터 애플리케이션 제작 의뢰가 들어왔습니다.
// 나열된 제품의 항목은 언제든지 변할 수 있습니다.
// 나열된 제품 각각은 가격이 언제든지 변할 수 있습니다.
// 사용자가 값을 입력하고, 제품에 해당하는 항목을 선택해야만 “뽑기' 기능이 활성화 됩니다.
// 제품이 나오는(결과)물에 대한 해석과 반환이 존재합니다.

/**
 * todo : 동적으로 자판기 아이템에 해당하는 <li> 태그가 생성되는 기능
 * todo : 만들어진 <li>의 선택 상태 식별(클릭)
 * todo : input 태그 입력값이 있는 상태 식별
 * 
 */

 const test = require('./itemMakerObject.js');

 const work = test(1, "test", 1000, false);
 console.log(work);

 let count = 17;
 let testWork = [];
 for(let i = 0; i < count; i++) {
  testWork[i] = test(i+1, `test-${i}`, 1000, false);
 }

 console.log(testWork);