const pname = document.getElementById("productName");
const pimage = document.getElementById("productImage");
const pdetail = document.getElementById("productDetail");
const pprice = document.getElementById("productPrice");
var btn = document.getElementById("addProduct");
const productList = document.getElementById("productList");
const cartProductList = document.getElementById("cartProductList");
var total = document.createElement("span");
var price = 0;
var totalPrice = 0;
var srcData = '';

function show(event) {
    srcData = URL.createObjectURL(event.target.files[0]);
}

btn.onclick = function () {

    var productString = pname.value + " " + pdetail.value + " ";
    price = parseInt(pprice.value);
    pname.value = '';
    pdetail.value = '';
    pprice.value = '';
    pimage.value = '';

    var listItem = document.createElement("li");
    var mySpan = document.createElement("span");
    var PriceSpan = document.createElement("span");
    var buyButton = document.createElement("button");

    var img = document.createElement("img");
  
    img.style.width = "200px";
    img.style.height = "200px";

    img.src = srcData;
    listItem.appendChild(img);



    buyButton.innerHTML = "Add to Cart";

    listItem.appendChild(mySpan);
    listItem.appendChild(PriceSpan);
    listItem.appendChild(buyButton);

    PriceSpan.textContent = price + " rs";
    mySpan.textContent = productString;
    productList.appendChild(listItem);

    buyButton.onclick = function () {

        totalPrice = parseInt(PriceSpan.textContent) + totalPrice;

        var cloneListItem = document.createElement("li");
        var cartSpan = document.createElement("span");
     

        var cartImage = document.createElement("img");
       

        cartImage.style.width = "200px";
        cartImage.style.height = "200px";

        cartImage.src = srcData;
        cloneListItem.appendChild(cartImage);

        cartSpan.textContent = productString + " " + PriceSpan.textContent;
        cloneListItem.appendChild(cartSpan);

        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
      

        cloneListItem.appendChild(removeButton);
        cartProductList.appendChild(cloneListItem);


        total.innerHTML = "total amount " + totalPrice;

        cartProductList.append(total);

        removeButton.onclick = function () {
            totalPrice = totalPrice - parseInt(PriceSpan.textContent);
            total.innerHTML = "total amount " + totalPrice;
            cartProductList.removeChild(cloneListItem);
        }
    }

}




