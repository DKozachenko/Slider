const changeSlide = (elements, pointer1, pointer2, className) => {
  elements[pointer1].classList.add(className + '_out');
  setTimeout(() => {
    elements[pointer1].style.display = 'none';
    elements[pointer1].className = 'slider__main-item';
    elements[pointer2].style.display = 'flex';
    elements[pointer2].classList.add(className + '_in');
  }, 1000);
}

const browseLeft = (items) => {
  let index, indexPrev = 0;

  items.forEach((item, i) => {
    if (getComputedStyle(item).display === 'flex') {
      index = i;   
    }
  })

  indexPrev = index !== 0 ? index - 1 : items.length - 1;

  changeSlide(items, index, indexPrev, 'right_slide');
}

const browseRight = (items) => {
  let index, indexNext = 0;

  items.forEach((item, i) => {
    if (getComputedStyle(item).display === 'flex') {
      index = i;
    }
  })

  if (index === items.length - 1) {
    indexNext = 0;
  } else {
    indexNext = index + 1;
  }
  indexNext = index === items.length - 1 ? 0 : index + 1;

  changeSlide(items, index, indexNext, 'left_slide');
}

const turnIntoSlider = (block) => {
  block.style.position = 'relative';
  
  const sliderItems = block.querySelectorAll('.slider__main-item');
  sliderItems.forEach((item, i) => {
    if (i !== 0) {
      item.style.display = 'none';
    }
  })
  const prev = block.querySelector('.prev');
  const next = block.querySelector('.next');

  prev.addEventListener('click', () => {
    browseLeft(sliderItems);
  })

  next.addEventListener('click', () => {
    browseRight(sliderItems);
  })
}