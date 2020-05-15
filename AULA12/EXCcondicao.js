var idade = 13
var voto = 'sim'
console.log(`Voce tem ${idade} anos`)
if (idade < 16)
    console.log(`Nao pode votar`)
else {
    if (idade < 18 || idade > 65)
        console.log(`Seu e voto opcional`)
    else {
        console.log(`Seu Voto e obrigatorio`)
    }
}
