// writing the Author name and book title
const bootTitle= "The Darkest Minds"
const author= "   Pitticus Lore   "

let copiesAvailable= 1000
copiesAvailable= 2000

console.log(bootTitle)
console.log(author)
console.log(copiesAvailable);
 

//making a book object
const book={
    title: "The Darkest Minds",
    price: 10,
    isAvailable: true
}

//showign object values
console.log(book.title)
console.log(book.price)
console.log(book.isAvailable)

console.log(typeof book.title)
console.log(typeof book.price)
console.log(typeof book.isAvailable)


// removing space from author name
console.log(author.trim())

// making a null variable
const borrowerName= null

// making the undefined variable
//const returnDate 

console.log(borrowerName)
// console.log(returnDate)


// the difference between the nul and undefined variable is that while both variables do not have values in them, only the null variable was intentionally left empty and it does not cause the system to flag it
