// test.js
//function createCat(x, y) {
//  const cat = document.createElement('img');
//  cat.src = './stopping.gif'; // 초기에 정지 상태 이미지로 설정
//  cat.className = 'cat';
//  const leftContainer = document.getElementById('left-container');
//  leftContainer.appendChild(cat);
//  cat.style.left = x + 'px';
//  cat.style.top = y + 'px';
//  return cat;
//}

// CJS 방식
//module.exports = {createCat};

//module.exports = {
//  createCat: function(x, y) { 
//  const cat = document.createElement('img');
//  cat.src = './stopping.gif'; // 초기에 정지 상태 이미지로 설정
//  cat.className = 'cat';
//  leftContainer.appendChild(cat);
//  cat.style.left = x + 'px';
//  cat.style.top = y + 'px';
//  return cat;
//  }
//}

//const createCat = (x, y) => {
//  const cat = document.createElement('img');
//  cat.src = './stopping.gif'; // 초기에 정지 상태 이미지로 설정
//  cat.className = 'cat';
//  leftContainer.appendChild(cat);
//  cat.style.left = x + 'px';
//  cat.style.top = y + 'px';
//  return cat;
//}

// ESM 방식
// export { createCat };

export function createCat(x, y) {
  const cat = document.createElement('img');
  cat.src = './stopping.gif'; // 초기에 정지 상태 이미지로 설정
  cat.className = 'cat';
  const leftContainer = document.getElementById('left-container');
  leftContainer.appendChild(cat);
  cat.style.left = x + 'px';
  cat.style.top = y + 'px';
  return cat;
}