$(document).ready(function () {
  // Панель поиска
  $(".menu__search-button").click(() => {
    $(".menu__search-panel").toggleClass("menu__search-panel_active");
    $(".menu__search-button").toggleClass("menu__search-button_active");
    $(".menu__search-input").val("");
  });
  $(".menu__search-panel-close").click(() => {
    $(".menu__search-panel").removeClass("menu__search-panel_active");
    $(".menu__search-button").toggleClass("menu__search-button_active");
    $(".menu__search-input").val("");
  });

  // Мобильное меню
  $(".header-mobile-btn, .mobile-menu__close").click(() => {
    $(".mobile-menu").toggleClass("mobile-menu_active");
  });

  // Панель поиска в мобильном меню
  $(".mobile-menu__search-button").click(() => {
    $(".mobile-menu__search-panel-close").toggleClass(
      "mobile-menu__search-panel-close_active"
    );
    $(".mobile-menu__search-input")
      .toggleClass("mobile-menu__search-input_active")
      .val("");
  });

  // Main slider
  const newsSlider = new Swiper(".swiper-container-news", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".news-slider__dots",
      type: "bullets",
    },
    breakpoints: {
      577: {
        navigation: {
          nextEl: ".news-slider__next",
        },
      },
    },
  });

  // Main Cinema slider
  const cinemaSliderMain = new Swiper(".swiper-container-cinema-main", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".cinema-slider__dots",
      type: "bullets",
    },
    breakpoints: {
      577: {
        navigation: {
          nextEl: ".cinema-slider__next",
        },
      },
    },
  });

  // Cinema mobile slider
  const cinemaSliderMobile = new Swiper(".swiper-container-cinema-mobile", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    pagination: {
      el: ".cinema-mobile-slider__dots",
      type: "bullets",
    },
  });

  // Brands slider
  const brandsSlider = new Swiper(".swiper-container-brands-slider", {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    pagination: {
      el: ".brands-slider__dots",
      type: "bullets",
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
        navigation: {
          nextEl: ".brands-slider__next",
          prevEl: ".brands-slider__prev",
        },
      },
    },
  });

  // Sale slider
  const saleSlider = new Swiper(".swiper-container-sale-slider", {
    loop: false,
    spaceBetween: 8,
    pagination: {
      el: ".sale-slider__dots",
      type: "bullets",
    },
  });

  //Страница Магазины
  $(".shops-type").click(function () {
    $(".shops-type__filter").toggleClass("shops-type__filter_active");
    $(".shops-type__icon").toggleClass("shops-type__icon_active");
  });

  $(".shops-type__filter-item").click(function () {
    $(".shops-type__filter-item").removeClass("shops-type__filter-item_active");
    $(this).addClass("shops-type__filter-item_active");
    let type = $(this).clone();
    $(".shops-choisen").html(type).addClass("shops-choisen_active");
    $(".shops-type__filter").toggleClass("shops-type__filter_active", true);
  });

  $.ajax({
    type: "GET",
    cache: true,
    success: function () {
      $(".shops-list").load("ajax/shops-by-logo.html");
    },
  });

  $(".shops-panel__filter-wrap").click(function () {
    let path = $(this).attr("data-filter");
    $.ajax({
      type: "GET",
      cache: true,
      success: function () {
        $(".shops-list").load(`ajax/${path}`);
      },
    });
    $(".shops-panel__filter-wrap").removeClass(
      "shops-panel__filter-wrap_active"
    );
    $(this).addClass("shops-panel__filter-wrap_active");
  });

  // Страница одного магазина (Brand) и кино
  let text = $(".brand__info-description-text"),
    spoiler = $(".brand__info-description-spoiler"),
    inner = text.prop("scrollHeight"),
    outer = text.prop("clientHeight"),
    diff = inner - outer;
  diff > 5 ?
    spoiler.addClass("brand__info-description-spoiler_visible") :
    spoiler.removeClass("brand__info-description-spoiler_visible");

  spoiler.click(function () {
    text.toggleClass("brand__info-description-text_full");
    text.hasClass("brand__info-description-text_full") ?
      spoiler.html("Свернуть...") :
      spoiler.html("Читать полностью...");
  });

  const cinemaSlider = new Swiper(".swiper-container-cinema", {
    loop: false,
    navigation: {
      nextEl: ".cinema-movies-next",
      prevEl: ".cinema-movies-prev",
    },
    spaceBetween: 8,
    slidesPerView: "auto",
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 53,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 19,
      },
      1401: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 16,
      },
    },
  });

  // Слайдер страницы О торговом парке
  const aboutSliderThumbs = new Swiper(".about-slider-thumbs", {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        direction: "vertical",
      },
    },
  });

  const aboutSliderTop = new Swiper(".about-slider-top", {
    loop: false,
    spaceBetween: 8,
    pagination: {
      el: ".about-slider__counter",
      type: "bullets",
    },
    thumbs: {
      swiper: aboutSliderThumbs,
    },
    breakpoints: {
      681: {
        navigation: {
          nextEl: ".about-slider__next",
          prevEl: ".about-slider__prev",
        },
        pagination: {
          type: "fraction",
        },
      },
    },
  });

  // Слайдер страницы Фотоотчет
  const photoReportSliderThumbs = new Swiper(".photo-report-slider-thumbs", {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        direction: "vertical",
      },
    },
  });

  const photoReportSliderTop = new Swiper(".photo-report-slider-top", {
    loop: false,
    spaceBetween: 8,
    pagination: {
      el: ".photo-report-slider__counter",
      type: "bullets",
    },
    thumbs: {
      swiper: photoReportSliderThumbs,
    },
    breakpoints: {
      681: {
        navigation: {
          nextEl: ".photo-report-slider__next",
          prevEl: ".photo-report-slider__prev",
        },
        pagination: {
          type: "fraction",
        },
      },
    },
  });

  // Спойлер страницы О троговом парке
  const aboutSpoiler = $(".about__info-desc-text-spoiler"),
    aboutText = $(".about__info-desc-text-bottom");
  aboutSpoiler.click(function () {
    aboutText.toggleClass("about__info-desc-text-bottom_active");
    aboutText.hasClass("about__info-desc-text-bottom_active") ?
      aboutSpoiler.html("Свернуть...") :
      aboutSpoiler.html("Читать полностью...");
  });

  // Страница Фотоотчетов
  $('.all-photos__header-filter-button').click(function() {
    $('.all-photos__header-filter-button').removeClass('all-photos__header-filter-button_active');
    $(this).addClass('all-photos__header-filter-button_active');
  });

  // Страница схемы парка
  $(".scheme-header__title").click(function () {
    $(this).toggleClass("scheme-header__title_active");
    $(".scheme-header__menu").toggleClass("scheme-header__menu_active");
  });

  $(".scheme-header__menu-item-wrapper").click(function () {
    let list = $(this).siblings(".scheme-header__menu-item-filter"),
      icon = $(this).children(".scheme-header__menu-item-icon");
    list.toggleClass("scheme-header__menu-item-filter_active");
    icon.toggleClass("scheme-header__menu-item-icon_active");
  });

  // Страница Вакансии
  $(".vacancies__list-item-title").click(function () {
    $(this).toggleClass("vacancies__list-item-title_active");
    $(this)
      .siblings(".vacancies__list-item-content")
      .toggleClass("vacancies__list-item-content_active");
    $(this)
      .siblings(".vacancies__list-item-icon")
      .toggleClass("vacancies__list-item-icon_active");
    $(this)
      .parent(".vacancies__list-item")
      .toggleClass("vacancies__list-item_active");
  });

  // Страница Аренды
  $(".rental-request__form-input-field").focusin(function () {
    let input = $(this),
      label = input.siblings(".rental-request__form-input-label");
    label.addClass("rental-request__form-input-label_focused");
  });
  $(".rental-request__form-input-field").focusout(function () {
    let input = $(this),
      label = input.siblings(".rental-request__form-input-label");
    input.val() === "" ?
      label.removeClass("rental-request__form-input-label_focused") :
      false;
  });

  // Страница контакты
  ymaps.ready(function () {
    var contactsMap = new ymaps.Map("map", {
        center: [55.87625140815895, 37.332260888915926],
        zoom: 13,
      }),
      myPlacemark = new ymaps.Placemark(
        [55.87625140815895, 37.332260888915926],
        null, {
          iconLayout: "default#image",
          iconImageHref: "./images/DestinationPoint.svg",
        }
      );
    contactsMap.geoObjects.add(myPlacemark);
    contactsMap.behaviors.disable("scrollZoom");
  });

  $(".contacts__form-input-field").focusin(function () {
    let input = $(this),
      label = input.siblings(".contacts__form-input-label");
    label.addClass("contacts__form-input-label_focused");
  });
  $(".contacts__form-input-field").focusout(function () {
    let input = $(this),
      label = input.siblings(".contacts__form-input-label");
    input.val() === "" ?
      label.removeClass("contacts__form-input-label_focused") :
      false;
  });

  // Страница Как добраться
  $(".route-auto__form-input-field").focusin(function () {
    let input = $(this),
      label = input.siblings(".route-auto__form-input-label");
    label.addClass("route-auto__form-input-label_focused");
  });
  $(".route-auto__form-input-field").focusout(function () {
    let input = $(this),
      label = input.siblings(".route-auto__form-input-label");
    input.val() === "" ?
      label.removeClass("route-auto__form-input-label_focused") :
      false;
  });

  $(".route-info__header-filter-button").click(function () {
    $(".route-info__header-filter-button").removeClass(
      "route-info__header-filter-button_active"
    );
    $(this).addClass("route-info__header-filter-button_active");
    let attr = $(this).attr("data-block"),
      target = `.${attr}`;
    $(".route-block").removeClass("route-block_visible");
    $(target).addClass("route-block_visible");
  });

  // Скролл наверх
  $(".footer-top-btn").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      1000
    );
  });

  // Выпадайка по наведению в шапке
  const hoverMenu = function() {
    if ($(window).width() >= '993') {
      $('.menu__item_last').mouseenter(function () {
        $(this).addClass('menu__item_active');
        $('.menu__item-hovered').addClass('menu__item-hovered_active');
      });
      $('.menu__item-hovered').mouseleave(function () {
        $(this).removeClass('menu__item-hovered_active');
        $('.menu__item_last').removeClass('menu__item_active');
      });      
    } else {
      console.log('меньше');      
    }
  }
  hoverMenu();
  $(window).resize(hoverMenu);

  // Страница События
  $('.event__header-filter-button').click(function() {
    $('.event__header-filter-button').removeClass('event__header-filter-button_active');
    $(this).addClass('event__header-filter-button_active');
  });

  // Страница скидки и акции
  $('.sales__header-filter-button').click(function () {
    $('.sales__header-filter-button').removeClass('sales__header-filter-button_active');
    $(this).addClass('sales__header-filter-button_active');
  });
});