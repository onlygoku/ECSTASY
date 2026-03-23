import { p } from "framer-motion/client";

export const EVENTS = [
  {
    id: '1',
    title: 'STUMPED SUPREMACY',
    description: 'The ultimate cricket showdown! Join us for a day of thrilling matches, fierce competition, and unforgettable moments on the pitch. Whether you\'re a player or a fan, this event is not to be missed.',
    date: '2026-04-09',
    category: 'sports',
    registrationLink: 'https://forms.gle/aXBZpeFNmZeTupez7',
    poster: '/posters/STUMPED SUPREMACY_.png'  
  },
  {
    id: '2',
    title: 'FOOTRAGE',
    description: 'Get ready for an adrenaline-pumping football extravaganza! FOOTRAGE is where passion meets the pitch, bringing together teams from across the campus for a day of intense matches, skillful play, and unforgettable moments.',
    date: '2026-04-09',
    category: 'sports',
    registrationLink: 'https://forms.gle/UAzH6tons7umFPE4A',
    poster: '/posters/FOOTRAGE_.png'
  },
  {
    id: '3',
    title: 'VOLTRIX',
    description: 'Experience the electrifying world of volleyball(boys) with VOLTRIX! This high-energy tournament brings together the best teams on campus for a day of intense matches, incredible spikes, and unforgettable moments on the court.',
    date: '2026-04-09',
    category: 'sports',
    registrationLink: 'https://forms.gle/8ksLBki7ZkqNHYeCA',
    poster: '/posters/VOLTRIX_.png' 
  },
  {
    id: '4',
    title: 'GULLY CRICKET',
    description: 'Girls! Get ready for an exciting day of gully cricket! Bring your teamfor a day of intense matches, skillful play, and unforgettable moments on the field.',
    date: '2026-04-09',
    category: 'sports',
    registrationLink: 'https://forms.gle/4SN8zJsLEE3P43e3A',
    poster: '/posters/GULLY CRICKET_.png'
  },
  {
    id: '5',
    title: 'VELOCITY VORTEX',
    description: 'Kho kho tournament.',
    date: '2026-04-10',
    category: 'sports',
    registrationLink: 'https://forms.gle/W1EZaAfb6HYWBqEY8',
    poster: '/posters/VELOCITY VORTEX_.png'
  },
  {
    id: '6',
    title: 'THROWMANTICS',
    description: 'Join us for an exciting day of throwing competitions! Showcase your skills and compete against the best throwball(girls) on the field.',
    date: '2026-04-10',
    category: 'sports',
    registrationLink: 'https://forms.gle/Z2qdz4uuJMYuVUCr8',
    poster: '/posters/THROWMANTICS_.png'
  },
  {
    id: '7',
    title: 'SPLIT FACES',
    description: 'Unleash your creativity and artistic flair at SPLIT FACES! This unique art event invites you to explore the fascinating world of face painting. Whether you\'re a seasoned artist or just looking to have fun, this event is the perfect opportunity to express yourself through vibrant colors and imaginative designs. Join us for a day of artistic exploration and let your creativity run wild!',
    date: '2026-04-08',
    category: 'art',
    registrationLink: 'https://forms.gle/E3JhmeSJA2ktrbCy5',
    poster: '/posters/SPLIT FACES_.png'
  },
  {
    id: '8',
    title: 'DISTORTED THREADS',
    description: 'Experience the thrill of fabric painting in this unique art competition. Showcase your creativity and skill as you paint the fabric to create stunning pieces of art.',
    date: '2026-04-10',
    category: 'art',
    registrationLink: 'https://forms.gle/BphgDpVwQ6PFSWjA6',
    poster: '/posters/DISTORTED THREADS_.png'
  },
  {
    id: '9',
    title: 'DEADLINE',
    description: '',
    date: '2026-04-09',
    category: 'technical',
    registrationLink: 'https://forms.gle/LAdQUPntq7DzPZuk9',
    poster: '/posters/DEADLINE_.png'
  },
  {
    id: '10',
    title: 'SAIYAN FLAG',
    description: 'A Drangon Ball Z inspired Catch the flag. Participants will be challenged to solve various cybersecurity puzzles and challenges to capture the "Saiyan Flag". This event is designed to test participants\' knowledge and skills in cybersecurity, including areas such as cryptography, cyber forensics, web exploitaiton and much more.',
    date: '2026-04-10',
    category: 'technical',
    registrationLink: 'https://forms.gle/nPnR888qLjqJiYEc9',
    poster: '/posters/SAIYAN FLAG_.png'
  },
  {
    id: '11',
    title: 'GLITCH IN THE MATRIX',
    description: 'Unleash your imagination and storytelling skills in "Glitch in the Matrix," a creative writing competition that invites you to explore the fascinating world of alternate realities and unexpected twists. Whether you\'re a seasoned writer or just looking to have fun with words, this event is the perfect opportunity to let your creativity run wild and craft captivating stories that challenge the boundaries of reality. Join us for a day of literary exploration and let your imagination soar!',
    date: '2026-04-08',
    category: 'literary',
    registrationLink: 'https://forms.gle/UgK1pi3NR2KU3LJp8',
    poster: '/posters/GLITCH IN THE MATRIX_.png'
  },
  {
    id: '12',
    title: 'THE TURNBOW TRAP',
    description: 'Extempore is a thrilling event that tests your quick thinking and eloquence. Participants will be given a random topic and a limited time to prepare a speech. It\'s a fantastic opportunity to showcase your public speaking skills, creativity, and ability to think on your feet. Join us for a day of spontaneous speeches and let your voice be heard!',
    date: '2026-04-09',
    category: 'literary',
    registrationLink: 'https://forms.gle/6dKtSe268vxuL21E6',
    poster: '/posters/THE TURNBOW TRAP_.png'
  },
  {
    id: '13',
    title: 'VISION UNBOUND',
    description: 'A captivating photography competition that celebrates the art of storytelling through images.',
    date: '2026-04-08',
    category: 'photography',
    registrationLink: 'https://forms.gle/KegQ1AfXGiqZVGxb7',
    poster: '/posters/VISION UNBOUND_.png'
  },
  {
    id: '14',
    title: 'REEL IT RIGHT',
    description: 'A reel making competition that challenges participants to create compelling stories within a limited timeframe.',
    date: '2026-04-10',
    category: 'photography',
    registrationLink: 'https://forms.gle/KCqmbKaJzvEAYkH58',
    poster: '/posters/REEL IT RIGHT_.png'
  },
  {
    id:'15',
    title: 'ATMAKATHAN',
    description: 'A vibrant and engaging solo performance competition that showcases the power of individual storytelling and artistic expression.',
    date: '2026-04-10',
    category: 'drama',
    registrationLink: 'https://forms.gle/kQ97g7ZBMwos9S1d9',
    poster: '/posters/ATMAKATHAN_.png'
  },
  {
    id: '16',
    title: 'MONCHO KOTHA',
    description: 'An enthralling group performance competition that celebrates the art of storytelling through dynamic and collaborative performances.',
    date: '2026-04-08',
    category: 'drama',
    registrationLink: 'https://forms.gle/rkERSPyaHAdY81w8A',
    poster: '/posters/MONCHO KOTHA.png'
  },
  {
    id: "17",
    title: "POTHER GORJON",
    description: "A powerful street play competition that brings raw stories to life through impactful performances. Participants engage audiences with socially relevant themes and expressive acting.",
    date: "2026-04-11",
    category: "drama",
    registrationLink: "https://forms.gle/tGKQMobZwq6n1rkA9",
    poster: "/posters/POTHER GORJON_.png"
  },
  {
    id: "18",
    title: "TORONGO",
    description: "An immersive audio play event where storytelling meets sound design. Participants create vivid narratives using voice, music, and effects to captivate listeners.",
    date: "2026-04-10",
    category: "drama",
    registrationLink: "https://forms.gle/k7z2f3Hu6eocC6RK7",
    poster: "/posters/TORONGO_.png"
  },
  {
    id: "19",
    title: "VEIL OF REALITY",
    description: "A stunning fashion show that blends creativity with expression. Contestants showcase unique styles while exploring themes that blur the line between illusion and reality.",
    date: "2026-04-11",
    category: "fashion",
    registrationLink: "https://forms.gle/coGPLXDRzVLRBtVLA",
    poster: "/posters/VEIL OF REALITY_.png"
  },
  {
    id: "20",
    title: "REBORN FROM RUINS",
    description: "A sustainable fashion competition that transforms waste into wearable art. Participants redefine style by turning discarded materials into innovative designs.",
    date: "2026-04-10",
    category: "fashion",
    registrationLink: "https://forms.gle/WQp2ADyewHHzLHAHA",
    poster: "/posters/REBORN FROM RUINS_.png"
  },
  {
    id: "21",
    title: "STEP VERSE",
    description: "A dynamic solo dance competition featuring both Eastern and Western styles. Dancers express their individuality through rhythm, technique, and creativity.",
    date: "2026-04-09",
    category: "dance",
    registrationLink: "https://forms.gle/JB3MWGAcZVT4FCuT8",
    poster: "/posters/STEP VERSE_.png"
  },
  {
    id: "22",
    title: "PARALLAX GROOVE",
    description: "A high-energy western group dance competition that emphasizes synchronization and stage presence. Teams compete with electrifying choreography and coordination.",
    date: "2026-04-08",
    category: "dance",
    registrationLink: "https://forms.gle/KJkXnxTmSrKBtZFa7",
    poster: "/posters/PARALLAX GROOVE_.png"
  },
  {
    id: "23",
    title: "AARADHYA",
    description: "A graceful eastern group dance competition celebrating tradition and storytelling through movement. Teams showcase cultural richness and expressive choreography.",
    date: "2026-04-11",
    category: "dance",
    registrationLink: "https://forms.gle/21NsDtNmHhpuuvHi8",
    poster: "/posters/AARADHYA_.png"
  },
  {
    id: "24",
    title: "RAAG ABYSS",
    description: "A soulful solo singing competition focused on Eastern music styles. Participants captivate the audience with melody, emotion, and vocal mastery.",
    date: "2026-04-08",
    category: "music",
    registrationLink: "https://forms.gle/XZLdbcUtzpdeXPPB8",
    poster: "/posters/RAAG ABYSS_.png"
  },
  {
    id: "25",
    title: "ECHOES IN REVERSE",
    description: "A solo western singing competition where voices take center stage. Contestants showcase their vocal range, control, and stage presence.",
    date: "2026-04-10",
    category: "music",
    registrationLink: "https://forms.gle/LL6qKVuV63GaUrqp6",
    poster: "/posters/ECHOES IN REVERSE_.png"
  },
  {
    id: "26",
    title: "PARALLEL RIOT",
    description: "An electrifying band competition where groups battle it out with powerful performances. Bands bring energy, originality, and musical synergy to the stage.",
    date: "2026-04-11",
    category: "music",
    registrationLink: "https://forms.gle/Tcr6u2cEJrKfi7FQA",
    poster: "/posters/PARALLEL RIOT_.png"
  },
  {
    id: "27",
    title: "THE LAUGH TRACK",
    description: "A stand-up comedy event where humor takes the spotlight. Comedians deliver punchlines, stories, and observations to keep the audience entertained.",
    date: "2026-04-11",
    category: "comedy",
    registrationLink: "https://forms.gle/ZvrDpvAyRNRJWd138",
    poster: "/posters/THE LAUGH TRACK.png"
  },
  {
    id: "28",
    title: "DUAL VERDICT",
    description: "A challenging turncoat debate where participants argue both sides of a motion. It tests critical thinking, adaptability, and persuasive skills.",
    date: "2026-04-08",
    category: "debate",
    registrationLink: "https://forms.gle/PJFnQzAjAeWD3C9n7",
    poster: "/posters/DUAL VERDICT_.png"
  },
  {
    id: "29",
    title: "MINDS IN MOTION",
    description: "A modern Oxford-style debate competition emphasizing logic and structured arguments. Teams engage in intellectual battles on thought-provoking topics.",
    date: "2026-04-10",
    category: "debate",
    registrationLink: "https://forms.gle/rEcQ4HXowsKVTyxYA",
    poster: "/posters/MINDS IN MOTION_.png"
  },
  {
    id: "30",
    title: "THE RIFT",
    description: "A competitive Valorant esports tournament where strategy meets precision. Teams battle it out in intense matches showcasing teamwork and skill.",
    date: "2026-04-08",
    category: "esports",
    registrationLink: "https://forms.gle/YHVwYDMnHQGYpVjh6",
    poster: "/posters/THE RIFT_.png"
  },
  {
    id: "31",
    title: "BATTLE OF CAMPUSES",
    description: "A high-stakes BGMI tournament bringing together the best campus gamers. Players compete for glory through tactical gameplay and fast-paced action.",
    date: "2026-04-10",
    category: "esports",
    registrationLink: "https://forms.gle/XvKBcSF3nqVSVwTS7",
    poster: "/posters/BATTLE OF CAMPUSES .png"
  }
];