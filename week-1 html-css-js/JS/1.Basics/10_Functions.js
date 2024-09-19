function SayTheWord(word){
if(word===undefined){   //or (!word)
console.log("Please provide a word to print!");
return;
}
console.log(word);
};

SayTheWord();

function signedIn(user="default"){
console.log(`${user} signed in!`);
};
signedIn();

function Sum(...nums){
let sum=0;
nums.forEach((num=>{
sum=sum+num;
}));
console.log(`the sum is ${sum}`);
};

Sum(1,2,3,4,5,6,7,8,9,10);

