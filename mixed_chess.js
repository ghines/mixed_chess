// Define arrays for different parts of the message
const openingMoves = ["1.Nc3 e5 2.Nd5 c6 3.Ne3 d5 4.Nh3 Bxh3", "1.f3 e5 2.Kf2 d5 3.c3 Nf6 4.Qa4+ Nc6", "1.a3 e5 2.h3 d5 3.d3 Nc6 4.Nd2 f5", 
    "1.g4 d5 2.Bg2 Bxg4 3.c4 dxc4 4.Qa4+ Nd7", "1.b3 d5 2.Bb2 c5 3.e3 Nc6 4.Bb5 Qb6"];
const openingNames = ["The Drunken Knight Gambit", "The Squirrel Attack", 
    "The Hedgehog’s Revenge",  "The Boomerang Attack", "The Snail Defense"];
const styles = ["(Open, Tactically Rich)", "(Closed, Positional Maneuvering)", "(Semi-Open, Balanced)", "(Semi-Closed, Positional Maneuvering)", "(Open, Aggressive)"];
const synopsis = ["Leads to a wide-open, tactically rich game with plenty of sacrifices and sudden attacks.",
"Very tense situation with lots of pawn moves, requiring careful maneuvering.",
"A completely chaotic battlefield where standard principles go out the window.",
"Encourages slow, creeping positional play with lots of waiting moves.",
"Rapid development with potential for an early and unexpected checkmate.",
"Creates an unbalanced game where both sides must constantly adapt.",
"A deceptive opening that looks calm at first but quickly spirals into madness."];


// Get random entries from array passed in
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Piece together and display message with a random element from each array
message = getRandomElement(openingNames);
message += ' ' + getRandomElement(openingMoves);
message += ' ' + getRandomElement(styles);
message += '\n' + getRandomElement(synopsis);

console.log(message);

