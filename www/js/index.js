/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getWeatherLocation() {
    navigator.geolocation.getCurrentPosition(onWeatherSuccess, onWeatherError, {
        enableHighAccuracy: true
    });
}
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }, // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    }, // Update DOM on a Received Event
    receivedEvent: function (id) {
        var Latitude = undefined;
        var Longitude = undefined;
        // Get geo coordinates
        function getMapLocation() {
            navigator.geolocation.getCurrentPosition(onMapSuccess, onMapError, {
                enableHighAccuracy: true
            });
        }
        // Success callback for get geo coordinates
        var onMapSuccess = function (position) {
                Latitude = position.coords.latitude;
                Longitude = position.coords.longitude;
                getMap(Latitude, Longitude);
            }
            // Get map by using coordinates
        function getMap(latitude, longitude) {
            var mapOptions = {
                center: new google.maps.LatLng(34.397, 150.644)
                , zoom: 8
                , mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var latLong = new google.maps.LatLng(latitude, longitude);
            var marker = new google.maps.Marker({
                position: latLong
            });
            marker.setMap(map);
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        }
        // Success callback for watching your changing position
        var onMapWatchSuccess = function (position) {
                var updatedLatitude = position.coords.latitude;
                var updatedLongitude = position.coords.longitude;
                if (updatedLatitude != Latitude && updatedLongitude != Longitude) {
                    Latitude = updatedLatitude;
                    Longitude = updatedLongitude;
                    getMap(updatedLatitude, updatedLongitude);
                }
            }
            // Error callback
        function onMapError(error) {
            console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        }
        // Watch your changing position
        function watchMapPosition() {
            return navigator.geolocation.watchPosition(onMapWatchSuccess, onMapError, {
                enableHighAccuracy: true
            });
        }
        console.log('Received Event: ' + id);
    }
};
app.initialize();