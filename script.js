var GRAY = "#808080";
var ORANGE = "#FFBF00";
var YELLOW = "#FFFF00";

var map = L.map("map").setView([47.657, -122.303], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.circleMarker([47.66216, -122.30001], {
  color: YELLOW,
}).addTo(map).bindPopup(`
    <h3>Daniel Z: Walking in U-Village</h3>
    I was walking through U-Village on the way home! I was pretty nervous because I had a lot of 
    homework that I had to do when I get home, but the music was a nice break!
    <br>
    <br>
    <audio controls>
        <source src="audio/uvill1.m4a">
    </audio>`);

// DZ Walking in Red Square - Gray
L.circleMarker([47.65579, -122.30921], {
  color: GRAY,
}).addTo(map).bindPopup(`
    <h3>Daniel Z: Walking in Red Square</h3>
    There was a band playing in the distance at Red Square! I was walking to do my CCG #6 and the 
    music was in the faint background, so I felt indifferent.
    <br><br>
    <audio controls>
        <source src="audio/redsquareband.m4a">
    </audio>`);

// JC Choir Recital Practice - Yellow
L.circleMarker([47.65755, -122.30567], {
  color: YELLOW,
})
  .addTo(map)
  .bindPopup(
    `
    <h3>Jordan C: Recital Choir</h3>
    I am a member of UW Recital Choir. This is a clip from our rehearsal. 
    <br>
    <br>
Singing and being surrounded by music made me feel happy. I love being immersed in community and collaboratively creating something beautiful. The song from this clip is called "Hope." 
<br><br>
<audio controls>
        <source src="audio/jc_recital_choir_11_18.m4a">
    </audio>`
  );

// RWM Nirvana Music - Yellow
L.circleMarker([47.66171, -122.30655], {
  color: YELLOW,
})
  .addTo(map)
  .bindPopup(
    `<h3>Ruth WM: Nirvana House Music</h3>
I was filled with anxiety, briskly walking alone late at night. When I turned the corner I felt the low beat of house music, heard the lyrics of a familiar song, and felt warm chatter that accompanied it. Filled with subtle joy, I no longer felt completely alone and comfortably walked the rest of the way home.
<br><br>
I rarely listen to house music, and it rarely brings me joy, but that night it provided warm sense of safety.       
<br><br>
<audio controls>
        <source src="audio/rwm_nirvana_house_music.m4a">
    </audio>`
  );
