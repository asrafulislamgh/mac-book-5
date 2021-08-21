// function for Getting id
function getValueById(idName) {
  const valueOfId = document.getElementById(idName);
  return valueOfId;
}

// Calculating the total value
function getTotal() {
  let bestPrice = 1299;
  let memoryValue = getValueById("extra-memory");
  let storageValue = getValueById("extra-storage");
  let deliveryCharge = getValueById("delivery-charge");
  let totalPrice = getValueById("total-price");
  let grandTotal = getValueById("grand-total");

  const totalPriceAmount =
    parseInt(memoryValue.innerText) +
    parseInt(storageValue.innerText) +
    parseInt(deliveryCharge.innerText) +
    parseInt(bestPrice);
  totalPrice.innerText = totalPriceAmount;
  grandTotal.innerText = totalPriceAmount;
}
function calculation(idName, price) {
  let idValue = document.getElementById(idName);
  idValue.innerText = price;
  getTotal();
}

// Promo code calculation
function addPromoCode() {
  let grandTotaValue = getValueById("grand-total");
  let promoBtn = getValueById("promo-btn");
  let promoInput = getValueById("promo-code");
  let promoNotify = getValueById("promo-notify");
  if (promoInput.value.toLowerCase() == "stevekaku") {
    const dicountedValue =
      parseFloat(grandTotaValue.innerText) -
      parseFloat(grandTotaValue.innerText) * 0.8;
    grandTotaValue.innerText = (
      parseFloat(grandTotaValue.innerText) * 0.8
    ).toFixed(2);
    promoNotify.innerText = "You are discounted $" + dicountedValue.toFixed(2);
    promoInput.value = "";
    promoBtn.setAttribute("disabled", true);
  } else {
    promoNotify.innerText = "Invalid Promo Code!";
    promoInput.value = "";
  }
}

// Event listener for all the clickable button
document.getElementById("memory-8gb").addEventListener("click", function () {
  calculation("extra-memory", 0);
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  calculation("extra-memory", 180);
});
document.getElementById("storage-256gb").addEventListener("click", function () {
  calculation("extra-storage", 0);
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  calculation("extra-storage", 100);
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  calculation("extra-storage", 180);
});
document.getElementById("free-delivery").addEventListener("click", function () {
  calculation("delivery-charge", 0);
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  calculation("delivery-charge", 20);
});
document.getElementById("promo-btn").addEventListener("click", function () {
  addPromoCode();
});
