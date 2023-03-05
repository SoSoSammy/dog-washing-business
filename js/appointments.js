const productItem1 = document.querySelector(".product-item1");
const productItem2 = document.querySelector(".product-item2");
const productItem3 = document.querySelector(".product-item3");

function changeButtonColor() {
    this.classList.toggle("product-item-active");
}

productItem1.addEventListener("click", changeButtonColor);
productItem2.addEventListener("click", changeButtonColor);
productItem3.addEventListener("click", changeButtonColor);

console.log("hi");