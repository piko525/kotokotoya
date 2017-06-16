$(function(){
 
  // マップ設定
    var latLng = new google.maps.LatLng(34.670477, 135.500736);
    map = new google.maps.Map(
        document.getElementById("gMap1"),
        {
            zoom: 17,
            center: latLng,
            scrollwheel: false
        }
    );
    
    var latLng = new google.maps.LatLng(34.654037, 135.589652);
    map = new google.maps.Map(
    document.getElementById("gMap2"),
        {
            zoom: 17,
            center: latLng,
            scrollwheel: false
        }
    );
    
    var latLng = new google.maps.LatLng(34.701209, 135.487502);
    map = new google.maps.Map(
    document.getElementById("gMap3"),
        {
            zoom: 17,
            center: latLng,
            scrollwheel: false
        }
    );
 
    // マーカー設定
    var markerImg = {
        url: '../images/shop_info/gmap_logo.png'
    };
    
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: markerImg
    });
    
    //デザインカスタマイズ
  var mapStyle = 
[{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}]
;
 
  var mapType = new google.maps.StyledMapType(mapStyle);
  map.mapTypes.set('myMapType', mapType);
  map.setMapTypeId('myMapType');
 
});