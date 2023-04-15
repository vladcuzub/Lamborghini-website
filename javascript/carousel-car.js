const prevButton = document.querySelector('.btn11');
const nextButton = document.querySelector('.btn22');
const image1 = document.querySelector('.car1');
const image2 = document.querySelector('.car2');
const modelCar1 = document.querySelector('.model-text1')
const modelCar2 = document.querySelector('.model-text2')

prevButton.addEventListener('click', function() {
  if (image1.classList.contains('active') && modelCar1.classList.contains('active')) {
    image1.classList.remove('active');
    image2.classList.add('active');

    modelCar1.classList.remove('active');
    modelCar2.classList.add('active');

  } else {
    image2.classList.remove('active');
    image1.classList.add('active');

    modelCar2.classList.remove('active');
    modelCar1.classList.add('active');
  }
});

nextButton.addEventListener('click', function() {
  if (image1.classList.contains('active') && modelCar1.classList.contains('active')) {
    image1.classList.remove('active');
    image2.classList.add('active');

    modelCar1.classList.remove('active');
    modelCar2.classList.add('active');


  } else {
    image2.classList.remove('active');
    image1.classList.add('active');


    modelCar2.classList.remove('active');
    modelCar1.classList.add('active');
  }
});
