(() => {
  const imgs = document.querySelectorAll('.gallery .image_box img');
  const modal = document.querySelector('.modal');
  const modal_image = document.querySelector('.modal_image');
  const modal_off_btn = document.querySelector('.modal .modal_off_btn');
  const arrow_icon = document.querySelectorAll('.arrow');
  const image_number = document.querySelector('.image_number');
  // 현재 이미지 번호
  let currentIndex;

  const onImageMoal = (e) => {
    modal.classList.add('visible');
    currentIndex = Number(e.target.getAttribute('data-index'));
    modal_image.src = e.target.src;
    image_number.innerText = `${currentIndex + 1} of ${imgs.length}`;
  };

  // 선택한 이미지 모달 on
  imgs.forEach((img) => img.addEventListener('click', onImageMoal));

  // 모달 off
  modal_off_btn.addEventListener('click', (e) => {
    modal.classList.remove('visible');
  });

  // pre Image
  arrow_icon[0].addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = 8;
    }
    modal_image.src = imgs[--currentIndex].src;

    image_number.innerText = `${currentIndex + 1} of 8`;
  });

  // next Image
  arrow_icon[1].addEventListener('click', () => {
    if (currentIndex === 7) {
      currentIndex = -1;
    }
    modal_image.src = imgs[++currentIndex].src;
    image_number.innerText = `${currentIndex + 1} of 8`;
  });
})();
