let nome = document.getElementById('nome')
let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let resultado = document.getElementById('resultado')
let calcular = document.getElementById('btn')

calcular.addEventListener('click', e => {
    const imc = (parseFloat(peso.value)/(parseFloat(altura.value) * parseFloat(altura.value)))
    let classificacao = ''
    if (imc < 18.5) {
        classificacao = "abaixo do peso"
    } else if (imc < 25) {
        classificacao = "no peso ideal"
    } else if (imc < 30){
        classificacao = "levemente acima do peso"
    } else if (imc < 35){
        classificacao = "com obesidade grau I"
    } else if (imc < 40){
        classificacao = "com obesidade grau II"
    } else {
        classificacao = "com obesidade grau III"
    }
    console.log('ola')
    resultado.textContent = `${nome.value} o seu IMC é ${imc.toFixed(2)} e você está ${classificacao}`
})