promoInp = document.getElementById("promoCode");
function promo() {
  promoInp.value = "";
}

prc1 = parseInt(document.getElementById("d1").innerHTML);
prc2 = parseInt(document.getElementById("d2").innerHTML);
prc3 = parseInt(document.getElementById("d3").innerHTML);

// For reflecting number of total items
totItems = document.querySelector(".numberOfItems");
changedItm = 0;
function items() {
  itm1 = parseInt(document.getElementById("crtQ1").value);
  itm2 = parseInt(document.getElementById("crtQ2").value);
  itm3 = parseInt(document.getElementById("crtQ3").value);

  totPriceProduct = document.querySelectorAll(".crtPrice");
  ans1 = totPriceProduct[0];
  ans2 = totPriceProduct[1];
  ans3 = totPriceProduct[2];

  changedItm = itm1 + itm2 + itm3;
  totItems.innerHTML = changedItm + " Items";

  x1 = parseInt(itm1*prc1);
  x2 = parseInt(itm2*prc2);
  x3 = parseInt(itm3*prc3);

    ans1.innerHTML = x1;
    ans2.innerHTML = x2;
    ans3.innerHTML = x3;

    subTotal = document.getElementById('subtotal');
    total = x1+x2+x3;
    subTotal.innerHTML = total;

    promoTotal = document.getElementById('finalTotal');
    promoTotal.innerHTML = total;
}
