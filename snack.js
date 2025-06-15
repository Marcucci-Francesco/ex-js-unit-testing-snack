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

module.exports = {
  getInitials,
  createSlug,
  average
}