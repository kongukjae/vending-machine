function liElementMaker(tagName, tagContentNode, tagStylingObject) {

  if(typeof(tagStylingObject) === "object") {

    // 태그 동적 생성
    let makeTagName = document.createElement(tagName);
    // 태그 내용 대입
    makeTagName.textContent = tagContentNode;
  
    // 스타일용 객체의 키 만 따로 배열 저장
    let styleArrayKeys = Object.keys(tagStylingObject);
    // 스타일용 객체의 값 만 따로 배열 저장
    let styleArrayValues = Object.values(tagStylingObject);
  
    // 객체의 키의 갯수가 얼마나 될지 모르기 때문에 length 값으로 동적 스타일링
    for(let i = 0; i<styleArrayKeys.length; i++) {
      makeTagName.style[styleArrayKeys[i]] = styleArrayValues[i];
    }

  } else {
    console.error("타입에러")
  }
}

module.exports = liElementMaker;