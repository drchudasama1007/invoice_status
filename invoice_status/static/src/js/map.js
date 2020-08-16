odoo.define('website_signup_map_address.map', function(require) {
    'use strict';

    $(document).ready(function() {

    console.log("mappppppppppppppppppppppppppppppppppppppp===111")
    myMap();
    function myMap() {
    var cur_lat, cur_lng;

    console.log("mappppppppppppppppppppppppppppppppppppppp")


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            cur_lat = position.coords.latitude
            cur_lng = position.coords.longitude
            if (cur_lat && cur_lng) {
                var mapProp = {
                    center: new google.maps.LatLng(cur_lat, cur_lng),
                    zoom: 5,
                };
            } else {
                var mapProp = {
                    center: new google.maps.LatLng(51.508742, -0.120850),
                    zoom: 5,
                };
            }
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            map.setZoom(8);

             var input = document.getElementById('pac-input');
             var autocomplete = new google.maps.places.Autocomplete(input);
//
             autocomplete.bindTo('bounds', map);

               autocomplete.setFields(
                        ['address_components', 'geometry', 'icon', 'name']);
                    var marker = new google.maps.Marker({
                      map: map,
                      anchorPoint: new google.maps.Point(0, -29)
                    });

              autocomplete.addListener('place_changed', function() {
                      marker.setVisible(false);
                      var place = autocomplete.getPlace();
                      if (!place.geometry) {
                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                      }

                      if (place.geometry.viewport) {
                        map.fitBounds(place.geometry.viewport);
                      } else {
                        map.setCenter(place.geometry.location);
                        map.setZoom(17);  // Why 17? Because it looks good.
                      }
                      var line_1_t = $('#pac-input').val()
                      var lng_t = place.geometry.location.lng();
                      var lat_t = place.geometry.location.lat();
                       $('#lat').val(lat_t)
                        $('#lng').val(lng_t)
                        $('#line1').val(line_1_t)
                      marker.setPosition(place.geometry.location);
                      marker.setVisible(true);
                    });

            var geocoder = new google.maps.Geocoder;
            var infowindow = new google.maps.InfoWindow;
            var marker;

            google.maps.event.addListener(map, "click", function(e) {
                latLng = e.latLng;
                var lat = e.latLng.lat()
                var lng = e.latLng.lng()
                $('#lat').val(lat)
                $('#lng').val(lng)


                var geocoder = geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'latLng': latLng
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            map.setZoom(11);
                            $('#line1').val(results[1].formatted_address)
                        }
                    }
                });

                if (marker && marker.setMap) {
                    marker.setMap(null);
                }
                marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                });
            });
        })
    }
}

    })

})