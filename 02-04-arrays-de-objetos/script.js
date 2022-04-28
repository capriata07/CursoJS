// criando um arrays no JS

let list = ['Rafael', 'Daniel', 'Caio']

console.log(list)

console.log('------------------------------->')


let person = {
  name : 'Rafael',
  age: 34,
  sex: 'male'
}

let person1 = {
  name: 'Maria',
  age: 23,
  sex: 'fame'
}

let person2 = {
  name: 'Luiza',
  age: 35,
  sex: 'fame'
}

list = [person,person1,person2]

console.log(
  list[2].name
)
console.log('--------------------------------->')
// criei um for para acessar todos os objetos do array
for (let person of list){
  console.log(person.name)
}