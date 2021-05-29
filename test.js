
Arrays and Objects....

Arrays // Objects.... 

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


var filtered = students.filter((a) => a.age < 20).sort((a, b) => a.age - b.age);

console.log(filtered)

var totalAges = students.reduce((a, c) => a + c.age, 0)

console.log(totalAges)

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
let movieWithmaxRating = pagesData.map(page => page.sort((a, b) => b.rating - a.rating)[0]).sort((a, b) => b.rating - a.rating)[0];
let maxRating = movieWithmaxRating.rating;
console.log(maxRating);

console.log(sortedRatings);


let moviesCount = pagesData.map(data => data.length).reduce((a, c) => a + c);
let totalOfRatings = allRatings.reduce((a, c) => a + c);

//console.log(allmovies);

//console.log(allRatings);




console.log(totalOfRatings);



console.log(movies.length);

























// for (var i = 0; i < ar.length; i++) {
//     // console.log(ar[i]);
// }



// //ES6 Functions........................
// function loopfunc(value) {
//     //console.log('item - ' + value);
// }

// ar.forEach(loopfunc);



// //////////////////////////////////////////

// //ar.forEach( value => console.log('item 2 -' + value) );


// var ar2 = [
//     { "name": "aminu", "age": 23 },
//     { "name": "okwuchi", "age": 26 },
//     { "name": "delilah", "age": 78 },
//     { "name": "mary", "age": 13 }
// ];

// for (v of ar2) {
//     // console.log(v.name + ' -  is - ' + v.age);
// }

// for (obj in ar2) {
//     // console.log(obj + ' - using object - ' + ar2[obj].name)
// }

// /////////////////////////////////////////////////////

// function mapfunc(value) {
//     console.log(value.name + ' -  is - ' + value.age)
// }

// ar2.map(mapfunc)

// ar2.map(v => console.log(v.name + ' =  is now = ' + v.age));

// function obfunc(v) {
//     return v;
// }
// const newArr = ar2.map(objfunc);

// console.log(newArr);


