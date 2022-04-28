let person = {
  age: 16,
  name: 'Pedro'
}
// funcao pura nao modifica so retorna o valor
function pegaValorMaiorIdade(person){
  return 18 - person.age
}

// funcao impura alterou o valor idade - gera efeito colateral
function incrementaIdade(person){
  person.age ++
}

// chamo a funcao incrementaIdade!
incrementaIdade(person)



let difIdade = pegaValorMaiorIdade(person)
console.log(difIdade)

