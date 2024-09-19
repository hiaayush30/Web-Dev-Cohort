const marvelHeroes=["spiderman","ironman","hawkeye"];
const dcHeroes=["flash","superman","batman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

console.log(marvelHeroes.concat(dcHeroes));
const allHeroes=[...marvelHeroes,...dcHeroes];
console.log(allHeroes);

const anotherArray=[1,2,3,[7,8,9],5,[6,7,[12,15,18]]]; 
const usableArray=anotherArray.flat(2); //number is the depth upto which it should flatten and concat
console.log(usableArray);
//Array Object
console.log(Array.isArray("Aayush"));
console.log(Array.from("Aayush"));
console.log(Array.from({name:"Aayush"}));

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));