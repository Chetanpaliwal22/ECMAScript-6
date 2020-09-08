//Promise
function getAmount(userId){
getUser(userId).then(getBankBalance).then(amount => {
console.log(amount);
});
}

//Async/Await

async function getAmountAsync(userId){
	var user = await getUser(userId);
  var amount = await getBankBalance(user);
  console.log(amount);
}

//functions

function getUser(userId){
  return new Promise (resolve => {
  setTimeout(() => {
  resolve('john');
  },100)
  });
}


function getBankBalance(user){
  return new Promise((resolve,reject) => {
  setTimeout(() =>{
  if(user == 'john'){
  resolve('1000');
  }else{
  reject('unkonwn user');
  }
  },100);
  })
}

