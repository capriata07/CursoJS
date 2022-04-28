let me = {
  nome : 'Rafael',
  idade: 18
}

function check(person){
  console.log('Meu nome e: ' + person.nome)

  if(person.idade <= 17){
    console.log('Voce e menor de 18 Nao pode Entrar!!')
  }else if (person.idade == 18){
    console.log('Parabens vc tem 18 Anos pode Entrar! UHuuu kk')
  }
  else{
    console.log('Voce e maior de 18 pode entrar!!')
  }

}
check(me)