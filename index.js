const likeArray = document.querySelectorAll('*');
const array = [].slice.call(likeArray);

// new
const array2 = [...likeArray];


let html = '';
for (let i = 0, len = 10; i < len; i++) {
  html += `<div data-index="${i}"></div>`;
}

// new
const html2 = [...new Array(10)].map((_, i) => `<div data-index="${i}"></div>`).join('');


function foo(a, b) {
  console.log(a, b);
}
function bar(b) {
  foo(1, b);
}

// new
const bar2 = foo.bind(null, 1);


const dataArray = [];
const count = 10;
const array3 = [];
for (let i = 0, len = Math.max(dataArray.length, count); i < len; i++) {
  array3.push(dataArray[i]);
}

// new
const array4 = dataArray.slice(0, count);
dataArray.splice(count);