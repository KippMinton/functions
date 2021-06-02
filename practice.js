//Create a function that filters even and odd numbers 

const evenOrOdd = (num) => {
   if (num % 2 !== 0){
      return "Odd"
   }
   return "Even"
}

console.log(evenOrOdd(0))

let numArr = [2, 5, 15, 22, 399, 239847, 230492830, 3459009734598940, 0]

for(let i = 0; i < numArr.length; i++){
   console.log(evenOrOdd(numArr[i]))
}

/* Create 2 functions:
one to convert an array of words to a sentence,
the other to filter unwanted words */

const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

// Function to filter out `k` words

const filterK = (arr) => {
   for(let i = 0; i < arr.length; i++) {
      if(arr[i].startsWith('k' || 'K')) {
         arr.splice(i, 1)
      }
   }
   return arr
}


// Function to build a single string from the array

const buildString = (arr) => {
   let sentence = arr.join(' ')
   return sentence
}

//Invoke the filtering function and store its return value

filterK(words)
console.log(words)

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/
let badSentence = buildString(words)
console.log(badSentence)


// fish catching function

const catchFish = (num) => {
   let castNum = Math.floor(Math.random() * num)
   console.log(castNum)
   if (castNum === 2) {
      console.log("Sven hooked a tuna!  :)")
   } else console.log("Sven came up empty-handed.  :(")
}

catchFish(3)

// fast food order function

 const orderMeal = (sandwich, side, drink, dessert) => {
   let order = {
      sandwhich: sandwich,
      side: side,
      drink: drink,
      dessert: dessert
   }
   return order
}

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

console.log(takeOutBag)

// chores functions

let kippObj = {
   firstName: "Kipp",
   lastName: "Minton"
}

const sweepFloors = person => `${person.firstName} ${person.lastName} swept the floors`

const groceryShopping = person => `${person.firstName} ${person.lastName} bought groceries`

const washDishes = person => `${person.firstName} ${person.lastName} washed the dishes`

const doLaundry = person => `${person.firstName} ${person.lastName} did laundry`

const cook = person => `${person.firstName} ${person.lastName} cooked dinner`

const changeCatLitter = person => `${person.firstName} ${person.lastName} cleaned the litter box`

const dayPlanner = (chore, person, day) => chore(person) + ` ${day}.`

const busyDayPlanner = (chore1, chore2, chore3, person, day) => `On ${day}, ` + chore1(person) + `, and ` + chore2(person) + `, and ` + chore3(person) + `.`

console.log(dayPlanner(cook, kippObj, "Thursday"))

console.log(busyDayPlanner(cook, doLaundry, washDishes, kippObj, "Wednesday"))