// Spread and Destructuring Exercise Assignment
// 1a
const mcuShows = ['Loki', 'MoonKnight'];
// or
/* const mcuShows = [
    'Loki',
    'Moon Knight'
];
*/
//  1b
const starWarsShows = ['The Mandalorian', 'The Book of Boba Fett'];
// or
/*
const starWarsShows = [
    'The Mandalorian',
    'The Book of Boba Fett'
];
*/
// 1c
//const disneyPlusShows = ['The Beatles: Get Back', ...mcuShows, ...starWarsShows ];
// or
const disneyPlusShows = [
    'The Beatles: Get Back',
     ...mcuShows,
     ...starWarsShows
 ];
console.log(disneyPlusShows);
/* 
SpreadDestructuringExercise node script.js
[
  'The Beatles: Get Back',
  'Loki',
  'MoonKnight',
  'The Mandalorian',
  'The Book of Boba Fett'
]
*/
// 2a
const netflixMovies = {
//  'action' : 'Extraction', I put ' around the first word but he did not
    action : 'Extraction',
    crime : 'The Irishman'
};
// 2b
const amazonPrimeMovies = {
    action : 'The Tomorrow War',
// two action keys causes a problem. That is why you only see one in the results
    drama : 'One Night In Miami'
};
// 2c 
const streamingMovies = {
    ...amazonPrimeMovies,
// amazonPrimeMovies needs to go first so Extraction will be the one that shows up in the results
    ...netflixMovies,
   musical : 'Hamilton'
};
// 2d
console.log(streamingMovies);
/*{
  action: 'Extraction',
  drama: 'One Night In Miami',
  crime: 'The Irishman',
  musical: 'Hamilton'
}
  */
//3a
const disneyJunior = [
    'Mickey Mouse Clubhouse',
    'Spidey and His Amazing Friends'
];
//3b 
const [mickey, spidey] = disneyJunior;
console.log(mickey);
console.log(spidey);
/* 
Mickey Mouse Clubhouse
Spidey and His Amazing Friends
*/
//3c
console.log(mickey, spidey);
// This gives the two items instead of the array if you use disneyJunior
//4
const avengers = {
    warMachine : 'James Rhodes',
    theHulk : 'Bruce Banner'
};
// 4b 
const {warMachine, theHulk} = avengers;
// You can change the order of warMAchine and theHulk but not the words because they were assigned as the key to the value
// 4c
console.log(warMachine, theHulk);
// 4d
const moreAvengers = {
    blackWidow : 'Natasha Romanoff',
    hawkeye : 'Clint Barton',
    ironMan : 'Tony Stark'
};
// 4e
//const {nat, ...others} = moreAvengers; my incorrect answer
const {blackWidow : nat, ...others} = moreAvengers; // correct one line answer


// 4f
console.log(nat, others);
// Natasha Romanoff { hawkeye: 'Clint Barton', ironMan: 'Tony Stark' }

// Bonus
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};

// 5a
const all = [
    ...bonus.first,
    ...bonus.second,
    ...bonus.third
];
console.log(all);

// 5b
const [one, two, three, four, five, six, seven, eight, nine] = all;

console.log(one, two, three, four, five, six, seven, eight, nine);