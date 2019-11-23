let word = 'bottles';
let count = 9;
while (count > 0){
    if (count > 0){
        console.log(count + ' ' + word + ' of beer on the wall');
    } else {
        console.log('No more '  + word + ' of beer on the wall.');
    }
    console.log(count + ' ' + word + ' of beer on the wall');
    console.log( count + ' ' + word + ' of beer, ');
    console.log(' Take one down, pass it around, ');
    count--;
}
////////////////////////////////////////////////////////////////////
// Test for jokes
let joke = 'JavaScript walked into a bar....';
let toldJoke = false;
let $punchline = 'Better watch out for those semi-colons.';
// let percentage = 20;
// let result;
if (toldJoke === true) {
    console.log($punchline);
} else {
    console.log(joke);
}
// Movie Night
let zipCode = 98104;
let joesFavoriteMovie = 'Forbidden Planet';
let movieTicket$ = 9;
if (movieTicket$ >= 9) {
    console.log("Too much!");
} else {
    console.log('We\'re going to see ' + 'joesFavoriteMovie');
}
