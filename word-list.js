const options = {
  random: [
    {
      word: "guitar",
      hint: "A musical instrument with strings.",
    },
    {
      word: "oxygen",
      hint: "A colorless, odorless gas essential for life.",
    },
    {
      word: "mountain",
      hint: "A large natural elevation of the Earth's surface.",
    },
    {
      word: "painting",
      hint: "An art form using colors on a surface to create images or expression.",
    },
    {
      word: "astronomy",
      hint: "The scientific study of celestial objects and phenomena.",
    },
    {
      word: "football",
      hint: "A popular sport played with a spherical ball.",
    },
    {
      word: "chocolate",
      hint: "A sweet treat made from cocoa beans.",
    },
    {
      word: "butterfly",
      hint: "An insect with colorful wings and a slender body.",
    },
    {
      word: "history",
      hint: "The study of past events and human civilization.",
    },
    {
      word: "pizza",
      hint: "A savory dish consisting of a round, flattened base with toppings.",
    },
    {
      word: "jazz",
      hint: "A genre of music characterized by improvisation and syncopation.",
    },
    {
      word: "camera",
      hint: "A device used to capture and record images or videos.",
    },
    {
      word: "diamond",
      hint: "A precious gemstone known for its brilliance and hardness.",
    },
    {
      word: "adventure",
      hint: "An exciting or daring experience.",
    },
    {
      word: "science",
      hint: "The systematic study of the structure and behavior of the physical and natural world.",
    },
    {
      word: "bicycle",
      hint: "A human-powered vehicle with two wheels.",
    },
    {
      word: "sunset",
      hint: "The daily disappearance of the sun below the horizon.",
    },
    {
      word: "coffee",
      hint: "A popular caffeinated beverage made from roasted coffee beans.",
    },
    {
      word: "dance",
      hint: "A rhythmic movement of the body often performed to music.",
    },
    {
      word: "galaxy",
      hint: "A vast system of stars, gas, and dust held together by gravity.",
    },
  ],

  movies: [
    {
      word: "inception",
      hint: "A sci-fi thriller about dreams within dreams",
    },
    {
      word: "titanic",
      hint: "A historical romance set aboard a doomed ship",
    },
    {
      word: "avatar",
      hint: "A sci-fi epic set on the alien world of Pandora",
    },
    {
      word: "Gladiator",
      hint: "A historical drama about a Roman general turned gladiator",
    },
    {
      word: "Matrix",
      hint: "A hacker discovers a reality-bending conspiracy",
    },
    {
      word: "Jaws",
      hint: "A thriller about a killer shark",
    },
    {
      word: "Rocky",
      hint: "A story about an underdog boxer",
    },
    {
      word: "Frozen",
      hint: "A Disney animated movie about two royal sisters",
    },
    {
      word: "Shrek",
      hint: "A comedic animated tale about an ogre",
    },
    {
      word: "Up",
      hint: "A heartwarming animated story about an old man and a young boy",
    },
    {
      word: "Pulp Fiction",
      hint: "A crime drama with intertwined stories",
    },
    {
      word: "The Godfather",
      hint: "A crime saga centered around a mafia family",
    },
    {
      word: "Forrest Gump",
      hint: "A man with a low IQ unintentionally influences major events in history",
    },
    {
      word: "Interstellar",
      hint: "A space exploration film involving wormholes and black holes",
    },
    {
      word: "The Lion King",
      hint: "A Disney animated film about a lion cub's journey",
    },
    {
      word: "Joker",
      hint: "A dark origin story of a famous comic book villain",
    },
    {
      word: "Parasite",
      hint: "A Korean film about class struggles",
    },
    {
      word: "Coco",
      hint: "A Disney/Pixar movie about family and traditions in Mexico",
    },
    { word: "Toy Story", hint: "A story about the secret life of toys" },
    {
      word: "Black Panther",
      hint: "A Marvel superhero film set in the fictional African nation of Wakanda",
    },
  ],

  foods: [
    {
      word: "Pizza",
      hint: "A popular Italian dish with a round flat base and various toppings",
    },
    {
      word: "Sushi",
      hint: "A Japanese dish consisting of vinegared rice and raw fish",
    },
    {
      word: "Tacos",
      hint: "A Mexican dish with a folded tortilla and filling",
    },
    {
      word: "Burger",
      hint: "A sandwich consisting of a patty placed inside a sliced bun",
    },
    {
      word: "Pasta",
      hint: "An Italian dish made from dough and often served with sauce",
    },
    {
      word: "Falafel",
      hint: "A Middle Eastern deep-fried ball made from chickpeas or fava beans",
    },
    {
      word: "Curry",
      hint: "A flavorful dish often made with a blend of spices and served with rice",
    },
    {
      word: "Paella",
      hint: "A Spanish rice dish typically made with seafood and saffron",
    },
    {
      word: "Dim Sum",
      hint: "A variety of Chinese small dishes often served in steamer baskets",
    },
    {
      word: "Churros",
      hint: "A fried dough pastry usually coated in sugar",
    },
    {
      word: "Croissant",
      hint: "A buttery, flaky French pastry",
    },
    {
      word: "Kimchi",
      hint: "A spicy Korean fermented vegetable dish",
    },
    {
      word: "Biryani",
      hint: "A South Asian mixed rice dish made with spices, rice, and meat",
    },
    {
      word: "Dumplings",
      hint: "Small pockets of dough filled with meat, vegetables, or sweets",
    },
    {
      word: "Ramen",
      hint: "A Japanese noodle soup dish",
    },
    {
      word: "Gelato",
      hint: "An Italian style of ice cream",
    },
    {
      word: "Goulash",
      hint: "A Hungarian stew of meat and vegetables",
    },
    {
      word: "Pierogi",
      hint: "Polish dumplings filled with meat, cheese, or potatoes",
    },
    {
      word: "Empanada",
      hint: "A pastry filled with meat, cheese, or other ingredients",
    },
    {
      word: "Baklava",
      hint: "A sweet Middle Eastern dessert made with layers of pastry and nuts",
    },
  ],

  animals: [
    {
      word: "chameleon",
      hint: "Known for its ability to camouflage and change color to match its surroundings.",
    },
    {
      word: "elephant",
      hint: "Largest land animal.",
    },
    {
      word: "snail",
      hint: "A slow moving creature with slime.",
    },
    {
      word: "tortoise",
      hint: "Slow and steady wins the race.",
    },
    {
      word: "giraffe",
      hint: "Hey, I can see the whole world.",
    },
    {
      word: "hippopotamus",
      hint: "Largest sea animal.",
    },
    {
      word: "frog",
      hint: "I croak and I can be poisonous",
    },
  ],

  countries: [
    {
      word: "Nigeria",
      hint: "Most populous country in Africa",
    },
    {
      word: "Japan",
      hint: "Island nation known for sushi and anime",
    },
    {
      word: "Brazil",
      hint: "Home of the Amazon rainforest and carnival",
    },
    {
      word: "Canada",
      hint: "Second largest country by area",
    },
    {
      word: "India",
      hint: "Second most populous country in the world",
    },
    {
      word: "Australia",
      hint: "Continent and country known for kangaroos",
    },
    {
      word: "Egypt",
      hint: "Country famous for ancient pyramids",
    },
    {
      word: "France",
      hint: "Home of the Eiffel Tower",
    },
    {
      word: "Kenya",
      hint: "Known for its wildlife safaris",
    },
    {
      word: "Italy",
      hint: "Boot-shaped European country",
    },
    {
      word: "China",
      hint: "Country with the Great Wall",
    },
    {
      word: "Russia",
      hint: "Largest country in the world by area",
    },
    {
      word: "Greece",
      hint: "Birthplace of democracy",
    },
    {
      word: "Spain",
      hint: "European country known for flamenco",
    },
    {
      word: "South Africa",
      hint: "Country known for its diverse culture and Nelson Mandela",
    },
    {
      word: "Argentina",
      hint: "Country famous for tango and soccer",
    },
    {
      word: "Turkey",
      hint: "Where Europe meets Asia",
    },
    {
      word: "Mexico",
      hint: "Country known for tacos and mariachi",
    },
    {
      word: "Thailand",
      hint: "Southeast Asian country known for its beaches and temples",
    },
    {
      word: "South Korea",
      hint: "Country known for K-pop and technology",
    },
  ],

  bioinformatics: [
    {
      word: "biocoding",
      hint: "The process of encoding or classifying biological organisms.",
    },
    {
      word: "codons",
      hint: "Three-letter sequences of DNA or RNA that specify a particular amino acid in protein synthesis.",
    },
    {
      word: "dna",
      hint: "The molecules that carry the genetic code and are fundamental to life.",
    },
    {
      word: "classification",
      hint: "Grouping organisms based on shared characteristics, which can include biocodes.",
    },
    {
      word: "taxonomy",
      hint: "The science of classifying organisms.",
    },
    {
      word: "genes",
      hint: "The basic units of heredity, responsible for transmitting traits from one generation to the next.",
    },
  ],

  sports: [
    {
      word: "Soccer",
      hint: "A game played with a round ball and two goals",
    },
    {
      word: "Basketball",
      hint: "A sport involving shooting hoops",
    },
    {
      word: "Tennis",
      hint: "A racquet sport played on a court",
    },
    {
      word: "Cricket",
      hint: "A bat-and-ball game popular in South Asia",
    },
    {
      word: "Rugby",
      hint: "A contact sport involving an oval ball",
    },
    {
      word: "Baseball",
      hint: "A bat-and-ball game played on a diamond-shaped field",
    },
    {
      word: "Golf",
      hint: "A game played by hitting a small ball into a hole",
    },
    {
      word: "Boxing",
      hint: "A combat sport involving fists",
    },
    {
      word: "Swimming",
      hint: "A sport involving moving through water",
    },
    {
      word: "Athletics",
      hint: "Track and field events",
    },
    {
      word: "Badminton",
      hint: "A racquet sport played with a shuttlecock",
    },
    {
      word: "Cycling",
      hint: "A sport involving riding bicycles",
    },
    {
      word: "Skating",
      hint: "A sport involving gliding on wheels or blades",
    },
    {
      word: "Hockey",
      hint: "A game played on ice or field with sticks",
    },
    {
      word: "Volleyball",
      hint: "A sport played over a net with a ball",
    },
    {
      word: "Table Tennis",
      hint: "A smaller version of tennis played on a table",
    },
    {
      word: "Wrestling",
      hint: "A combat sport involving grappling",
    },
    {
      word: "Surfing",
      hint: "A water sport involving riding waves",
    },
    {
      word: "Karate",
      hint: "A martial art originating in Japan",
    },
    {
      word: "Darts",
      hint: "A precision sport involving small projectiles",
    },
  ],
};