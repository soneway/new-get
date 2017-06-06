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