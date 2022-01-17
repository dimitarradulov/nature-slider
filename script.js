'use script';
const slider = document.querySelector('.slider');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
let slides = [];

const fetchCall = async () => {
  const result = await fetch(
    'https://api.unsplash.com/topics/nature/photos?client_id=d3oyf0zyFNLdAUaurrFrBFdnifqvPzFQnMicBrbclBU'
  );
  const jsonRes = await result.json();

  jsonRes.forEach((photo, i) => {
    const slide = document.createElement('div');
    slide.classList.add('slide');

    slide.insertAdjacentHTML(
      'afterbegin',
      `<img src='${photo.urls.regular}' alt='Nature Photo ${i}' />`
    );

    slider.prepend(slide);

    slides.push(slide);
  });

  let currSlide = 0;
  const maxSlides = slides.length - 1;

  const goToSlide = (slide) => {
    slides.forEach((p, i) => {
      console.log(i);
      p.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  goToSlide(0);

  const nextSlide = () => {
    if (currSlide === maxSlides) currSlide = 0;
    else currSlide++;
    goToSlide(currSlide);
  };

  const prevSlide = () => {
    if (currSlide === 0) currSlide = maxSlides;
    else currSlide--;
    goToSlide(currSlide);
  };

  sliderBtnRight.addEventListener('click', nextSlide);

  sliderBtnLeft.addEventListener('click', prevSlide);
};

fetchCall();
