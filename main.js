let time = new Date();
let year = time.getFullYear();
let scroller = document.querySelector(".top-scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  scroller.style.width = `${(top / height) * 100}%`;
});

let date = document.querySelector(".date ");
console.log(date);

date.innerHTML = `©${year} `;
let span = document.createElement("span");
span.appendChild(document.createTextNode("all right reserved"));
date.appendChild(span);


