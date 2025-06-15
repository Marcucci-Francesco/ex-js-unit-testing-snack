function getInitials(nomeCompleto) {
  const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
  return `${nome.charAt(0).toUpperCase()}${cognome.charAt(0).toUpperCase()}`;
}

function createSlug(titolo) {
  return titolo.toLowerCase()
}

function average(numeri) {
  numeri.forEach(numero => {
    if (isNaN(numero)) {
      throw new Error("L'array contiene un valore non numerico.");
    }
  })
  return numeri.reduce((acc, val) => acc + val, 0) / numeri.length;
}


function createSlug(titolo) {
  return titolo.toLowerCase().replaceAll(" ", "-");
}

function isPalindrome(parola) {
  const parolaInversa = parola.trim().split('').reverse().join('');
  return parola.trim() === parolaInversa;
}

function createSlug(titolo) {
  if (!titolo) {
    throw new Error("Il titolo non può essere vuoto.");
  }
  return titolo.toLowerCase().replaceAll(" ", "-");
}


function findPostsById(posts, id) {
  if (isNaN(id)) {
    throw new Error("L'ID deve essere un numero.");
  }
  posts.forEach(p => {
    if (p.id === undefined || p.title === undefined || p.slug === undefined) {
      throw new Error("Ogni post deve avere un ID numerico.");
    }
  });
  return posts.find(post => post.id === id) || null;
}


module.exports = {
  getInitials,
  createSlug,
  average,
  createSlug,
  isPalindrome,
  createSlug,
  findPostsById
}