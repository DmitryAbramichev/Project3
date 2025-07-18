const btn1 = document.querySelector(".tmp3");
const tmp = document.querySelector(".swiper");

btn1.onclick = () => {
  if (btn1.textContent === "Показать все") {
    btn1.textContent = "Скрыть";
    tmp.style.height = "max-content";
  } else {
    btn1.textContent = "Показать все";
    tmp.style.height = "184px";
  }
};

 // Создаем переменную для хранения экземпляра Swiper
 let mySwiper = null;

 // Функция инициализации/уничтожения Swiper
 function initSwiper() {
   const isMobile = window.innerWidth < 768;
   const swiperEl = document.querySelector(".swiper");

   if (isMobile && !mySwiper) {
     // Инициализируем Swiper только для мобильных
     mySwiper = new Swiper(".swiper", {
       slidesPerView: "auto",
       slidesPerGroup: 1,
       spaceBetween: 16,
       resistanceRatio: 0,
       watchSlidesProgress: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
     });
   } else if (!isMobile && mySwiper) {
     // Уничтожаем Swiper на десктопе
     mySwiper.destroy(true, true);
     mySwiper = null;

     // Возвращаем исходную разметку (опционально)
     swiperEl.innerHTML = `
       <div class="swiper-wrapper">
         ${swiperEl.querySelector(".swiper-wrapper").innerHTML}
       </div>
       <div class="swiper-pagination"></div>
     `;
   }
 }

 // Инициализация при загрузке страницы
 document.addEventListener("DOMContentLoaded", initSwiper);

 // Реагирование на изменение размера окна
 window.addEventListener("resize", initSwiper);