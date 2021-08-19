$(document).ready(function () {
  let currentFloor = 2 //переменная с текущим этажом
  let floorPath = $('.home-image path') // этаж в SVG
  let counterUp = $('.counter-up') //кнопка повышения этажа
  let counterDown = $('.counter-down') //кнопка понижения этажа

  // функция, подсвечивающая этаж при наведении мышью
  floorPath.on('mouseover', function () {
    currentFloor = $(this).attr('data-floor') //получение значения текущего этажа
    $('.counter').text(currentFloor) // записываем значение этажа в счетчик справа
    floorPath.removeClass('current-floor') //удаляем активный класс у этажей
  })

  // функция повышения этажа по кнопке вверх
  //отслеживаем клик по кнопке вверх
  counterUp.on('click', function () {
    //проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) {
      currentFloor++ //прибавлем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }) //офрматируем переменную с этажем, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor) // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor') //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') //подсвечиваем текущий этаж
    }
  })

  //функция понижения этажа по кнопке вниз
  //отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {
    //проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor > 2) {
      currentFloor-- // убавляем 1 этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }) //офрматируем переменную с этажем, чтобы было 01, а не 1
      $('.counter').text(usCurrentFloor) // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor') //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') //подсвечиваем текущий этаж
    }
  })
})
