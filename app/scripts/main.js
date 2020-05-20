$(document).ready(function () {

  // Панель поиска
  $('.menu__search-button').click(() => {
    $('.menu__search-panel').toggleClass('menu__search-panel_active');
    $('.menu__search-button').toggleClass('menu__search-button_active');
    $('.menu__search-input').val('');
  });
  $('.menu__search-panel-close').click(() => {
    $('.menu__search-panel').removeClass('menu__search-panel_active');
    $('.menu__search-button').toggleClass('menu__search-button_active');
    $('.menu__search-input').val('');
  });

  // Мобильное меню
  $('.header-mobile-btn, .mobile-menu__close').click(() => {
    $('.mobile-menu').toggleClass('mobile-menu_active');
  });

  // Панель поиска в мобильном меню
  $('.mobile-menu__search-button').click(() => {
    $('.mobile-menu__search-panel-close').toggleClass('mobile-menu__search-panel-close_active');
    $('.mobile-menu__search-input').toggleClass('mobile-menu__search-input_active').val('');
  });

  // Main slider
  $('.news-slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $('.news-slider-prev'),
    nextArrow: '<div class="news-slider-next">' +
      '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.414 7.75725C12.8045 7.36672 13.4377 7.36672 13.8282 7.75725L19.4851 13.4141C19.8756 13.8046 19.8756 14.4378 19.4851 14.8283L13.8282 20.4852C13.4377 20.8757 12.8045 20.8757 12.414 20.4852C12.0235 20.0946 12.0235 19.4615 12.414 19.071L17.3637 14.1212L12.414 9.17146C12.0235 8.78094 12.0235 8.14777 12.414 7.75725Z" fill="white"/>' +
      '<circle opacity="0.5" cx="14" cy="14" r="13" stroke="white" stroke-width="2"/>' +
      '</svg>' +
      '</div>',
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }]
  });

  // Cinema slider
  $('.cinema-slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $('.cinema-slider-prev'),
    nextArrow: '<div class="cinema-slider-next">' +
      '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.414 7.75725C12.8045 7.36672 13.4377 7.36672 13.8282 7.75725L19.4851 13.4141C19.8756 13.8046 19.8756 14.4378 19.4851 14.8283L13.8282 20.4852C13.4377 20.8757 12.8045 20.8757 12.414 20.4852C12.0235 20.0946 12.0235 19.4615 12.414 19.071L17.3637 14.1212L12.414 9.17146C12.0235 8.78094 12.0235 8.14777 12.414 7.75725Z" fill="white"/>' +
      '<circle opacity="0.5" cx="14" cy="14" r="13" stroke="white" stroke-width="2"/>' +
      '</svg>' +
      '</div>',
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }]
  });

  // Cinema mobile slider
  $('.cinema-mobile-slider').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Brands slider
  $('.brands-slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<div class="brands-slider-prev">' +
      '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.586 7.75725C16.1955 7.36672 15.5623 7.36672 15.1718 7.75725L9.51495 13.4141C9.12442 13.8046 9.12442 14.4378 9.51495 14.8283L15.1718 20.4852C15.5623 20.8757 16.1955 20.8757 16.586 20.4852C16.9765 20.0946 16.9765 19.4615 16.586 19.071L11.6363 14.1212L16.586 9.17146C16.9765 8.78094 16.9765 8.14777 16.586 7.75725Z" fill="#C2BCBC"/>' +
      '<circle r="13" transform="matrix(-1 0 0 1 14 14)" stroke="#C2BCBC" stroke-width="2"/>' +
      '</svg>' +
      '</div>',
    nextArrow: '<div class="brands-slider-next">' +
      '<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.414 7.75725C12.8045 7.36672 13.4377 7.36672 13.8282 7.75725L19.4851 13.4141C19.8756 13.8046 19.8756 14.4378 19.4851 14.8283L13.8282 20.4852C13.4377 20.8757 12.8045 20.8757 12.414 20.4852C12.0235 20.0946 12.0235 19.4615 12.414 19.071L17.3637 14.1212L12.414 9.17146C12.0235 8.78094 12.0235 8.14777 12.414 7.75725Z" fill="#C2BCBC"/>' +
      '<circle opacity="0.5" cx="14" cy="14" r="13" stroke="#C2BCBC" stroke-width="2"/>' +
      '</svg>' +
      '</div>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false
        }
      }
    ]
  });

  // Sale slider
  $('.sale-slider').slick({
    autoplay: false,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //Страница Магазины
  $('.shops-type').click(function () {
    $('.shops-type__filter').toggleClass('shops-type__filter_active');
    $('.shops-type__icon').toggleClass('shops-type__icon_active');
  });

  $('.shops-type__filter-item').click(function () {
    $('.shops-type__filter-item').removeClass('shops-type__filter-item_active');
    $(this).addClass('shops-type__filter-item_active');
    let type = $(this).clone();
    $('.shops-choisen')
      .html(type)
      .addClass('shops-choisen_active');
    $('.shops-type__filter').toggleClass('shops-type__filter_active', true);
  });

  $.ajax({
    type: "GET",
    cache: true,
    success: function () {
      $('.shops-list').load('ajax/shops-by-logo.html')
    }
  });

  $('.shops-panel__filter-wrap').click(function () {
    let path = $(this).attr('data-filter');
    $.ajax({
      type: "GET",
      cache: true,
      success: function () {
        $('.shops-list').load(`ajax/${path}`)
      }
    });
    $('.shops-panel__filter-wrap').removeClass('shops-panel__filter-wrap_active');
    $(this).addClass('shops-panel__filter-wrap_active');
  });

  // Страница одного магазина (Brand) и кино  
  let text = $('.brand__info-description-text'),
    spoiler = $('.brand__info-description-spoiler'),
    inner = text.prop('scrollHeight'),
    outer = text.prop('clientHeight'),
    diff = inner - outer;
  diff > 5 ?
    spoiler.addClass('brand__info-description-spoiler_visible') :
    spoiler.removeClass('brand__info-description-spoiler_visible');

  spoiler.click(function () {
    text.toggleClass('brand__info-description-text_full');
    text.hasClass('brand__info-description-text_full') ?
      spoiler.html('Свернуть...') :
      spoiler.html('Читать полностью...');
  });

  const cinemaSlider = new Swiper('.swiper-container-cinema', {
    loop: false,
    navigation: {
      nextEl: '.cinema-movies-next',
      prevEl: '.cinema-movies-prev'
    },
    spaceBetween: 8,
    slidesPerView: 'auto',
    breakpoints: {
      576: {
        slidesPerGroup: 2,
        spaceBetween: 16
      },
      768: {
        slidesPerGroup: 3
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 53
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 19
      },
      1401: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 16
      }
    }
  })

  // Слайдер страницы О торговом парке
  const aboutSliderThumbs = new Swiper('.about-slider-thumbs', {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        direction: 'vertical'
      }
    }
  });

  const aboutSliderTop = new Swiper('.about-slider-top', {
    loop: false,
    spaceBetween: 8,
    pagination: {
      el: '.about-slider__counter',
      type: 'bullets'
    },
    thumbs: {
      swiper: aboutSliderThumbs
    },
    breakpoints: {
      681: {
        navigation: {
          nextEl: '.about-slider__next',
          prevEl: '.about-slider__prev'
        },
        pagination: {
          type: 'fraction'
        }
      }
    }
  });

  // Слайдер страницы Фотоотчет
  const photoReportSliderThumbs = new Swiper('.photo-report-slider-thumbs', {
    slidesPerView: 4,
    spaceBetween: 8,
    loop: false,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        direction: 'vertical'
      }
    }
  });

  const photoReportSliderTop = new Swiper('.photo-report-slider-top', {
    loop: false,
    spaceBetween: 8,
    pagination: {
      el: '.photo-report-slider__counter',
      type: 'bullets'
    },
    thumbs: {
      swiper: photoReportSliderThumbs
    },
    breakpoints: {
      681: {
        navigation: {
          nextEl: '.photo-report-slider__next',
          prevEl: '.photo-report-slider__prev'
        },
        pagination: {
          type: 'fraction'
        }
      }
    }
  });

  // Спойлер страницы О троговом парке
  const aboutSpoiler = $('.about__info-desc-text-spoiler'),
    aboutText = $('.about__info-desc-text-bottom');
  aboutSpoiler.click(function () {
    aboutText.toggleClass('about__info-desc-text-bottom_active');
    aboutText.hasClass('about__info-desc-text-bottom_active') ?
      aboutSpoiler.html('Свернуть...') :
      aboutSpoiler.html('Читать полностью...')
  });

  // Страница схемы парка
  $('.scheme-header__title').click(function () {
    $(this).toggleClass('scheme-header__title_active');
    $('.scheme-header__menu').toggleClass('scheme-header__menu_active');
  });

  $('.scheme-header__menu-item-wrapper').click(function () {
    let list = $(this).siblings('.scheme-header__menu-item-filter'),
      icon = $(this).children('.scheme-header__menu-item-icon');
    list.toggleClass('scheme-header__menu-item-filter_active');
    icon.toggleClass('scheme-header__menu-item-icon_active');
  });

  // Страница Вакансии
  $('.vacancies__list-item-title').click(function () {
    $(this).toggleClass('vacancies__list-item-title_active');
    $(this).siblings('.vacancies__list-item-content').toggleClass('vacancies__list-item-content_active');
    $(this).siblings('.vacancies__list-item-icon').toggleClass('vacancies__list-item-icon_active');
    $(this).parent('.vacancies__list-item').toggleClass('vacancies__list-item_active');
  });

  // Страница Аренды
  $('.rental-request__form-input-field').focusin(function () {
    let input = $(this),
      label = input.siblings('.rental-request__form-input-label');
    label.addClass('rental-request__form-input-label_focused');
  });
  $('.rental-request__form-input-field').focusout(function () {
    let input = $(this),
      label = input.siblings('.rental-request__form-input-label');
    input.val() === '' ? label.removeClass('rental-request__form-input-label_focused') : false;
  });


});