const { } = require("./snack.js")


describe('Manipolazione di stringhe', () => {

  // Snack 1

  const { getInitials } = require("./snack.js");
  test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("MR");
  })


  // Snack 5
  const { isPalindrome } = require("./snack.js");

  test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("anna")).toBeTruthy();
  })

})


describe('Operazioni su Array', () => {


  // Snack 3
  const { average } = require("./snack.js");

  test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([20, 10])).toBe(15);
  })


  // Snack 7

  const posts = [
    { id: 1, title: "Post 1", slug: "post-1" },
    { id: 2, title: "Post 2", slug: "post-2" },
    { id: 3, title: "Post 3", slug: "post-3" }
  ];

  const { findPostsById } = require("./snack.js");

  test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostsById(posts, 2)).toEqual({ id: 2, title: "Post 2", slug: "post-2" });
    expect(() => findPostsById(posts, 4)).toThrow("Post non trovato");

  })


})


describe('Generazione di slag', () => {


  // Snack 2

  const { createSlug } = require("./snack.js");
  test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Ciao Mondo")).toBe("ciao mondo");
  })


  // Snack 4

  const { createSlug } = require("./snack.js");

  test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("Ciao Mondo")).toBe("ciao-mondo");
  })


  // Snack 6

  const { createSlug } = require("./snack.js");

  test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow("Il titolo non può essere vuoto.");
  })

})





