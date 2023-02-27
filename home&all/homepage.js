// //sign in
// function signin() {
//   window.location.href = "";
// }

// search Product => redirect to product page
function search() {
  const search_value = document.querySelector("#search_product").value;
  localStorage.setItem("searchkey", search_value);
  window.location.href = "http://127.0.0.1:5500/home&all/productsPage.html";
  document.querySelector("#search_product").value = "";
}
// product details
// const menuItems = document.querySelectorAll(".product");
// // remove active class from menu items
// const removeActiveItem = () => {
//   menuItems.forEach((item) => {
//     item.classList.remove("active");
//   });
// };

// menuItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     removeActiveItem();
//     item.classList.add("active");
//     if (item.id != "notifications") {
//       document.querySelector(".notifications-popup").style.display = "none";
//     } else {
//       document.querySelector(".notifications-popup").style.display = "block";
//       document.querySelector(
//         "#notifications .notification-count"
//       ).style.display = "none";
//     }
//   });
// });

// // showProductDetails on click

// function showProductDetails() {
//   const product = document.getElementById("product_details-popup");
//   console.log(product);
//   product.style.display === "none"
//     ? (product.style.display = "block")
//     : (product.style.display = "none");
// }

/* go to top button */

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//sticky top search bar
// Get the button
let mySearchBar = document.getElementById("mySearchBar");
let fullmySearchBar = document.getElementById("nav_bottom-search_bar");
let navTop = document.querySelector(".nav_top");

// let fullBar = document.querySelector(".nav_bottom-search_bar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  searchscrollFunction();
  scrollFunction();
};

function searchscrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mySearchBar.style.position = "fixed";
    mySearchBar.style.width = "850px";
    mySearchBar.style.left = "450px";
    mySearchBar.style.top = "5px";

    // mySearchBar.style.background = "red";
    // fullBar.style.width = "100% !important";
    navTop.style.position = "fixed";
    navTop.style.width = "100%";
    // navTop.style.transition = "all 10s ease";
  } else {
    mySearchBar.style.position = "relative";
    mySearchBar.style.width = "100%";
    mySearchBar.style.left = "0";
    mySearchBar.style.top = "0";
    fullmySearchBar.style.width = "850px";
    navTop.style.position = "relative";
    // navTop.style.transition = "all 10s ease";
  }
}

// z-index: 1000; position: fixed; width: 850px; left: 450px

// <!-- style="position: fixed; width: 100%; z-index: 200;" -->

//================= image_cross_button =================
const imgCrossBtn = document.getElementById("image_cross_button");
const imgCrossBtnActive = document.getElementById("image_cross_button-active");

imgCrossBtn.addEventListener("click", function () {
  // imgCrossBtn.style.display = 'none';
  document.querySelector(".ad2").style.display = "none";
  document.querySelector(".ad2_active").style.display = "block";
});
imgCrossBtnActive.addEventListener("click", function () {
  // imgCrossBtn.style.display = 'none';
  document.querySelector(".ad2_active").style.display = "none";
  document.querySelector(".ad2").style.display = "block";
});
