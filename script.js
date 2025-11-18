var map = L.map("map").setView([47.655, -122.303], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.655, -122.3])
  .addTo(map)
  .bindPopup(
    `Test<br>
    <audio controls>
        <source src="audio/test.wav">
    </audio>`
  );

// UW CS Allen Building
L.marker([47.65332, -122.3055])
  .addTo(map)
  .bindPopup(`Studying in cs allen: Ceilings, by Lizzy Mcalpine`);

L.marker([47.66216, -122.30001]).addTo(map)
  .bindPopup(`Music while walking around University Village!<br>Note: m4a file!<br>
    <audio controls>
        <source src="audio/uvill1.m4a">
    </audio>`);
