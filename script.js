function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  value > 10 ? (value = 10) : "";
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  value--;
  value < 1 ? (value = 1) : "";
  document.getElementById("number").value = value;
}

const products = document.querySelector(".products-all");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".browse-products");

products.addEventListener("click", function (e) {
  const id = e.target.dataset.id;  
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
