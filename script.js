var map = L.map("map").setView([47.657, -122.303], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.66216, -122.30001]).addTo(map)
  .bindPopup(`Music while walking around University Village!<br>Note: m4a file!<br>
    <audio controls>
        <source src="audio/uvill1.m4a">
    </audio>`);

L.marker([47.65579, -122.30921]).addTo(map)
  .bindPopup(`Band playing in the distance at Red Square!<br>Note: m4a file!<br>
    <audio controls>
        <source src="audio/redsquareband.m4a">
    </audio>`);
