const evenOrOdd = (num) => {
   if (num % 2 !== 0){
      return "Odd"
   }
   return "Even"
}

console.log(evenOrOdd(0))

let numArr = [2, 5, 15, 22, 399, 239847, 230492830, 3459009734598940]

for(let i = 0; i < numArr.length; i++){
   console.log(evenOrOdd(numArr[i]))
}