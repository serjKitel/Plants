function selfRating() {
  console.log('1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\n\nСумма баллов: 125')
}

selfRating();
// бургер
const navbarMenu = document.querySelector('.navbar');
const showMenu = document.querySelector('.header__navigation');
const navLink = document.querySelectorAll('.nav__link');
const hideBar = document.querySelector('.hide__navigation');
// конец бурегер

// акардеон
const bacicsBtn = document.querySelector('.basics__btn');
const bacicsContent = document.querySelector('.basics__content');
const accordionBlockBasic = document.querySelector('.basic__block');

const standardBtn = document.querySelector('.standard__btn');
const standardContent = document.querySelector('.standard__content');
const accordionBlockStandard = document.querySelector('.standard__block');

const proBtn = document.querySelector('.pro__btn');
const proContent = document.querySelector('.pro__content');
const accordionBlockPro = document.querySelector('.pro__block');

const arrowBlock = document.querySelector('.arrow__block')
const arrowBlock2 = document.querySelector('.arrow__block2')
const arrowBlock3 = document.querySelector('.arrow__block3')
const arrow = document.querySelector('.arrow')
const arrow2 = document.querySelector('.arrow2')
const arrow3 = document.querySelector('.arrow3')

const accordionLine1 = document.querySelector('.accordion__line1')
const accordionLine2 = document.querySelector('.accordion__line2')
const accordionLine3 = document.querySelector('.accordion__line3')
// конец акардеон

const btnGardens = document.querySelector('.btn__gardens');
const btnLawn = document.querySelector('.btn__lawn');
const btnPlanting = document.querySelector('.btn__planting');
const gardens = document.querySelectorAll('.garden__care');
const planting = document.querySelectorAll('.planting');
const lawn = document.querySelectorAll('.lawn__care');

const buttonsService = document.querySelectorAll('.buttons__block');
const serviceBtn = document.querySelectorAll('.btn__service');
const servicesItem = document.querySelectorAll('.services__item');


console.log(serviceBtn)

// Start добавление JS blur


serviceBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    btn.classList.toggle('btn__active');
  });
})

serviceBtn.forEach(btn => {
  btn.addEventListener('click',  function() {
    if (btnGardens.classList.contains('btn__active') && btnLawn.classList.contains ('btn__active')) {

      // 
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.add('blur');
      }
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.remove('blur');
      }


      btnPlanting.classList.remove('btn__active');
      btnPlanting.disabled = true;
    } else if (btnGardens.classList.contains('btn__active') && btnPlanting.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.add('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.remove('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.remove('blur');
      }

      btnLawn.classList.contains('btn__active');
      btnLawn.disabled = true;
    }
    else if (btnLawn.classList.contains('btn__active') && btnPlanting.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.remove('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.remove('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.add('blur');
      }



      btnGardens.classList.remove('btn__active');
      btnGardens.disabled = true;
    }
    //
    else if (!btnLawn.classList.contains('btn__active') && !btnPlanting.classList.contains('btn__active') && !btnGardens.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.remove('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.remove('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.remove('blur');
      }
      btnLawn.disabled = false;
      btnGardens.disabled = false;
      btnPlanting.disabled = false;

    }
    else if (btnGardens.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.add('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.add('blur');
      }
      


      btnLawn.disabled = false;
      btnPlanting.disabled = false;
    }
    else if (btnLawn.classList.contains('btn__active')) {

      //
      
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.add('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.add('blur');
      }


      btnGardens.disabled = false;
      btnPlanting.disabled = false;
    }
    else if (btnPlanting.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.add('blur');
      }
      
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.add('blur');
      }
      btnGardens.disabled = false;
      btnLawn.disabled = false;
    
    



    }
    if (btnLawn.classList.contains('btn__active') && btnGardens.classList.contains ('btn__active')) {

      // 
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.add('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.remove('blur');
      }


      btnPlanting.classList.remove('btn__active');
      btnPlanting.disabled = true;
    }
    else if (btnLawn.classList.contains('btn__active') && btnPlanting.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.remove('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.remove('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.add('blur');
      }



      
    }
    else if (btnGardens.classList.contains('btn__active') && btnPlanting.classList.contains('btn__active')) {

      //
      for (let i = 0; i < lawn.length; i++) {
        lawn[i].classList.add('blur');
      }
      for (let i = 0; i < planting.length; i++) {
        planting[i].classList.remove('blur');
      }
      for (let i = 0; i < gardens.length; i++) {
        gardens[i].classList.remove('blur');
      }



      btnLawn.classList.remove('btn__active');
      btnLawn.disabled = true;
    }
  });
})








// End добавление JS

// акардеон
bacicsBtn.addEventListener('click', function () {
  arrowBlock.classList.toggle('active');
  accordionLine1.classList.toggle('active');
  accordionLine2.classList.remove('active');
  accordionLine3.classList.remove('active');
  arrow.classList.toggle('active');
  arrow2.classList.remove('active');
  arrow3.classList.remove('active');
  arrowBlock2.classList.remove('active');
  arrowBlock3.classList.remove('active');
  bacicsContent.classList.toggle('active');
  accordionBlockBasic.classList.toggle('active');
  standardContent.classList.remove('active');
  accordionBlockStandard.classList.remove('active');
  proContent.classList.remove('active');
  accordionBlockPro.classList.remove('active');
})

standardBtn.addEventListener('click', function () {
  arrowBlock2.classList.toggle('active');
  accordionLine2.classList.toggle('active');
  accordionLine1.classList.remove('active');
  accordionLine3.classList.remove('active');
  arrow2.classList.toggle('active');
  arrow.classList.remove('active');
  arrow3.classList.remove('active');
  arrowBlock.classList.remove('active');
  arrowBlock3.classList.remove('active');
  standardContent.classList.toggle('active');
  accordionBlockStandard.classList.toggle('active');
  bacicsContent.classList.remove('active');
  accordionBlockBasic.classList.remove('active');
  proContent.classList.remove('active');
  accordionBlockPro.classList.remove('active');
})

proBtn.addEventListener('click', function () {
  accordionLine3.classList.toggle('active');
  accordionLine1.classList.remove('active');
  accordionLine2.classList.remove('active');
  arrowBlock3.classList.toggle('active');
  arrow3.classList.toggle('active');
  arrow.classList.remove('active');
  arrow2.classList.remove('active');
  arrowBlock.classList.remove('active');
  arrowBlock2.classList.remove('active');
  proContent.classList.toggle('active');
  accordionBlockPro.classList.toggle('active');
  bacicsContent.classList.remove('active');
  accordionBlockBasic.classList.remove('active');
  standardContent.classList.remove('active');
  accordionBlockStandard.classList.remove('active');
})
// акардеон




navbarMenu.addEventListener('click', function () {
  navbarMenu.classList.toggle('active'),
    showMenu.classList.toggle('active');
})


navLink.forEach(n => n.addEventListener('click', closeMenu));


window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__navigation') && !target.closest('.navbar')) {
    showMenu.classList.remove('active');
    navbarMenu.classList.remove('active');
  }
})


function closeMenu() {
  navbarMenu.classList.remove('active'),
    showMenu.classList.remove('active');
}

// добавление селекта начало

const selectHeaderActive = document.querySelector('.select__header');
const cityArrowBlock = document.querySelector('.btn__city');
const cityArrow = document.querySelector('.arrow__city');

selectHeaderActive.addEventListener('click', function() {
  selectHeaderActive.classList.add('active');
  cityArrowBlock.classList.add('active');
  cityArrow.classList.add('active');
});



const select = function () {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__items');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('active');
  }

  function selectChoose() {
      const text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('active');
      

  }

};

function myFunction(x) {
  if (x.matches) { 
    let imgWoman = document.querySelector('.contact__woman');
    document.querySelector('.select__header').addEventListener('click', function() {
    imgWoman.style.opacity = "0";
  })
  }
}

var x = window.matchMedia("(max-width: 380px)")
myFunction(x);
x.addListener(myFunction);

select();


function hover() {
  document.querySelector('.first__city').onmouseover = hoverCity1;
  document.querySelector('.first__city').onmouseout = unHoverCity1;
  document.querySelector('.second__city').onmouseover = hoverCity2;
  document.querySelector('.second__city').onmouseout = unHoverCity2;
  document.querySelector('.third__city').onmouseover = hoverCity3;
  document.querySelector('.third__city').onmouseout = unHoverCity3;
  document.querySelector('.fourth__city').onmouseover = hoverCity4;
  document.querySelector('.fourth__city').onmouseout = unHoverCity4;

  function hoverCity1() {
    document.querySelector('.first__city-name').style.color = '#717171';
    document.querySelector('.first__city-underline').style.backgroundColor = '#717171';
  }
  function unHoverCity1() {
    document.querySelector('.first__city-name').style.color = '#499A18';
    document.querySelector('.first__city-underline').style.backgroundColor = '#D9D9D9';

  }
  function hoverCity2() {
    document.querySelector('.second__city-name').style.color = '#717171';
    document.querySelector('.second__city-underline').style.backgroundColor = '#717171';
  }
  function unHoverCity2() {
    document.querySelector('.second__city-name').style.color = '#499A18';
    document.querySelector('.second__city-underline').style.backgroundColor = '#D9D9D9';
  }
  function hoverCity3() {
    document.querySelector('.third__city-name').style.color = '#717171';
    document.querySelector('.third__city-underline').style.backgroundColor = '#717171';
  }
  function unHoverCity3() {
    document.querySelector('.third__city-name').style.color = '#499A18';
    document.querySelector('.third__city-underline').style.backgroundColor = '#D9D9D9';
  }
  function hoverCity4() {
    document.querySelector('.fourth__city-name').style.color = '#717171';
    document.querySelector('.fourth__city-underline').style.backgroundColor = '#717171';
  }
  function unHoverCity4() {
    document.querySelector('.fourth__city-name').style.color = '#499A18';
    document.querySelector('.fourth__city-underline').style.backgroundColor = '#D9D9D9';
  }
}

hover();

const firstCityLink = document.querySelector('.first__city-link');
const showFirstCityBlock = document.querySelector('.adress__block1')
const secondFirstCityBlock = document.querySelector('.adress__block2');
const secondCityLink = document.querySelector('.second__city-link');
const showSecondCityBlock = document.querySelector('.adress__block2');
const thirdCityLink = document.querySelector('.third__city-link');
const showThirdCityBlock = document.querySelector('.adress__block3');
const fourthCityLink = document.querySelector('.fourth__city-link');
const showFourthCityBlock = document.querySelector('.adress__block4');

firstCityLink.addEventListener('click', function() {
  showFirstCityBlock.classList.add('active');
  showSecondCityBlock.classList.remove('active');
  showThirdCityBlock.classList.remove('active');
  showFourthCityBlock.classList.remove('active');
  cityArrowBlock.classList.remove('active');
  cityArrow.classList.remove('active');
})
secondCityLink.addEventListener('click', function() {
  showFirstCityBlock.classList.remove('active');
  showSecondCityBlock.classList.add('active');
  showThirdCityBlock.classList.remove('active');
  showFourthCityBlock.classList.remove('active');
  cityArrowBlock.classList.remove('active');
  cityArrow.classList.remove('active');
})
thirdCityLink.addEventListener('click', function() {
  showFirstCityBlock.classList.remove('active');
  showSecondCityBlock.classList.remove('active');
  showThirdCityBlock.classList.add('active');
  showFourthCityBlock.classList.remove('active');
  cityArrowBlock.classList.remove('active');
  cityArrow.classList.remove('active');
})
fourthCityLink.addEventListener('click', function() {
  showFirstCityBlock.classList.remove('active');
  showSecondCityBlock.classList.remove('active');
  showThirdCityBlock.classList.remove('active');
  showFourthCityBlock.classList.add('active');
  cityArrowBlock.classList.remove('active');
  cityArrow.classList.remove('active');
})






// добавление селекиа конец