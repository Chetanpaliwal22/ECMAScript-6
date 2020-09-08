//1. Array.prototype.includes

const arr = [1,2,34,5,NaN];

if(arr.includes(2)){
  console.log(true);
}

//2. Exponentiation 

console.log(Math.pow(7,2)); //7*7

//3. Object.values

const studentMap = {1: "Chetan", 2:"David", 3: "Thomas", 4:"Rodrigo"};
const values = Object.values(studentMap);
console.log(values);//[1,2,3,4]

const val = Object.keys(studentMap).map(key => studentMap[key]);
console.log(val);//[Chetan,David, Thomas, Rodrigo]

//4. Object.entries
Object.keys(studentMap).forEach(function(key){
  console.log('key: '+key+' values: '+ studentMap[key]);
});

