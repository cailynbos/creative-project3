let mock = [{
    id: 1,
    title: "Ender's Game",
    author: "Orson Scott Card",
    description: 'The novel tells the story of a young boy, Ender Wiggin, who is sent to a training academy named Battle School, located in orbit above the Earth, built to train people to become soldiers that will one day battle against a vast alien race known as "Buggers".',
    image: "endersgame.jpg",
    genre: "scifi"
},
{
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    description: 'It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities.',
    image: "dune.jpg",
    genre: "scifi"
},
{
    id: 3,
    title: "1984",
    author: "George Orwell",
    description: "1984 is a dystopian novella by George Orwell published in 1949, which follows the life of Winston Smith, a low ranking member of 'the Party', who is frustrated by the omnipresent eyes of the party, and its ominous ruler Big Brother. 'Big Brother' controls every aspect of people's lives.",
    image: "1984.jpg",
    genre: "scifi"
},
{
    id: 4,
    title: "The Man in the High Castle",
    author: "Philip K. Dick",
    description: 'The Man in the High Castle is an alternate history novel written by Philip K. Dick and published in 1962. The central premise of the book is that the Allied powers lost World War II and that the United States is now divided between German and Japanese control.',
    image: "man-in-the-high-castle.jpg",
    genre: "scifi"
},
{
    id: 5,
    title: "Frankenstein",
    author: "Mary Shelley",
    description: 'Frankenstein tells the story of gifted scientist Victor Frankenstein who succeeds in giving life to a being of his own creation. However, this is not the perfect specimen he imagines that it will be, but rather a hideous creature who is rejected by Victor and mankind in general.',
    image: "frankenstein.jpg",
    genre: "scifi"
},
{
    id: 6,
    title: "The Moon is a Harsh Mistress",
    author: "Robert A. Heinlein",
    description: "The Moon Is a Harsh Mistress is a 1966 science fiction novel by American writer Robert A. Heinlein about a lunar colony's revolt against absentee rule from Earth.",
    image: "moon-is-a-harsh-mistress.jpg",
    genre: "scifi"
},
{
    id: 7,
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    description: "Adrian Tchaikovksy's critically acclaimed novel Children of Time, is the epic story of humanity's battle for survival on a terraformed planet. Who will inherit this new Earth? The last remnants of the human race left a dying Earth, desperate to find a new home among the stars.",
    image: "children-of-time.jpg",
    genre: "scifi"
},
{
    id: 8,
    title: "The Martian",
    author: "Andy Weir",
    description: 'The Martian tells the story of Mark Watney, an astronaut on the Ares 3 mission to Mars. After a terrible storm almost destroys the ship and the base, the crew of his ship believe he is dead.',
    image: "martian.jpg",
    genre: "scifi"
},
{
    id: 9,
    title: "The Heart Goes Last",
    author: "Margaret Atwood",
    description: '“The Heart Goes Last” follows the efforts of husband and wife Stan and Charmaine to survive and help bring down the Positron Project, supposedly aimed at ending unemployment and crime but in reality performing illegal organ harvesting and sexually altering the minds of people.',
    image: "heart-goes-last.jpg",
    genre: "scifi"
},
{
    id: 10,
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    description: '“The Three-Body Problem” traces the efforts of disillusioned Chinese scientists who implore alien life to come to Earth to forcibly redeem humanity.',
    image: "three-body-problem.jpg",
    genre: "scifi"
},
{
    id: 11,
    title: "Mistborn",
    author: "Brandon Sanderson",
    description: "The story follows Vin's life as she comes into her own as one of the Mistborn, people who can use ingested metal particles to enhance their abilities, both mental and physical. She begins on a journey to find out who she really is as she fights against the Final Empire and overthrowing the Lord Ruler.",
    image: "mistborn.jpg",
    genre: "fantasy"
},
{
    id: 12,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: 'On his 11th birthday, Harry receives a letter inviting him to study magic at the Hogwarts School of Witchcraft and Wizardry. Harry discovers that not only is he a wizard, but he is a famous one.',
    image: "harry-potter.jpg",
    genre: "fantasy"
},
{
    id: 13,
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    description: 'It has been centuries since the fall of the ten consecrated orders known as the Knights Radiant, but their Shardblades and Shardplate remain: mystical swords and suits of armor that transform ordinary men into near-invincible warriors. Men trade kingdoms for Shardblades. Wars were fought for them, and won by them. One such war rages on a ruined landscape called the Shattered Plains.',
    image: "way-of-kings.jpg",
    genre: "fantasy"
},
{
    id: 14,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    description: 'Several noble houses fight a civil war over who should be king, while an exiled princess tries to find her place in the world, and the kingdom is threatened by some rising supernatural threat in the north.',
    image: "game-of-thrones.jpg",
    genre: "fantasy"
},
{
    id: 15,
    title: "Shadow and Bone",
    author: "Leigh Bardugo",
    description: "The Shadow Fold, a swathe of impenetrable darkness crawling with monsters that feast on human flesh, is slowly destroying the once-great nation of Ravka. Alina, a pale, lonely orphan, discovers a unique power that thrusts her into the lavish world of the kingdom's magical elite—the Grisha.",
    image: "shadow-and-bone.jpg",
    genre: "fantasy"
},
{
    id: 16,
    title: "The Night Circus",
    author: "Erin Morgenstern",
    description: 'The Night Circus is a phantasmagorical fairy tale set near an ahistorical Victorian London in a wandering magical circus that is open only from sunset to sunrise.',
    image: "night-circus.jpg",
    genre: "fantasy"
},
{
    id: 17,
    title: "Stardust",
    author: "Neil Gaiman",
    description: "Tristran Thorn will do anything to win the cold heart of beautiful Victoria Forester—even fetch her the star they watch fall from the night sky. But to do so, he must enter the unexplored lands on the other side of the ancient wall that gives their tiny village its name. Beyond that stone barrier, Tristran learns, lies Faerie...and the most exhilarating adventure of the young man's life.",
    image: "stardust.jpg",
    genre: "fantasy"
},
{
    id: 18,
    title: "The Eye of the World",
    author: "Robert Jordan",
    description: "Moiraine Damodred arrives in Emond’s Field on a quest to find the one prophesized to stand against The Dark One, a malicious entity sowing the seeds of chaos and destruction. When a vicious band of half-men, half beasts invade the village seeking their master’s enemy, Moiraine persuades Rand al’Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light.",
    image: "eye-of-world.jpg",
    genre: "fantasy"
},
{
    id: 19,
    title: "The Lion, the Witch, and the Wardrobe",
    author: "C.S. Lewis",
    description: 'Peter, Susan, Edmund, and Lucy Pevensie are four siblings sent to live in the country with the eccentric Professor Kirke during World War II. The children explore the house on a rainy day and Lucy, the youngest, finds an enormous wardrobe. Lucy steps inside and finds herself in a strange, snowy wood.',
    image: "narnia.jpg",
    genre: "fantasy"
},
{
    id: 20,
    title: "Jonathan Strange & Mr. Norrell",
    author: "Susanna Clarke",
    description: "Jonathan Strange & Mr Norrell is an alternative history set in 19th-century England around the time of the Napoleonic Wars. Its premise is that magic once existed in England and has returned with two men: Gilbert Norrell and Jonathan Strange.",
    image: "jonathan-strange.jpg",
    genre: "fantasy"
}]

export default mock;