
//Arrays and Objects....

var arr = String('aminu;ocholi;oketta;odinma;mohammed;fidelis;james;brown;').split(';');

var students = [
    { name: 'aminu', age: 9, class: 'primary 6' },
    { name: 'delilah', age: 84, class: 'primary 6' },
    { name: 'mary', age: 19, class: 'primary 6' },
    { name: 'sujim', age: 12, class: 'primary 6' },
    { name: 'Mohammed', age: 29, class: 'primary 6' },
    { name: 'Tango', age: 84, class: 'primary 6' },
    { name: 'Maimuna', age: 69, class: 'primary 6' },
    { name: 'tobi', age: 3, class: 'primary 6' }
];


var scores = [34, 567, 323, 11, 665, 78, 3, 6, 88, 2];
var sorted = scores.sort((a, b) => b - a);


var filtered = students.filter((a) => a.age < 20).sort((a, b) => a.age - b.age); //get only students less than 20 and sort them ascending... 

console.log(filtered)

var totalAges = students.reduce((a, c) => a + c.age, 0);    //start adding from zero... 

console.log(totalAges);

//for array destruction 
const { name, age } = students[2];
console.log(`Student 2 = ${name} and he is ${age}yrs old`);



let movies = [
    {
        "page": 1,
        "totalPages": 5,
        "data":
            [
                {
                    "title": "Gamora",
                    "rating": 4.7
                },
                {
                    "title": "Ant Man",
                    "rating": 1.2
                },
                {
                    "title": "Justice League",
                    "rating": 10
                }
            ]
    },
    {
        "page": 2,
        "totalPages": 19,
        "data":
            [
                {
                    "title": "Flash",
                    "rating": 9.3
                },
                {
                    "title": "Captain America",
                    "rating": 3.7
                }
            ]
    },
    {
        "page": 3,
        "totalPages": 11,
        "data":
            [
                {
                    "title": "Iron Man",
                    "rating": 9.4
                },
                {
                    "title": "Shawshank Redemtion",
                    "rating": 9.4
                },
                {
                    "title": "Notorious",
                    "rating": 6
                },
                {
                    "title": "Expendables",
                    "rating": 22
                }
            ]
    },
    {
        "page": 4,
        "totalPages": 11,
        "data":
            [
                {
                    "title": "Black Panther",
                    "rating": 6.8
                }
            ]
    },
    {
        "page": 5,
        "totalPages": 8,
        "data":
            [
                {
                    "title": "Dawn of Justice",
                    "rating": 8.0
                },
                {
                    "title": "Man Of Steel",
                    "rating": 12.6
                },
                {
                    "title": "Blue Shark",
                    "rating": 3.6
                }
            ]
    }
];


// all the ratings first... 



let pagesData = movies.map(m => m.data);
let allRatings = pagesData.map(page => page.reduce((a, c) => a + c.rating, 0));

let moviesCount = pagesData.map(data => data.length).reduce((a, c) => a + c);
let totalOfRatings = allRatings.reduce((a, c) => a + c);
console.log(totalOfRatings, moviesCount);

console.log(allRatings);

let averageRating = totalOfRatings / moviesCount;
console.log('Average Rating ', averageRating);  //averageRating..

let movieWithmaxRating = pagesData.map(page => page.sort((a, b) => b.rating - a.rating)[0]).sort((a, b) => b.rating - a.rating)[0];
let maxRating = movieWithmaxRating.rating;

console.log('Maximum Rating ', maxRating); //maximumRating

// //console.log(allmovies);

// //console.log(allRatings);


// let MaximumRating = maxRating 
// console.log(AverageRating);



// console.log(totalOfRatings);



// console.log(movies.length);


let numbrs = [15.9, 13, 46.8, 6.8, 8.0, 12.6, 3.6];
let sum = numbrs.reduce((a, c) => a + c);

console.log(sum);







//might have to add how to use the Object also.. 
//and their corresponding diffferences... with the movies object above... 

let o = movies[0];

//Object.entries(o)
console.log('entries', Object.entries(o));  //returns the entries as a 2 dimensional array key and value. 

//Object.values(o)
console.log('values', Object.values(o));  //returns the values in the arrays... 

//Object.keys(o)
console.log('keys', Object.keys(o));  //returns the keys from the specified array.... 

//Object.fromEntries();
let ar = Object.entries(o);
console.log('From Entries', Object.fromEntries(ar));




//////////////////// Other JS Tips.... 
//like converting a string into an array.... 
//just bt spreading it... 
let str = "He likes food..";
let arr = [ ...str ]; //converts it to a n array.. 