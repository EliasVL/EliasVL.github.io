ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [43.115345, 131.935063],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([43.115345, 131.935063], {
            balloonContent: 'Наше местоположение'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#351c43'
        }))
}