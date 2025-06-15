const { } = require("./snack.js")


// Snack 1

const { getInitials } = require("./snack.js");
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
})



// Snack 2

const { createSlug } = require("./snack.js");
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
  expect(createSlug("Ciao Mondo")).toBe("ciao mondo");
})



// Snack 3
const { average } = require("./snack.js");

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
  expect(average([20, 10])).toBe(15);
})



// Snack 4

test('La funzione createSlug sostituisce gli spazi con -.', () => {

})




// Snack 5

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {

})




// Snack 6

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {

})




// Snack 7

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {

})



// Snack Describe()

test('', () => {

})