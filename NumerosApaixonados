var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")
var apaixonados = []

// Filtragem de itens
function solteiros(todos) {
  //Contagem de cada item do array
  const count = {}
  for (let item of todos) {
    if(count[item] === undefined){
      count[item] = 0
    }
    count[item]++
  }

  // object.entries
  //{a: 1, b: 2, c: 3} =>
  //{[a,1], [b,2], [c,3]}

  //K => chave do objeto
  //v => valor do objeto

  return Object.entries(count)
    .filter(([k, v]) => {
      return v % 2 === 1
    })
    .map(([k, v]) => k)
    .sort((a, b) => a - b)
}

for (let i = 0; i < lines.length; i++) {
  if (i % 2 === 0) {
    if (lines[i] === "0") {
      break
    } else {
      continue
    }
  }
  let numeros = lines[i]
    .split(" ")
    .filter((x) => x.length)
    .map(Number)
  let resultado = solteiros(numeros)
  apaixonados.push(resultado)
}
apaixonados.forEach((item) => {
  console.log(item.join(" "))
})
