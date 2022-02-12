//declaration
let plusBtns=Array.from(document.querySelectorAll(".plus-btn"));
let minusBtns=Array.from(document.querySelectorAll(".min-btn"));
let favs=Array.from(document.querySelectorAll(".heart-btn"));
let deleteBtns=Array.from(document.querySelectorAll(".trash-btn"));
let cards=Array.from(document.querySelectorAll(".card"));


//plus

for (let plusBtn of plusBtns){
    plusBtn.addEventListener("click",function(){
    plusBtn.nextElementSibling.innerHTML++;
    total();
    });
}

//minus

for (let minusBtn of minusBtns){
    minusBtn.addEventListener("click",function(){
        if (minusBtn.previousElementSibling.innerHTML>0){
        minusBtn.previousElementSibling.innerHTML--;
        }
        else{
            null;
        }
        total();
    });
}


//likes

for (let fav of favs){
    fav.addEventListener("click",function(){
        if (fav.style.color==="black"){
            fav.style.color="red";
        }
        else{
            fav.style.color="black";
        }
    });
}

//delete

for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        cards[i].remove();
        total();
    });
    
}

//total price

function total() {
    let qte = Array.from(document.querySelectorAll(".quantity"));
    let price = Array.from(document.querySelectorAll(".unit-price"));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s = s + parseFloat(price[i].innerHTML) * parseFloat(qte[i].innerHTML);
    }
    document.getElementById("tprice").innerHTML = s;
}
