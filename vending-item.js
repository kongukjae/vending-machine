function vendingItem(obj) {

  if(typeof(obj) === "object") {
    return `
    <li>
    <div>
      <div>${obj.emoji}</div>
      <div>
        <h1>${obj.order}</h1>
        <h2>${obj.price}</h2>
      </div>
    </div>
  </li>
    `;
  } else {
    console.error("객체타입의 매개변수를 인자로 받습니다. ");
  }

}