var GRAY = "#808080";
var ORANGE = "#FFBF00";
var YELLOW = "#FFFF00";

var map = L.map("map").setView([47.657, -122.303], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.circleMarker([47.66216, -122.30001], {
  color: ORANGE,
}).addTo(map).bindPopup(`Music while walking around University Village!<br>Note: m4a file!<br>
    <audio controls>
        <source src="audio/uvill1.m4a">
    </audio>`);

// DZ Walking in Red Square - Gray
L.circleMarker([47.65579, -122.30921], {
  color: GRAY,
}).addTo(map).bindPopup(`Band playing in the distance at Red Square!<br>Note: m4a file!<br>
    <audio controls>
        <source src="audio/redsquareband.m4a">
    </audio>`);

// JC Choir Recital Practice - Orange
L.circleMarker([47.65755, -122.30567], {
  color: YELLOW,
})
  .addTo(map)
  .bindPopup(
    `I am a member of UW Recital Choir. This is a clip from our rehearsal. Singing and being surrounded by music made me feel xyz<br><audio controls>
        <source src="audio/jc_recital_choir_11_18.m4a">
    </audio>`
  );
