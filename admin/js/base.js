

var featureBtn = document.querySelectorAll('.features__item');
var func = document.querySelectorAll('.features__item-func');
var arrow = document.querySelectorAll('.features__item-main-arrow');

featureBtn.forEach(function(item,index){
     item.addEventListener('click',function(){
          for(var tg of featureBtn){
               tg.classList.remove('features__item--selected');
          }
          for(var tg of func){
               tg.style.display = null;
          }
          for(var tg of arrow){
               tg.classList.remove('arrow-animation');
          };
          item.classList.add('features__item--selected');
          arrow[index].classList.add('arrow-animation');
          func[index-1].style.display = 'block';
          Object.assign(item.style, {
               borderTopRightRadius: '16px',
               borderBottomRightRadius: '16px',
          });
     });
});


var searchBtn = document.querySelector('.header__search-icon');

searchBtn.addEventListener('click',function(){
     document.querySelector('.header__search-input').style.display = 'block';
     document.querySelector('.header__search').classList.add('header__search--active');
});


