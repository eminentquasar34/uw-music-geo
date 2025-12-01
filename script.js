/**
 * Constants for colors
 */
var GRAY = "#808080"; // Indifferent
var ORANGE = "#FFAC1C"; // Bright Orange for anxiety
var YELLOW = "#FFEA00"; // Bright yellow for happy
var GREEN = "#808000"; // Olive green for disgust
var RED = "#C41E3A"; // Cardinal red for anger
var BLUE = "#0047AB"; // Cobalt blue for sadness
var PINK = "#FF69B4"; // Hot pink for embarrassment

var map = L.map("map").setView([47.643, -122.303], 13.2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png", {
  attribution: "©OpenStreetMap, ©Carto",
}).addTo(map);

const hexToColor = new Map();
hexToColor.set("#808080", "GRAY");
hexToColor.set("#FFAC1C", "ORANGE");
hexToColor.set("#FFEA00", "YELLOW");
hexToColor.set("#808000", "GREEN");
hexToColor.set("#C41E3A", "RED");
hexToColor.set("#0047AB", "BLUE");
hexToColor.set("#FF69B4", "PINK");

document.getElementById("colorFilter").addEventListener("change", updateMap);
document.getElementById("userFilter").addEventListener("change", updateMap);
function updateMap() {
  const selectedColor = document.getElementById("colorFilter").value;
  const selectedUser = document.getElementById("userFilter").value;
  markers.forEach((m) => map.removeLayer(m.layer));

  markers
    .filter(
      (m) =>
        (selectedColor === "all" || hexToColor.get(m.color) === selectedColor) &&
        (selectedUser === "all" || m.user === selectedUser)
    )
    .forEach((m) => m.layer.addTo(map));
}

const markers = [
  {
    user: "Daniel Z",
    title: "Walking in U-Village",
    color: YELLOW,
    coordinates: [47.66216, -122.30001],
    description: `I was walking through U-Village on the way home! I was pretty nervous because 
    I had a lot of homework that I had to do when I get home, but the music was a nice break!`,
    audio: "uvill1.m4a",
  },
  {
    user: "Daniel Z",
    title: "Walking in Red Square",
    color: GRAY,
    coordinates: [47.65579, -122.30921],
    description: `There was a band playing in the distance at Red Square! I was walking to do my 
    CCG #6 and the music was in the faint background, so I felt indifferent.`,
    audio: "redsquareband.m4a",
  },
  {
    user: "Jordan C",
    title: "Recital Choir",
    color: YELLOW,
    coordinates: [47.65755, -122.30567],
    description: `I am a member of UW Recital Choir. This is a clip from our rehearsal. 
    <br><br>
    Singing and being surrounded by music made me feel happy. I love being immersed in community and
     collaboratively creating something beautiful. The song from this clip is called "Hope." `,
    audio: "jc_recital_choir_11_18.m4a",
  },
  {
    user: "Ruth WM",
    title: "Nirvana House Music",
    color: YELLOW,
    coordinates: [47.66171, -122.30655],
    description: `I was filled with anxiety, briskly walking alone late at night. When I turned
     the corner I felt the low beat of house music, heard the lyrics of a familiar song, and felt
      warm chatter that accompanied it. Filled with subtle joy, I no longer felt completely alone
       and comfortably walked the rest of the way home.
<br><br>
I rarely listen to house music, and it rarely brings me joy, but that night it provided warm 
sense of safety.`,
    audio: "rwm_nirvana_house_music.m4a",
  },
  {
    user: "Jasmine Z",
    title: "Amazon Truck",
    color: GRAY,
    coordinates: [47.65601, -122.31499],
    description: `I encountered an Amazon track blasting Bollywood music outside of Lander Hall
     while walking home. While loud and slightly jarring since it was late at night, the music
      highlighted the juxtaposition between my exhausted mental state and the delivery driver's
       energetic enthusiasm. The tempo and sheer volume of the music seemed to be the momentum
        that was powering the driver through his late-night route.    
`,
    audio: "jz_amazon_truck.m4a",
  },
  {
    user: "Jasmine Z",
    title: "Happy Birthday!",
    color: YELLOW,
    coordinates: [47.65922, -122.30865],
    description: `Before an Asian Business Student Association meeting in PACCAR Hall, officers
     spontaneously sang Happy Birthday to the president of the club and presented him with a cake.
      It was heartwarming to see how the club has transformed professional relationships into 
      lasting friendships.
`,
    audio: "jz_happy_birthday.m4a",
  },
  {
    user: "Jordan C",
    title: "Loud Music From Speaker",
    color: GREEN,
    coordinates: [47.66363, -122.31316],
    description: `(Garbled sample taken from low-quality earbud microphone) <br><br>
    I was walking home and heard this loud music blasting from the people in front of me. One of 
    them had a speaker in their backpack. I didn't mind the music type, but the volume was too 
    loud for me, and it made me frustrated. I'm sensitive to loud sounds, and it irks me when 
    people are insensitive and do things like play loud music or rev their engines in public.
`,
    audio: "jc_sidewalk_speaker.m4a",
  },
  {
    user: "Jordan C",
    title: "Climbing Gym",
    color: GRAY,
    coordinates: [47.66153, -122.31294],
    description: `I took this sample when I was climbing at the climbing gym. When I'm climbing, 
    I get very in-the-zone. I never really notice the music playing because of my focus. I wasn't 
    paying any attention to the music and don't think it had any effect on me.
`,
    audio: "jc_climbing_gym.m4a",
  },
  {
    user: "Jordan C",
    title: "Guitar for Mom",
    color: YELLOW,
    coordinates: [47.66339, -122.31389],
    description: `This quarter, I purchased a guitar. I've been trying to learn Landslide by 
    Fleetwood Mac. This audio clip is from one of my initial attempts at singing and playing 
    at the same time. I sent it to my mom. Although learning an instrument can be difficult, 
    playing guitar and singing in my room always feels peaceful and happy.`,
    audio: "jc_guitar_for_mom.m4a",
  },
  {
    user: "Jordan C",
    title: "Ed Sheeran in Safeway",
    color: RED,
    coordinates: [47.66431, -122.31392],
    description: `(Garbled sample taken from low-quality earbud microphone)<br><br>
    I heard Perfect by Ed Sheeran playing at the grocery store. I do not like this 
    song, and I do not like Ed Sheeran's music (just personal preference). Hearing this song 
    made me upset and annoyed.`,
    audio: "jc_ed_sheeran_safeway.m4a",
  },
  {
    user: "Jasmine Z",
    title: "Chimes in Red Square",
    color: YELLOW,
    coordinates: [47.65587, -122.30977],
    description: `While walking through Red Square on my way to Odegaard, I heard disembodied 
    chimes ringing out into the evening. They sounded too clear to be coming from inside a 
    building, but I couldn't see anyone playing them from outside either. While slightly eerie, 
    the chimes were calming and reminded me of the spontaneity of life (especially in nodes of 
    human activity).`,
    audio: "jz_chimes_in_red_square.m4a",
  },
  {
    user: "Jasmine Z",
    title: "Percussion Performance in the Quad",
    color: BLUE,
    coordinates: [47.65707, -122.30754],
    description: `I saw this musical performance as I was walking through the Quad. There were 3-4 
    people on the lawn playing various types of hand percussion and bells while another person sang. 
    I believe they were supporting a cause/organization/person, but I didn't pay much attention 
    because I was in a rush. As I walked away, I was reminded of the many other things that I 
    haven't been able to make time for in college, including playing music (especially because 
    like the performers, I also play percussion).`,
    audio: "jz_percussion_performance_in_quad.m4a",
  },
  {
    user: "Jasmine Z",
    title: "Phantom of the Opera",
    color: YELLOW,
    coordinates: [47.6557, -122.31722],
    description: `I\'ve always loved listening to musical theater music and the soundtrack from The 
      Phantom of the Opera is my favorite by far. This clip is me listening to "The Point 
      of No Return" while taking a break from studying.`,
    audio: "jz_phantom_of_the_opera.m4a",
  },
  {
    user: "Ruth WM",
    title: "Avole on the Ave",
    color: PINK,
    coordinates: [47.66289, -122.31339],
    description: `I was walking down the Ave zoned out, thinking about whatever my to do list, when I was 
      drawn to music bouncing out of a nearby coffee shop. Upon entry, I saw a DJ booth nestled 
      behind the counter next to the espresso machine. It was a total vibe, but I stuck out 
      like a sore thumb.`,
    audio: "rwm_avole_on_ave.m4a",
  },
  {
    user: "Ruth WM",
    title: "Car Mechanics Pop Up Shop",
    color: YELLOW,
    coordinates: [47.65368, -122.31386],
    description: `If I am ever walking through this area late at night, a makeshift car mechanics business 
      will set up shop for the night. Generational families will gather bringing food, car 
      parts, and hispanic culture. Hearing the accents and music that I grew up is like music 
      to my ears.`,
    audio: "rwm_car_mechanics_pop_up_shop.m4a",
  },
  {
    user: "Ruth WM",
    title: "Car Mechanics Pop Up Shop",
    color: YELLOW,
    coordinates: [47.65368, -122.31386],
    description:
      "If I am ever walking through this area late at night, a makeshift car mechanics business will set up shop for the night. Generational families will gather bringing food, car parts, and hispanic culture. Hearing the accents and music that I grew up is like music to my ears.",
    audio: "rwm_car_mechanics_pop_up_shop.m4a",
  },
  {
    user: "Ruth WM",
    title: "Harmonica Player",
    color: YELLOW,
    coordinates: [47.65552, -122.30449],
    description: `There was a pleasant harmonica player walking along this path on Saturday. They were 
      fiddling and exploring various sounds with the instrument before putting it away as it 
      started to rain. This shows how music can play small beautiful moments in other peoples' 
      day.`,
    audio: "rwm_harmonica_player.m4a",
  },
  {
    user: "Alexis M",
    title: "H-Mart Music",
    color: ORANGE,
    coordinates: [47.65892, -122.31307],
    description: `As I was pacing through Hmart's aisles looking for Goji beries, I came across fairly happy 
      music playing within the speakers of the store. This music brought me a sense of calm. While 
      I struggled to find what I was looking for, I felt soothed by the music.`,
    audio: "am_hmart_music.m4a",
  },
  {
    user: "Alexis M",
    title: "Rock and Roll in Mandarin Class",
    color: GRAY,
    coordinates: [47.6549, -122.30653],
    description: `To start off class this morning, my Mandarin teacher introduced different music genres and 
      their names in Chinese. We proceeded to listen to a variety of Rock and Roll songs to 
      analyze the lyrics. What a fun and engaging way to start the day!`,
    audio: "am_rock_and_roll_chinese_class.m4a",
  },
  {
    user: "Alexis M",
    title: "Rain in Red Square",
    color: YELLOW,
    coordinates: [47.6559, -122.30949],
    description: `On my walk to class, I listened closely to the gentle patter of rain on my umbrella. It's 
      quiet, soothing rhythm that caught my ear.`,
    audio: "am_rain_in_red_square.m4a",
  },
  {
    user: "Alexis M",
    title: "Xavier So Based Concert",
    color: YELLOW,
    coordinates: [47.6139, -122.31968],
    description: `An excerpt from a concert featuring a smaller artist, Xavier So Based, just before he 
      performed his song, "Double Whammy." As one of his most popular tracks, the crowd buzzed with 
      excitement. Voices shouted, \'"I love you Xav!"`,
    audio: "am_xavier_so_based_concert.m4a",
  },
  {
    user: "Alexis M",
    title: "Elevator Music",
    color: GRAY,
    coordinates: [47.66208, -122.31449],
    description: `On my way down to class, the elevator music lifted my spirits and gave me a 
    brief pause from the morning chaos ... an intentional moment before my first class of the day.`,
    audio: "am_elevator_music.m4a",
  },
  {
    user: "Daniel Z",
    title: "QFC Grocery Store Music",
    color: YELLOW,
    coordinates: [47.66234, -122.29631],
    description: `While buying my groceries, there was a speaker playing pop music on the ceiling! It was 
      really relaxing and improved my shopping experience at QFC!`,
    audio: "dz_qfc_music.m4a",
  },
  {
    user: "Daniel Z",
    title: "Lofi During Quiz Section",
    color: GRAY,
    coordinates: [47.65459, -122.30739],
    description: `In my quiz section, my TA decided to play Lofi Thanksgiving music during work time. I was 
      busy doing my work, and did not really notice it playing in the background.`,
    audio: "dz_section_lofi.m4a",
  },
  {
    user: "Daniel Z",
    title: "Clash Royale Music",
    color: YELLOW,
    coordinates: [47.6652, -122.29883],
    description: `When hanging out with a friend, I heard him playing Clash Royale on his phone. 
    It is a game that brings my friend and I lots of joy (and sometimes anger)!`,
    audio: "dz_clash_royale.m4a",
  },
];

for (const marker of markers) {
  marker.layer = L.circleMarker(marker.coordinates, {
    radius: 15,
    color: marker.color,
  }).addTo(map).bindPopup(`
    <h3>${marker.user}: ${marker.title}</h3>
    ${marker.description}
    <br>
    <br>
    <audio controls>
      <source src="audio/${marker.audio}">
    </audio>
    `);
}
