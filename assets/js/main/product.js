


function DisplayNoti(){
     document.querySelector('.action__main--success').style.display = 'flex';
     const timeout = setTimeout(function(){
          var node = document.querySelector('.action__main--success');
          node.style.display = null;
     },3000);
}

document.querySelector('.product__add-to-cart').addEventListener('click',DisplayNoti);