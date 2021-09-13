ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [55.824213, 37.652984],
          zoom: 18,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "GRAPPFIT",
          balloonContent: `<img src="./img/map-logo.svg" class="questions__map-logo" alt="map image"><p class="questions__map-text">г.Екатеринбург, ул. Бориса Галушкина, 10</p>`,
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "./img/location-icon.svg",
          // Размеры метки.
          iconImageSize: [34, 48],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-18, -55],
        }
      );
  
    myMap.geoObjects.add(myPlacemark)
  
    /* document.addEventListener("DOMContentLoaded", function() {
      setTimeout(() => {
        // const mapBaloon = document.querySelector(".ymaps-2-1-79-image");
        // mapBaloon.click();
        var balloon = new ymaps.Balloon(myMap);
        balloon.open(myMap.getCenter());
        // console.log(mapBaloon);
      }, 3000);
    }) */
    // var balloon = new ymaps.Balloon(myMap);
    // balloon.open();
  });