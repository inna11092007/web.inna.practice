// Чекаємо, поки весь HTML-документ завантажиться, перш ніж запускати скрипт
document.addEventListener('DOMContentLoaded', () => {

  // --- Логіка для Бургер-меню ---
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const body = document.body;

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      // Перемикаємо класи для анімації іконки та показу меню
      burger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      // Блокуємо/розблоковуємо скрол сторінки
      body.classList.toggle('no-scroll');
    });
  }

  // --- Логіка для Модального вікна ---
  const openModalBtn = document.querySelector('.open-modal-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('closeModal');

  if (openModalBtn && modal && closeModalBtn) {
    // Відкрити вікно
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('active');
    });

    // Закрити вікно по кліку на хрестик
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Закрити вікно по кліку на фон
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
  
  // Обробка відправки форми (можна розширити)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Запобігаємо стандартній відправці форми
        alert('Форма успішно надіслана!');
        if(modal) modal.classList.remove('active');
        contactForm.reset();
      });
  }


  // --- Логіка для Слайдера в Портфоліо ---
  const slider = document.querySelector('.portfolio-slider');
  const prevBtn = document.querySelector('.portfolio-nav .nav-arrow.prev');
  const nextBtn = document.querySelector('.portfolio-nav .nav-arrow.next');

  if (slider && prevBtn && nextBtn) {
    const slides = document.querySelectorAll('.portfolio-item');
    let currentIndex = 0;

    function updateSliderPosition() {
      // Для роботи слайдера потрібен CSS, який робить його flex-контейнером.
      // Цей JS просто прокручує його.
      const slideWidth = slides[0].clientWidth; // Ширина одного слайда
      slider.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
      updateSliderPosition();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
      updateSliderPosition();
    });
  }
  
  // --- Логіка для Акордеону (FAQ) ---
  const faqItems = document.querySelectorAll('.faq-item');
  
  if(faqItems.length > 0) {
      faqItems.forEach(item => {
          const question = item.querySelector('.faq-question');
          question.addEventListener('click', () => {
              // Закриваємо всі інші відкриті відповіді
              faqItems.forEach(otherItem => {
                  if (otherItem !== item && otherItem.classList.contains('active')) {
                      otherItem.classList.remove('active');
                  }
              });
              // Перемикаємо поточний елемент
              item.classList.toggle('active');
          });
      });
  }

});