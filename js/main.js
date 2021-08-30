
var generaPrezzo = document.getElementById('somma-button');


var price = document.getElementById('your-price');

var userCoupon = document.getElementById("discount");

var prezzoIniziale = 50;

var check = document.getElementsByClassName('somma-check');

var couponList = ['PANINO50', 'SALES90', 'DISCOUNT30']

// Funzione

generaPrezzo.addEventListener('click', function () {
    
    let userBurger = document.getElementById('order-burger').value;

    if (userBurger.length < 1 || userBurger == ' '){
        alert('Devi prima dare un nome al tuo panino!');

    } else {
        for (var i = 0; i < check.length; i++){
            if (check[i].checked){

                prezzoIniziale += parseInt(check[i].value);
            }
            
        
        } if(couponList.includes(userCoupon.value)){
            document.getElementById('your-price').innerHTML =  " $ "  + parseInt(prezzoIniziale - (prezzoIniziale / 100) * 20).toFixed(2);
        } else{
            price.innerHTML =  " $ "  +  prezzoIniziale.toFixed(2);
            userBurger.innerHTML = document.getElementsByClassName("burger-name");
        };
    };
});

