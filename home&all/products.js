// // =================== Products ==================
const products = document.querySelector(".products");
const product = products.querySelectorAll(".product");
const productsearchBar = document.querySelector("#search_product");

// =================== Products search ==================
// my way
//searches products
const searchProduct = () => {
  const val = productsearchBar.value.toLowerCase();
  console.log(val);
  product.forEach((item) => {
    console.log(product);
    let title = item.querySelector("span").textContent.toLowerCase();
    console.log(title);
    if (title.indexOf(val) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};

// searched products
productsearchBar.addEventListener("keyup", searchProduct);
// my way ends

// // tushars way
// productsearchBar.addEventListener("keyup", function () {
//   const val = productsearchBar.value.toLowerCase();
//   console.log(val);
//   product.forEach((item) => {
//     console.log(product);
//     let title = item.querySelector("span").textContent.toLowerCase();
//     console.log(title);
//     if (title.indexOf(val) != -1) {
//       item.style.display = "flex";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });
// // tushars way end

//============== search from another page ==============
const searchValue = localStorage.getItem("searchkey");

if (searchValue != null) {
  const val = searchValue.toLowerCase();
  console.log(val);
  product.forEach((item) => {
    console.log(product);
    let title = item.querySelector("span").textContent.toLowerCase();
    console.log(title);
    if (title.indexOf(val) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
  localStorage.clear();
}
