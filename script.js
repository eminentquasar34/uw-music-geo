var map = L.map("map").setView([47.655, -122.303], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.655, -122.3])
  .addTo(map)
  .bindPopup(
    `A pretty CSS popup.<br> Easily customizable.<br>
    <audio controls>
        <source src="audio/test.wav">
    </audio>`
  )
  .openPopup(); // Remove this line when we want all popups to start on close

// UW CS Allen Building
L.marker([47.65332, -122.3055])
  .addTo(map)
  .bindPopup(`Studying in cs allen: Ceilings, by Lizzy Mcalpine`)
  .openPopup();
