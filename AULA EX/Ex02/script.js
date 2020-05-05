function dados() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // 2000
    var res = document.getElementById('texto')
    var img = document.getElementById('imagem')

     
    if (fano.value.length == 0 || fano.value > ano) { // se ( ano == 0 ou ano maior que o ano atual)
        alert('[ERRO]verificar os dados e tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex') // radsex [0]= mas [1]= fem
        var idade = ano - Number(fano.value) // idade = ano atual - o ano escrito  trasformando em Number !!
        var genero = ''
        var img = document.getElementById('imagem')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 16) {
                //menino
                img.setAttribute('src', 'menino.png')
            
            }else if (idade < 50) {
                //homem
                img.setAttribute('src', 'homem.png')
            
            }else {
                //velho
                img.setAttribute('src', 'velho.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 16) {
                //menina
                img.setAttribute('src', 'menina.png')
            }else if (idade < 50) {
                //mulher
                img.setAttribute('src', 'mulher.png')
            }else {
                //velha
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

}
