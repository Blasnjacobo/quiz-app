/* eslint-disable no-undef */
import Science from '../assets/Science.jpg'
import Sports from '../assets/Sports.jpg'
import Geography from '../assets/Geography.jpg'
import History from '../assets/History.jpg'
import Art from '../assets/Art.jpg'
import Technology from '../assets/Technology.jpg'

export const imgs = [
  Science,
  Sports,
  Geography,
  History,
  Art,
  Technology
]

export const categories = [
  { category: 'Science', img: Science, color: 'from-red-500 to-pink-500' },
  { category: 'Sports', img: Sports, color: 'from-orange-500 to-brown-500' },
  { category: 'Geography', img: Geography, color: 'from-purple-500 to-pink-500' },
  { category: 'History', img: History, color: 'from-red-500 to-orange-500' },
  { category: 'Art', img: Art, color: 'from-gray-500 to-blue-500' },
  { category: 'Technology', img: Technology, color: 'from-blue-500 to-yellow-500' }
]

export const questions = [
  {
    id: 1,
    difficulty: 'Easy',
    question: 'Who is the author of the book A Brief History of Time: From the Big Bang to Black Holes?',
    category: 'Science',
    correct_answer:
    'Stephen Hawking',
    incorrect_answers: [
      'Michio Kaku',
      'Neil deGrasse Tyson',
      'Brian Greene'
    ]
  },
  {
    id: 2,
    difficulty: 'Medium',
    question: 'Which of the following technological developments came first?"?        ',
    category: 'Science',
    correct_answer: 'telescope',
    incorrect_answers: [
      'teletype',
      'telegraph',
      'telephone'
    ]
  },
  {
    id: 3,
    difficulty: 'Hard',
    question: 'Who is known for creating the binomial nomenclature of plants?',
    category: 'Science',
    correct_answer: 'Carl Linnaeus',
    incorrect_answers: ['Charles Darwin', 'Georges Cuvier', 'Theophrastus']
  },
  {
    id: 4,
    difficulty: 'Hard',
    question:
    'Who developed the carbon-14 dating technique of dating fossils and archaeological specimens?',
    category: 'Science',
    correct_answer: 'Willard Libby',
    incorrect_answers: ['James R. Arnold', 'Mario J. Molina', 'Leona Woods']
  },
  {
    id: 5,
    difficulty: 'Hard',
    question:
    'Which of these trees is known as a living fossil?',
    category: 'Science',
    correct_answer: 'Ginkgo',
    incorrect_answers: ['Lady fern', 'Cycas', 'Pinus']
  },
  {
    id: 6,
    difficulty: 'Medium',
    question: 'The only living reptiles that use a vertical limb posture in walking is:',
    category: 'Science',
    correct_answer: 'Crocodile',
    incorrect_answers: ['Turtle', 'Snake', 'Lizard']
  },
  {
    id: 7,
    difficulty: 'Hard',
    question: 'The male reproductive part of a flower is called the:',
    category: 'Science',
    correct_answer: 'Stamen',
    incorrect_answers: [
      'Pistil',
      'Stigma',
      'Carpel'
    ]
  },
  {
    id: 8,
    difficulty: 'Medium',
    question: 'The unit of measuring the depth of water is called:',
    category: 'Science',
    correct_answer: 'Fathom',
    incorrect_answers: [
      'Pascal',
      'Ampere',
      'Decibel'
    ]
  },
  {
    id: 9,
    difficulty: 'Easy',
    question: 'In physics, for every action there is an equal and opposite what?',
    category: 'Science',
    correct_answer: 'reaction',
    incorrect_answers: ['impaction', 'subtraction', 'distraction']
  },
  {
    id: 10,
    difficulty: 'Medium',
    question: 'What is the name of the first human ancestral fossil found in the year 1974?',
    category: 'Science',
    correct_answer: 'Lucy',
    incorrect_answers: [
      'Charles',
      'Otzi',
      'Timothy'
    ]
  },
  {
    id: 11,
    difficulty: 'Medium',
    question: 'The scientific study of fishes is known as:',
    category: 'Science',
    correct_answer: 'Ichthyology',
    incorrect_answers: ['Ornithology', 'Paleontology', 'Entomology']
  },
  {
    id: 12,
    difficulty: 'Easy',
    question: 'Who invented the World Wide Web?',
    category: 'Science',
    correct_answer:
    'A laboratory in Switzerland',
    incorrect_answers: [
      'the Federal Communications Commission',
      'Microsoft',
      'Apple'
    ]
  },
  {
    id: 13,
    difficulty: 'Easy',
    question:
    'The capacity of a material to deform permanently in response to stress is called:',
    category: 'Science',
    correct_answer: 'Ductility',
    incorrect_answers: ['Malleability', 'Reflectivity', 'Elasticity']
  },
  {
    id: 14,
    difficulty: 'Medium',
    question: 'Which of these gases solidifies to form dry ice?',
    category: 'Science',
    correct_answer: 'Carbon dioxide',
    incorrect_answers: ['Helium', 'Nitrous oxide', 'Sulfur dioxide']
  },
  {
    id: 15,
    difficulty: 'Easy',
    question: 'Faraday is a unit of measurement for:',
    category: 'Science',
    correct_answer: 'Electricity',
    incorrect_answers: [
      'Temperature',
      'Power',
      'Sound'
    ]
  },
  {
    id: 16,
    difficulty: 'Medium',
    question:
    'Who won the 10th Italian Open title in 2021?',
    category: 'Sports',
    correct_answer: 'Rafael Nadal',
    incorrect_answers: ['Dominic Thiem', 'Novack Djokovic', 'Stefanos Tsitsipas']
  },
  {
    id: 17,
    difficulty: 'Medium',
    question: 'Only three countries have won the Women’s Rugby World Cup- New Zealand, England, and who?',
    category: 'Sports',
    correct_answer: 'USA',
    incorrect_answers: ['Argentina', 'Romania', 'Georgia']
  },
  {
    id: 18,
    difficulty: 'Hard',
    question:
    'The term ‘Dolphin Kick’ is associated with which of the following games?',
    category: 'Sports',
    correct_answer: 'Swimming',
    incorrect_answers: ['Golf', 'Squash', 'Badminton']
  },
  {
    id: 19,
    difficulty: 'Medium',
    question: 'Where is the footballer Vinicious Jr from?',
    category: 'Sports',
    correct_answer: 'Brazil',
    incorrect_answers: [
      'Spain',
      'Argentina',
      'England'
    ]
  },
  {
    id: 20,
    difficulty: 'Easy',
    question: 'Which team won the Superbowl on february 2023',
    category: 'Sports',
    correct_answer: 'Kansas City Chiefs',
    incorrect_answers: [
      'Patriots New England',
      'Buffalo Bills',
      'LA Rams'
    ]
  },
  {
    id: 21,
    difficulty: 'Easy',
    question: 'Which of the following footballers has the world record for the highest goal scorer for a single club?',
    category: 'Sports',
    correct_answer: 'Lionel Messi',
    incorrect_answers: ['Cristiano Ronaldo SIIIUUU', 'Gerd Muller', 'Pele']
  },
  {
    id: 22,
    difficulty: 'Medium',
    question: 'What does 2022’s Super Bowl have in common with 2021’s Super Bowl?',
    category: 'Sports',
    correct_answer: 'One of the teams is playing in their home stadium',
    incorrect_answers: [
      'No fans will attend the Super Bowl event',
      'There will be no TV commercials in the US broadcast for the event',
      'Super Bowl will have the same referee as last year'
    ]
  },
  {
    id: 23,
    difficulty: 'Medium',
    question: 'Thomas Cup and Uber Cup are prestigious trophies of which sport?',
    category: 'Sports',
    correct_answer: 'Badminton',
    incorrect_answers: ['Lawn Tennis', 'Table Tennis', 'Golf']
  },
  {
    id: 24,
    difficulty: 'Medium',
    question: 'In which year did Roger Federer win his first Wimbledon title?',
    category: 'Sports',
    correct_answer: '2003',
    incorrect_answers: ['1997', '1998', '2001']
  },
  {
    id: 25,
    difficulty: 'Easy',
    question:
    'Where is going to take place the FIFA World Cup 2026?',
    category: 'Sports',
    correct_answer: 'USA, Mexico and Canada',
    incorrect_answers: [
      'Morocco, Spain, and Portugal',
      'Qatar',
      'Uruguay, Argentina and Chile'
    ]
  },
  {
    id: 26,
    difficulty: 'Medium',
    question:
    'The term “chip shot” is associated with which game?',
    category: 'Sports',
    correct_answer: 'Football',
    incorrect_answers: ['Hockey', 'Basketball', 'Tennis']
  },
  {
    id: 27,
    difficulty: 'Medium',
    question: 'How many NBA champions trophies does Stephen Curry has?',
    category: 'Sports',
    correct_answer: 'Four',
    incorrect_answers: ['Three', 'Two', 'Five']
  },
  {
    id: 28,
    difficulty: 'Medium',
    question: 'Who is hosting the Summer Olympic Games in 2028?',
    category: 'Sports',
    correct_answer: 'Los Angeles',
    incorrect_answers: ['Paris', 'Mexico City', 'London']
  },
  {
    id: 29,
    difficulty: 'Easy',
    question:
    'Which fotballer won the trophy Ballon dOr in 2023',
    category: 'Sports',
    correct_answer: 'Lionel Messi',
    incorrect_answers: [
      'Mbappe',
      'Haaland',
      'De Bruyne'
    ]
  },
  {
    id: 30,
    difficulty: 'Fácil',
    question: 'Who is the graetest basketballer in history?',
    category: 'Sports',
    correct_answer: 'Michael Jordan',
    incorrect_answers: ['Kobe Bryan', 'Lebron James', 'Stephen Curry']
  },
  // -------------------
  {
    id: 31,
    difficulty: 'Hard',
    category: 'Geography',
    question: ' Which of these U.S. states does NOT border Canada',
    correct_answer: 'Indiana',
    incorrect_answers: [
      'Alaska',
      'Maine',
      'Minnesota'
    ]
  },
  {
    id: 32,
    difficulty: 'Medium',
    category: 'Geography',
    question: ' Which of these countries was NOT a part of the Soviet Union?',
    correct_answer: 'Poland',
    incorrect_answers: ['Belarus', 'Georgia', 'Ukraine']
  },
  {
    id: 33,
    difficulty: 'Medium',
    category: 'Geography',
    question:
    'Which of these cities is NOT a national capital?',
    correct_answer: 'Sydney',
    incorrect_answers: ['Bangkok', 'Cairo', 'Prague']
  },
  {
    id: 34,
    difficulty: 'Medio',
    category: 'Geography',
    question: 'Which of these cities DOESNT border the Mediterranean Sea?',
    correct_answer:
    'Lisbon',
    incorrect_answers: [
      'Barcelona',
      'Alexandria',
      'Monaco'
    ]
  },
  {
    id: 35,
    difficulty: 'Easy',
    category: 'Geography',
    question: 'Which of these countries was NEVER part of the British Empire?',
    correct_answer:
    'Thailand',
    incorrect_answers: [
      'Kenya',
      'Ireland',
      'New Zealand'
    ]
  },
  {
    id: 36,
    difficulty: 'Hard',
    category: 'Geography',
    question: 'Which one of these cities is NOT in the Southern Hemisphere?',
    correct_answer:
    'Colombo',
    incorrect_answers: [
      'Johannesburg',
      'Brisbane',
      'Brasilia'
    ]
  },
  {
    id: 37,
    difficulty: 'Medium',
    category: 'Geography',
    question: 'Which one of these countries is NOT in Central America?',
    correct_answer:
    'Suriname',
    incorrect_answers: [
      'Belize',
      'Honduras',
      'Panama'
    ]
  },
  {
    id: 38,
    difficulty: 'Medium',
    category: 'Geography',
    question: 'Which of these countries is NOT majority-Muslim?',
    correct_answer:
    'Ethiopia',
    incorrect_answers: [
      'Albania',
      'Indonesia',
      'Morocco'
    ]
  },
  {
    id: 39,
    difficulty: 'Easy',
    question: 'Which of these countries is NOT recognized by the United Nations?',
    category: 'Geography',
    correct_answer: 'Taiwan',
    incorrect_answers: ['Cyprus', 'Iran', 'Israel']
  },
  {
    id: 40,
    difficulty: 'Medium',
    question: 'Which of these mountain ranges is NOT in Europe?',
    category: 'Geography',
    correct_answer: 'Atlas Mountains',
    incorrect_answers: ['The Alps', 'Crpathian Mountains', 'The Pyrenees']
  },
  {
    id: 41,
    difficulty: 'Hard',
    question: 'Which of these things is NOT located in Africa?',
    category: 'Geography',
    correct_answer: 'Gobi Desert',
    incorrect_answers: [
      'Aswan Dam',
      'Lake Victoria',
      'Zambezi River'
    ]
  },
  {
    id: 42,
    difficulty: 'Hard',
    question:
    'Which of these cities is NOT in India?',
    category: 'Geography',
    correct_answer: 'Karachi',
    incorrect_answers: ['Bangalore', 'Bhopal', 'Chennai']
  },
  {
    id: 43,
    difficulty: 'Easy',
    question:
    'Which of these countries does NOT have only one border?',
    category: 'Geography',
    correct_answer: 'North Korea',
    incorrect_answers: [
      'Portugal',
      'Haiti',
      'Ireland'
    ]
  },
  {
    id: 44,
    difficulty: 'Easy',
    question:
    'Mexican Capital?',
    category: 'Geography',
    correct_answer: 'Mexico city',
    incorrect_answers: ['Guadalajara', 'Culiacan', 'Monterrey']
  },
  {
    id: 45,
    difficulty: 'Easy',
    question:
    'United States Capital?',
    category: 'Geography',
    correct_answer: 'Washington DC',
    incorrect_answers: ['New York', 'LA', 'Chicago']
  },
  {
    id: 46,
    difficulty: 'Easy',
    question:
    'Which of these countries did the Soviet Union NEVER invade?',
    category: 'History',
    correct_answer: 'Sweden',
    incorrect_answers: [
      'Afghanistan',
      'Finland',
      'Poland'
    ]
  },
  {
    id: 47,
    difficulty: 'Medium',
    question: 'Who was the first person to orbit the Earth?',
    category: 'History',
    correct_answer: 'Yuri Gagarin',
    incorrect_answers: ['Neil Armstrong', 'John Glenn', 'Valentina Tereshkova']
  },
  {
    id: 48,
    difficulty: 'Medium',
    question: 'Which of these cities was NOT founded by the Romans?',
    category: 'History',
    correct_answer: 'Alexandria',
    incorrect_answers: [
      'Cologne',
      'London',
      'Florentia'
    ]
  },
  {
    id: 49,
    difficulty: 'Medium',
    question:
    'Which of these writers was NOT English?',
    category: 'History',
    correct_answer: 'Oscar Wilde',
    incorrect_answers: [
      'Jane Austen',
      'Agatha Christie',
      'Charles Dickens'
    ]
  },
  {
    id: 50,
    difficulty: 'Medium',
    question: 'The spinning jenny was one of the earliest innovations in the Industrial Revolution. What was a spinning jenny?',
    category: 'History',
    correct_answer: 'A device for making cloth',
    incorrect_answers: [
      'A device for storing energy',
      'A steam engine',
      'A water pump'
    ]
  },
  {
    id: 51,
    difficulty: 'Medium',
    question: 'Which of the following was a result of Maos "Great Leap Forward", a plan to remake Chinas agrarian economy?',
    category: 'History',
    correct_answer: 'A famine that killed 36 million people',
    incorrect_answers: [
      'Improved standard of living',
      'Not much really changed',
      'The overthrow of Mao'
    ]
  },
  {
    id: 52,
    difficulty: 'Easy',
    question:
    'Which event triggered World War One?',
    category: 'History',
    correct_answer: 'The assassination of Archduke Francis Ferdinand',
    incorrect_answers: ['Germanys invasion of Poland', 'The sinking of the Lusitania', 'The tsars refusal of an offer to visit Germany']
  },
  {
    id: 53,
    difficulty: 'Medium',
    question:
    'What was the Byzantine Empire',
    category: 'History',
    correct_answer: 'A continuation of the Roman Empire',
    incorrect_answers: [
      'An alliance ruled by the Pope',
      'A confederation of European tribes',
      'The empire founded by Alexander the Great'
    ]
  },
  {
    id: 54,
    difficulty: 'Medium',
    question:
    'When was the last time Moscow was ever captured by a foreign power?',
    category: 'History',
    correct_answer: 'By Napoleon in 1812',
    incorrect_answers: [
      'By Ogedei Khan in 1238',
      'By Hitler in 1942',
      'Never'
    ]
  },
  {
    id: 55,
    difficulty: 'Medium',
    question: 'Which of these is not an element of art?',
    category: 'Art',
    correct_answer: 'Balance',
    incorrect_answers: [
      'Line',
      'Texture',
      'Color'
    ]
  },
  {
    id: 56,
    difficulty: 'Medium',
    question: 'Which of the following was NOT originally invented in China?',
    category: 'History',
    correct_answer: 'Concrete',
    incorrect_answers: ['Gunpowder', 'Paper money', 'Silk']
  },
  {
    id: 57,
    difficulty: 'Medium',
    question: 'During what period of his life did Vincent van Gogh paint his most famous painting "Starry Night"?',
    category: 'Art',
    correct_answer: 'He painted it while he was in a mental asylum.',
    incorrect_answers: ['He painted it while a student at the Royal Academy of Fine Arts', 'He wrote it while visiting his brother Theo in Paris.', 'None']
  },
  {
    id: 58,
    difficulty: 'Hard',
    question: 'Edouard Manet, who is considered one of the founders of Impressionism, if he had listened to his father, would never have become an artist. What did his father see the future painter as?',
    category: 'Art',
    correct_answer: 'Lawyer',
    incorrect_answers: ['Doctor', 'Soldier', 'Engineer']
  },
  {
    id: 59,
    difficulty: 'Medium',
    question: 'In which genre did Pierre Auguste Renoir, one of the brightest representatives of Impressionism, paint most of his works?',
    category: 'Art',
    correct_answer: 'Portrait',
    incorrect_answers: ['Animalistic genre', 'Still life', 'Cubism']
  },
  {
    id: 60,
    difficulty: 'Medium',
    question: 'In which museum is the painting Flooding at Port-Marly by Alfred Sisley on display?',
    category: 'Art',
    correct_answer: 'Musée dOrsay in Paris',
    incorrect_answers: ['The Hermitage Museum in St. Petersburg', 'The National Gallery in London', 'Louvre Museum']
  },
  {
    id: 61,
    difficulty: 'Hard',
    question: 'Which impressionist painter is the author of the famous painting with the ballerinas, Blue Dancers?',
    category: 'Art',
    correct_answer: 'Edgar Degas',
    incorrect_answers: ['Camille Pissarro', 'Paul Gauguin', 'Van Gogh']
  },
  {
    id: 62,
    difficulty: 'Easy',
    question: 'Which artist painted his famous self-portrait with a bandaged ear?',
    category: 'Art',
    correct_answer: 'Vincent van Gogh',
    incorrect_answers: ['Paul Gauguin', 'Picasso', 'Henri Matisse']
  },
  {
    id: 63,
    difficulty: 'Easy',
    question: 'This painting by Pierre Auguste Renoir was the subject of Alain Gauberts film Beautiful Sundays (French: Les Beaux Dimanches dété) from the documentary series Palettes.',
    category: 'Art',
    correct_answer: 'Dance at Le moulin de la Galette',
    incorrect_answers: ['The Swing', 'Mona Lisa', 'Luncheon of the Boating Party']
  },
  {
    id: 64,
    difficulty: 'Medium',
    question:
    'What did Camille Pissarro do for a living at a time when his work was not yet recognized?',
    category: 'Art',
    correct_answer: 'He painted fans',
    incorrect_answers: ['He painted posters.', 'Washing cars', 'He painted portraits on commission.']
  },
  {
    id: 65,
    difficulty: 'Hard',
    question:
    'Impressionist painter who proposed a new artistic method of transmitting shades, called pointillism.',
    category: 'Art',
    correct_answer: 'Georges-Pierre Seurat',
    incorrect_answers: [
      'Monet',
      'Edgar Degas',
      'Alfred Sisley'
    ]
  },
  {
    id: 66,
    difficulty: 'Medium',
    question:
    'The foundations of the Internet were created when the Defense Advanced Research Projects Agency (DARPA) created ARPANet, the first national network of computers. In what year did this occur?',
    category: 'Technology',
    correct_answer: '1969',
    incorrect_answers: ['1949', '1959', '1983']
  },
  {
    id: 67,
    difficulty: 'Easy',
    question:
    'Who invented the World Wide Web (WWW)?',
    category: 'Technology',
    correct_answer: 'Tim Berners-Lee',
    incorrect_answers: ['Marc Andreeson', 'Vinton Cerf', 'Arthur C. Clarke']
  },
  {
    id: 68,
    difficulty: 'Medium',
    question:
    'Technological determinism means that',
    category: 'Technology',
    correct_answer: 'Technology essentially causes certain behaviors.',
    incorrect_answers: [
      'That Web radio stations must pay royalties for songs that are accessed',
      'Specially equipped mobile units transmit live and taped remote reports back to a local station.',
      'None of the above'
    ]
  },
  {
    id: 69,
    difficulty: 'Easy',
    question: 'Analog media was originally used in __________ for media that was analogous to the sound it was recreating. It now refers to all __________.',
    category: 'Technology',
    correct_answer: 'Audio recording; non-digitized media.',
    incorrect_answers: [
      'Laser technology; satellite transmissions',
      'Transmitting a digital signal; non-digitized media',
      'None of the above is correct']
  },
  {
    id: 70,
    category: 'Technology',
    difficulty: 'Medium',
    question: 'Digitization is the process in which media',
    correct_answer: ' Is made into computer-readable form..',
    incorrect_answers:
    [
      'Uses the modulation of the sound carrier wave to the fluctuations of the sound itself.',
      'Uses the modulation of the sound carrier wave to the fluctuations of the sound itself.',
      'Receives and sends information slower than other connections.'
    ]
  },
  {
    id: 71,
    category: 'Technology',
    difficulty: 'Medium',
    question:
    'Broadband is a network connection that',
    correct_answer: ' Allows for more information to be sent in a shorter period of time..',
    incorrect_answers: [
      'Stores video and audio information by using laser technology.',
      'Blends one picture with another in TV production.',
      'Receives and sends information slower than other connections.'
    ]
  },
  {
    id: 72,
    category: 'Technology',
    difficulty: 'Hard',
    question: 'Who in 1837 invented the electromagnetic telegraph, which marked the beginning of todays information age?',
    correct_answer:
    'Samuel Morse.',
    incorrect_answers: [
      'Guglielmo Marconi',
      'Alexander Graham Bell',
      'Susan B. Anthony'
    ]
  },
  {
    id: 73,
    category: 'Technology',
    difficulty: 'Medium',
    question: 'Communication satellites have had a great impact on communications in which ways?',
    correct_answer: 'Both Answers are correct',
    incorrect_answers: [
      'They allow for high-bandwidth communication',
      'They allow for communication in remote corners of the earth where land lines or other ground-based modes of communication do not exist',
      'None of the answers are correct'
    ]
  },
  {
    id: 74,
    category: 'Technology',
    difficulty: 'Hard',
    question:
    'In what year did Arthur C. Clarke, famed science fiction writer, first propose the communication satellite?',
    correct_answer:
    '1945.',
    incorrect_answers: [
      '1925',
      '1935',
      '1955'
    ]
  },
  {
    id: 75,
    category: 'Technology',
    difficulty: 'Medium',
    question: 'Characteristics of the peer-to-peer (P2P) network model include:',
    correct_answer:
    'All of the above.',
    incorrect_answers: [
      'Decentralized and non-hierarchical',
      'Interconnected group of computers',
      'A network of computers with equal ability to send, store and receive information'
    ]
  }
]
