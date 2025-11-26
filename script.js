/**
 * Constants for colors
 */
var GRAY = "#808080"; // Indifferent
var ORANGE = "#FFBF00"; // N/A
var YELLOW = "#FFEA00"; // Bright yellow for happy
var GREEN = "#808000"; // Olive green for disgust
var RED = "#C41E3A"; // Cardinal red for anger
var BLUE = "#0047AB"; // Cobalt blue for sadness
var PINK = "#FF69B4"; // Hot pink for embarrassment

var map = L.map("map").setView([47.643, -122.303], 13.2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png", {
  attribution: "©OpenStreetMap, ©Carto",
}).addTo(map);

L.circleMarker([47.66216, -122.30001], {
  radius: 15,
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
  radius: 15,
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
  radius: 15,
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
  radius: 15,
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

// JZ Amazon Truck
L.circleMarker([47.65601, -122.31499], {
  color: GRAY,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jasmine Z: Amazon Truck</h3>
I encountered an Amazon track blasting Bollywood music outside of Lander Hall while walking home. While loud and slightly jarring since it was late at night, the music highlighted the juxtaposition between my exhausted mental state and the delivery driver's energetic enthusiasm. The tempo and sheer volume of the music seemed to be the momentum that was powering the driver through his late-night route.    
<br><br>
<audio controls>
        <source src="audio/jz_amazon_truck.m4a">
    </audio>`);

// JZ Happy Birthday
L.circleMarker([47.65922, -122.30865], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jasmine Z: Happy Birthday</h3>
Before an Asian Business Student Association meeting in PACCAR Hall, officers spontaneously sang Happy Birthday to the president of the club and presented him with a cake. It was heartwarming to see how the club has transformed professional relationships into lasting friendships.
<br><br>
<audio controls>
        <source src="audio/jz_happy_birthday.m4a">
    </audio>`);

// JC Loud Music from Speaker
L.circleMarker([47.66363, -122.31316], {
  color: GREEN,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jordan C: Loud Music From Speaker</h3>
(Garbled sample taken from low-quality earbud microphone)
<br><br>
I was walking home and heard this loud music blasting from the people in front of me. One of them had a speaker in their backpack. I didn't mind the music type, but the volume was too loud for me, and it made me frustrated. I'm sensitive to loud sounds, and it irks me when people are insensitive and do things like play loud music or rev their engines in public.
    <br><br>
  <audio controls>
          <source src="audio/jc_sidewalk_speaker.m4a">
      </audio>`);

// JC Climbing Gym
L.circleMarker([47.66153, -122.31294], {
  color: GRAY,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jordan C: Climbing Gym</h3>
I took this sample when I was climbing at the climbing gym. When I'm climbing, I get very in-the-zone. I never really notice the music playing because of my focus. I wasn't paying any attention to the music and don't think it had any effect on me.      <br><br>
    <audio controls>
            <source src="audio/jc_climbing_gym.m4a">
        </audio>`);

// JC Guitar for Mom
L.circleMarker([47.66339, -122.31389], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jordan C: Guitar for Mom</h3>
This quarter, I purchased a guitar. I've been trying to learn Landslide by Fleetwood Mac. This audio clip is from one of my initial attempts at singing and playing at the same time. I sent it to my mom. Although learning an instrument can be difficult, playing guitar and singing in my room always feels peaceful and happy.
      <audio controls>
              <source src="audio/jc_guitar_for_mom.m4a">
          </audio>`);

// JC Ed Sheeran in Safeway
L.circleMarker([47.66431, -122.31392], {
  color: RED,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jordan C: Ed Sheeran in Safeway</h3>
(Garbled sample taken from low-quality earbud microphone)
<br><br>
I heard Perfect by Ed Sheeran playing at the grocery store. I do not like this song, and I do not like Ed Sheeran's music (just personal preference). Hearing this song made me upset and annoyed.        
<br><br>
<audio controls>
                <source src="audio/jc_ed_sheeran_safeway.m4a">
            </audio>`);

// JZ Chimes in Red Square
L.circleMarker([47.65587, -122.30977], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jasmine Z: Chimes in Red Square</h3>
While walking through Red Square on my way to Odegaard, I heard disembodied chimes ringing out into the evening. They sounded too clear to be coming from inside a building, but I couldn't see anyone playing them from outside either. While slightly eerie, the chimes were calming and reminded me of the spontaneity of life (especially in nodes of human activity).
<br><br>
<audio controls>                  
<source src="audio/jz_chimes_in_red_square.m4a">
              </audio>`);

// JZ Percussion Performance in Red Square
L.circleMarker([47.65707, -122.30754], {
  color: BLUE,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jasmine Z: Percussion Performance in the Quad</h3>
I saw this musical performance as I was walking through the Quad. There were 3-4 people on the lawn playing various types of hand percussion and bells while another person sang. I believe they were supporting a cause/organization/person, but I didn't pay much attention because I was in a rush. As I walked away, I was reminded of the many other things that I haven't been able to make time for in college, including playing music (especially because like the performers, I also play percussion).
<br><br>
<audio controls>    
<source src="audio/jz_percussion_performance_in_quad.m4a">
              </audio>`);

// JZ Phantom of the Opera
L.circleMarker([47.6557, -122.31722], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Jasmine Z: Phantom of the Opera</h3>
I've always loved listening to musical theater music and the soundtrack from The Phantom of the Opera is my favorite by far. This clip is me listening to "The Point of No Return" while taking a break from studying. 
  <br><br>
  <audio controls>    
  <source src="audio/jz_phantom_of_the_opera.m4a">
                </audio>`);

// RWM Avole on the Ave
L.circleMarker([47.66289, -122.31339], {
  color: PINK,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Ruth WM: Avole on the Ave</h3>
I was walking down the Ave zoned out, thinking about whatever my to do list, when I was drawn to music bouncing out of a nearby coffee shop. Upon entry, I saw a DJ booth nestled behind the counter next to the espresso machine. It was a total vibe, but I stuck out like a sore thumb.
    <br><br>
    <audio controls>    
    <source src="audio/rwm_avole_on_ave.m4a">
                  </audio>`);

// RWM Car Mechanics Pop Up Shop
L.circleMarker([47.65368, -122.31386], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Ruth WM: Car Mechanics Pop Up Shop</h3>
If I am ever walking through this area late at night, a makeshift car mechanics business will set up shop for the night. Generational families will gather bringing food, car parts, and hispanic culture. Hearing the accents and music that I grew up is like music to my ears.
    <br><br>
    <audio controls>    
    <source src="audio/rwm_car_mechanics_pop_up_shop.m4a">
                  </audio>`);

// RWM Farmers Market Live Music
L.circleMarker([47.66582, -122.3129], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Ruth WM: Farmers Market Live Music</h3>
    Every Saturday busker's scatter across U-District's farmer's market giving the environment life. For customer's like me, this music often blends into the background of the experience. It is only when they stop, that we remember they were ever there. 
    <br><br>
    <audio controls>
    <source src="audio/rwm_farmers_market_live_music.m4a">
    </audio>`);

// RWM Harmonica Player
L.circleMarker([47.65552, -122.30449], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Ruth WM: Harmonica Player</h3>
There was a pleasant harmonica player walking along this path on Saturday. They were fiddling and exploring various sounds with the instrument before putting it away as it started to rain. This shows how music can play small beautiful moments in other peoples' day.    
    <br><br>
    <audio controls>
    <source src="audio/rwm_harmonica_player.m4a">
    </audio>`);

// AM H-Mart Music
L.circleMarker([47.65892, -122.31307], {
  color: ORANGE,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Alexis M: H-Mart Music</h3>
    As I was pacing through Hmart's aisles looking for Goji beries, I came across fairly happy music playing within the speakers of the store. This music brought me a sense of calm. While I struggled to find what I was looking for, I felt soothed by the music.
    <br><br>
    <audio controls>
    <source src="audio/am_hmart_music.m4a">
    </audio>
    `);

L.circleMarker([47.6549, -122.30653], {
  color: GRAY,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Alexis M: Rock and Roll in Mandarin Class</h3>
    To start off class this morning, my Mandarin teacher introduced different music genres and their names in Chinese. We proceeded to listen to a variety of Rock and Roll songs to analyze the lyrics. What a fun and engaging way to start the day!
    <br><br>
    <audio controls>
    <source src="audio/am_rock_and_roll_chinese_class.m4a>
    </audio>`);

L.circleMarker([47.66208, -122.31449], {
  color: GRAY,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Alexis M: Elevator Music</h3>
On my way down to class, the elevator music lifted my spirits and gave me a brief pause from the morning chaos ... an intentional moment before my first class of the day.
    <br><br>
    <audio controls>
    <source src="audio/am_elevator_music.m4a>
    </audio>`);

L.circleMarker([47.6559, -122.30949], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Alexis M: Rain in Red Square</h3>
    On my walk to class, I listened closely to the gentle patter of rain on my umbrella. It's quiet, soothing rhythm that caught my ear.
    <br><br>
    <audio controls>
    <source src="audio/am_rain_in_red_square.m4a">
    </audio>
    `);

L.circleMarker([47.6139, -122.31968], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Alexis M: Xavier So Based Concert</h3>
An excerpt from a concert featuring a smaller artist, Xavier So Based,  just before he performed his song, "Double Whammy." As one of his most popular tracks, the crowd buzzed with excitement. Voices shouted, '"I love you Xav!"
        <br><br>
        <audio controls>
        <source src="audio/am_xavier_so_based_concert.m4a">
        </audio>
        `);

L.circleMarker([47.66234, -122.29631], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Daniel Z: QFC Grocery Store Music</h3>
    While buying my groceries, there was a speaker playing pop music on the ceiling! It was really relaxing and improved my shopping experience at QFC!
    <br><br>
    <audio controls>
    <source src="audio/dz_qfc_music.m4a">
    </audio>
    `);

L.circleMarker([47.65459, -122.30739], {
  color: GRAY,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Daniel Z: Lofi During Quiz Section</h3>
    In my quiz section, my TA decided to play Lofi Thanksgiving music during work time. I was busy doing my work, and did not really notice it playing in the background.
    <br><br>
    <audio controls>
    <source src="audio/dz_section_lofi.m4a">
    </audio>
    `);

L.circleMarker([47.6652, -122.29883], {
  color: YELLOW,
  radius: 15,
}).addTo(map).bindPopup(`<h3>Daniel Z: Clash Royale Music</h3>
        When hanging out with a friend, I heard him playing Clash Royale on his phone. It is a game that brings my friend and I lots of joy (and sometimes anger)! 
        <audio controls>
        <source src="audio/dz_clash_royale.m4a">
        </audio>
        `);
