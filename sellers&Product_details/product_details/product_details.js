function show(imgID) {
  // console.log(imgID);
  var a = document.querySelector("#print");
  a.innerHTML = "";
  // var p = imgID.innerHTML;
  // console.log(p);
  var b = document.createElement("div");
  b.innerHTML = `
    <img style="width: 280px; height: 270px; margin: 10px;" 
    src="/sellers&Product_details/product_details/img/review_img/${imgID}.jpg" alt="">
    `;
  a.appendChild(b);
  // console.log(a);
  setTimeout(off, 10000);
}
function off() {
  var a = document.querySelector("#print");
  a.innerHTML = "";
}

function change(a) {
  const arr = [
    "/sellers&Product_details/product_details/img/1st_img.png",
    "/sellers&Product_details/product_details/img/i2.png",
    "/sellers&Product_details/product_details/img/i3.png",
    "/sellers&Product_details/product_details/img/1st_img.png",
  ];
  console.log(a);
  console.log(arr[a]);
  // var img = document.getElementById("img1");
  // console.log(img);
  // var bigImg = document.getElementById("product_image");
  // console.log(bigImg);
  // bigImg.innerHTML="";
  document.getElementById("root_img").src = arr[a];
  // b.innerHTML=`
  // <img style="width: 420px; height: 350px;"
  // src="/sellers&Product_details/product_details/img/1st_img.png" alt="">
  // `;
  // bigImg.appendChild(b);
}
