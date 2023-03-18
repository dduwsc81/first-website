


// Category

function DisplayCategory(){
     document.querySelector('.category').style.display = 'block';
     document.querySelector('.header__category-icon').classList.remove('fa-bars');
     document.querySelector('.header__category-icon').classList.add('fa-times');
     document.querySelector('.header__category').removeEventListener('click',DisplayCategory);
     document.querySelector('.header__category').addEventListener('click',CloseCategory);
}

document.querySelector('.header__category').addEventListener('click',DisplayCategory);

function CloseCategory(){
     document.querySelector('.category').style.display = null;
     document.querySelector('.header__category-icon').classList.remove('fa-times');
     document.querySelector('.header__category-icon').classList.add('fa-bars');
     document.querySelector('.header__category').addEventListener('click',DisplayCategory);
}

// Swap item in category


var categoryItem = document.querySelectorAll('.category__sidebar-item');
categoryItem.forEach( function (value,index){
     value.addEventListener('click',function(){
          var items = document.querySelectorAll('.category__item-main');
          for(var item of items){
               item.classList.remove('category__item-main--selected');
          }
          items[index].classList.add('category__item-main--selected');
          categoryItem.forEach(function(item,index){
               item.classList.remove('category__sidebar-item--selected');
          });
          value.classList.add('category__sidebar-item--selected');
     });
}

);


// Show Account List Feature
function DisplayUserFeature(){
     // console.log(2);
     document.querySelector('.user-features').style.display = 'block';
     // return false;
     document.querySelector('.header__user-account-info').style.display = 'none';
     
}


document.querySelector('.header__account-icon').addEventListener('click', DisplayUserFeature);

// Unshow Account List Feature
function UnDisplayUserFeature(){
     // console.log(1);
     document.querySelector('.user-features').style.display = 'none';
     // return false;
     document.querySelector('.header__user-account-info').style.display = null;
}

document.querySelector('.user-features__header-exit-icon').addEventListener('click',UnDisplayUserFeature);


function DisplayLoginForm(){
     document.querySelector('.modal').style.display = 'block';
     document.querySelector('.user-features').style.display = null;
     document.querySelector('.register__sign-up').style.display = null;
     document.querySelector('.register__log-in').style.display = 'block';
}

document.querySelector('.user-features__register-login-btn').addEventListener('click',DisplayLoginForm);
document.querySelector('.sign-up__header-title--medium').addEventListener('click',DisplayLoginForm);

function DisplaySignUpForm(){
     document.querySelector('.modal').style.display = 'block';
     document.querySelector('.user-features').style.display = null;
     document.querySelector('.register__sign-up').style.display = 'block';
     document.querySelector('.register__log-in').style.display = null;
}

document.querySelector('.user-features__register-signup-des-link').addEventListener('click',DisplaySignUpForm);
document.querySelector('.log-in__header-title--medium').addEventListener('click',DisplaySignUpForm);

function CloseModal(){
     document.querySelector('.modal').style.display = null;
     document.querySelector('.user-features').style.display = null;
     document.querySelector('.register__sign-up').style.display = null;
     document.querySelector('.register__log-in').style.display = null;
}

document.querySelector('.register__close').addEventListener('click',CloseModal);