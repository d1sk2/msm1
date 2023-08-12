function init() {
    let map = new ymaps.Map('map', {
        center: [43.12022182379287,131.89050230059422],
        zoom: 18,
    });

    let placemark = new ymaps.Placemark([43.12022182379287,131.89050230059422], {}, {

    });

    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.geoObjects.add(placemark)
}

ymaps.ready(init);

setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0)

$('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('body').toggleClass('open')
    $('.burger').toggleClass('open')
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
})