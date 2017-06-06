const array = [].slice(likeArray);

// better
const array = [...likeArray];


let html = '';
for (let i = 0, len = 10; i < len; i++) {
  html += `<div data-index="${i}"></div>`;
}

// better
const html = [...new Array(10)].map((_, i) => `<div data-index="${i}"></div>`).join('');