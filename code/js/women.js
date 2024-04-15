//preview-box showing
let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");
document
  .querySelectorAll(".women_content4 .product_quick1")
  .forEach((product) => {
    product.onclick = () => {
      previewContainer.style.display = "flex";
      let name = product.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});

//preview-box closes if user clicks on blank space outside the box
previewContainer.addEventListener("click", () => {
  previewBox.forEach((close) => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  });
});

///////////////////////////////////////////////////////
// for add to cart display...
var carts = document.querySelectorAll(".product_cart");
var displayMsg = document.getElementById("cartText");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    displayMsg.classList.add("afterCart");
    setTimeout(() => {
      displayMsg.classList.remove("afterCart");
    }, 4000);
  });
}

// add to cart in preview box
var previewAddCart = document.querySelectorAll(
  ".products-preview .preview .addToCart"
);

for (let i = 0; i < previewAddCart.length; i++) {
  previewAddCart[i].addEventListener("click", () => {
    displayMsg.classList.add("afterCart");
    setTimeout(() => {
      displayMsg.classList.remove("afterCart");
    }, 4000);
  });
}

//buy now clicks -> add to cart page land
var buyNow = document.querySelectorAll(".products-preview .preview .buyNow");
console.log(buyNow);
for (let i = 0; i < buyNow.length; i++) {
  buyNow[i].addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5502/addtocart.html";
  });
}
