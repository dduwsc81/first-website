
var productItems = document.querySelectorAll('.cart__product-item');

document.querySelector('.cart__title-text-quantity').innerText = productItems.length;

var sale = 0;
var voucher = new Array('THINKPRO2','THINKPRO3','THINKPRO4');
var voucherPrice = new Array(2,3,4);
document.querySelector('.cart__redem-code-btn').addEventListener('click',function(){
     var redemCode = document.getElementById('cart__redem-code-input').value;
     redemCode = redemCode.toUpperCase();
     document.querySelector('.cart__bill-sale-number').innerText = '0';
     var node = document.querySelector('.action__main');
     node.classList.remove('action__main--success');
     node.classList.add('action__main--failed');
     document.querySelector('.action__title-icon').classList.add('fa-times-circle','far');
     document.querySelector('.action__title-text').innerHTML = 'Mã giảm giá không chính xác';
     node.style.display = 'flex';
     timeout = setTimeout(function(){
          node.style.display = 'none';
     },3000);
     var check = false;
     voucher.forEach(function(item,index){
          if(item == redemCode){
               check = true;
               var node = document.querySelector('.action__main');
               node.classList.add('action__main--success');
               node.classList.remove('action__main--failed');
               document.querySelector('.action__title-icon').classList.add('fa-check','fas');
               document.querySelector('.action__title-text').innerHTML = 'Áp dụng thành công!';
               node.style.display = 'flex';
               timeout = setTimeout(function(){
                    node.style.display = 'none';
               },3000);
               sale = voucherPrice[index];
               sale = sale.toFixed(3);
               document.querySelector('.cart__bill-sale-number').innerText = sale + '.000';
          }
     });
     if(check == false){
          sale = 0;
     }
     var allPrice = 0;
     productItems.forEach(function(item){
          allPrice += parseFloat(item.querySelector('.cart__product-total-number').innerHTML);
     });
     allPrice = allPrice.toFixed(3);
     document.querySelector('.cart__bill-price-number').innerHTML = allPrice + '.000';
     var totalPrice = allPrice - sale;
     if(totalPrice<0){
          totalPrice = 0;
     };
     totalPrice = totalPrice.toFixed(3);
     document.querySelector('.cart__bill-total-number').innerHTML = totalPrice + '.000';
});

productItems.forEach(function(item){
     var quantity = parseInt(item.querySelector('.cart__product-quantity-input').value);
     var price = parseFloat(item.querySelector('.cart__product-price-text').innerHTML);
     var btnPlus = item.querySelector('.cart__product-quantity-plus');
     var btnSub = item.querySelector('.cart__product-quantity-subtract');
     var total = price * quantity;
     total = total.toFixed(3);
     item.querySelector('.cart__product-total-number').innerHTML = total + '.000';
     var allPrice = 0;
     productItems.forEach(function(item){
          allPrice += parseFloat(item.querySelector('.cart__product-total-number').innerHTML);
     });
     allPrice = allPrice.toFixed(3);
     document.querySelector('.cart__bill-price-number').innerHTML = allPrice + '.000';
     var totalPrice = allPrice - sale;
     if(totalPrice<0){
          totalPrice = 0;
     };
     totalPrice = totalPrice.toFixed(3);
     document.querySelector('.cart__bill-total-number').innerHTML = totalPrice + '.000';
     btnPlus.addEventListener('click',function(){
          var quantity = parseInt(item.querySelector('.cart__product-quantity-input').value);
          var total = price * (quantity+1);
          if(((quantity<10))){
               quantity ++;
               item.querySelector('.cart__product-quantity-input').value = quantity;
               total = price * quantity;
               total = total.toFixed(3);
               item.querySelector('.cart__product-total-number').innerHTML = total + '.000';
          }
          var allPrice = 0;
          productItems.forEach(function(item){
               allPrice += parseFloat(item.querySelector('.cart__product-total-number').innerHTML);
          });
          allPrice = allPrice.toFixed(3);
          document.querySelector('.cart__bill-price-number').innerHTML = allPrice + '.000';
          var totalPrice = allPrice - sale;
          if(totalPrice<0){
               totalPrice = 0;
          };
          totalPrice = totalPrice.toFixed(3);
          document.querySelector('.cart__bill-total-number').innerHTML = totalPrice + '.000';

     });
     btnSub.addEventListener('click',function(){
          var quantity = parseInt(item.querySelector('.cart__product-quantity-input').value);
          if(quantity>1){
               quantity--;
               item.querySelector('.cart__product-quantity-input').value = quantity;
               var total = price * quantity;
               total = total.toFixed(3);
               item.querySelector('.cart__product-total-number').innerHTML = total + '.000';
          }
          var allPrice = 0;
          productItems.forEach(function(item){
               allPrice += parseFloat(item.querySelector('.cart__product-total-number').innerHTML);
          });
          allPrice = allPrice.toFixed(3);
          document.querySelector('.cart__bill-price-number').innerHTML = allPrice + '.000';
          var totalPrice = allPrice - sale;
          if(totalPrice<0){
               totalPrice = 0;
          };
          totalPrice = totalPrice.toFixed(3);
          document.querySelector('.cart__bill-total-number').innerHTML = totalPrice + '.000';
     });
});


// Order

