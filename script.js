'use script';
const slider = document.querySelector('.slider');
const sliderBtnRight = document.querySelectorAll('.slider__btn--right');
const sliderBtnLeft = document.querySelectorAll('.slider__btn--left');
let slides = [];

fetch(
  'https://api.unsplash.com/topics/nature/photos?client_id=d3oyf0zyFNLdAUaurrFrBFdnifqvPzFQnMicBrbclBU'
)
  .then((res) => res.json())
  .then((res) => {
    res.forEach((photo, i) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      slide.insertAdjacentHTML(
        'afterbegin',
        `<img src='${photo.urls.regular}' alt='Nature Photo ${i}' />`
      );

      slider.prepend(slide);

      slides.push(slide);
    });
  })
  .catch((err) => console.error(err));
