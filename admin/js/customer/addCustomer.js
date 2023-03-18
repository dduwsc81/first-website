
var button = document.querySelector('.form__product-btn');

button.addEventListener('click',function(){
     var name = document.querySelector('.form__product-nane-input');
     var checkName = false;
     if(name.value.length > 0 ) {
          checkName = true;
     }
     if(checkName == false){
          var nameValidate = document.querySelector('.form__product-validate');
          nameValidate.innerText = '*  This is a required field';
          name.classList.add('form--failed');
          
     } else {
          var nameValidate = document.querySelector('.form__product-validate');
          nameValidate.innerText = '';
          name.classList.remove('form--failed');
     }
     var Address = document.querySelector('.form__product-price-input');
     var checkAddress = false;
     if(Address.value.length > 0 ) {
          checkAddress = true;
     }
     if(checkAddress == false){
          var AddressValidate = document.querySelector('.form__address-validate');
          AddressValidate.innerText = '*  This is a required field';
          Address.classList.add('form--failed');
     } else {
          var AddressValidate = document.querySelector('.form__address-validate');
          AddressValidate.innerText = '';
          Address.classList.remove('form--failed');
     }
     
     var totalCheck = false;
     if(checkName && checkAddress)  {
          totalCheck = true;
     }
     
     if(!totalCheck){
          var node = document.querySelector('.action__main');
          node.classList.remove('action__main--success');
          node.classList.add('action__main--failed');
          document.querySelector('.action__title-icon').classList.add('fa-times-circle','far');
          document.querySelector('.action__title-text').innerHTML = 'Action Failed';
          node.style.display = 'flex';
          timeout = setTimeout(function(){
               node.style.display = 'none';
          },3000);
     } else{
          var node = document.querySelector('.action__main');
               node.classList.add('action__main--success');
               node.classList.remove('action__main--failed');
               document.querySelector('.action__title-icon').classList.add('fa-check','fas');
               document.querySelector('.action__title-text').innerHTML = 'Action Successful';
               node.style.display = 'flex';
               timeout = setTimeout(function(){
                    node.style.display = 'none';
               },3000);
     }
     
});