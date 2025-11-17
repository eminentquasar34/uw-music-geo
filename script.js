var map = L.map("map").setView([47.655, -122.303], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.655, -122.303])
  .addTo(map)
  .bindPopup(
    `A pretty CSS popup.<br> Easily customizable.<br>
    <audio controls>
        <source src="audio/test.wav">
    </audio>`
  )
  .openPopup();
