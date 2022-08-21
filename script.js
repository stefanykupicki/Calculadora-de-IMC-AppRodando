var buttonCalculateImc = document.querySelector('#button-calculate-imc');
buttonCalculateImc.addEventListener('click', handleButtonClick);

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#paragraph-result');
  var imcText = document.querySelector('#resultado');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  var text = ''
  if ((imc >= 16) && (imc <= 16.9)) {
    text="Muito abaixo do peso"
  } else if ((imc >= 17) && (imc < 18.5)) {
    text="Abaixo do peso"
  } else if ((imc >= 18.5) && (imc < 25)) {
    text="Peso normal"
  } else if ((imc >= 25) && (imc < 30)) {
    text="Acima do peso"
  } else if ((imc >= 30) && (imc < 35)) {
    text="Obesidade grau I"
  } else if ((imc >= 35) && (imc <= 40)) {
    text="Obesidade grau II"
  } else if (imc > 40) {
    text="Obesidade grau III"
  }

  console.log(text)

  imcResult.innerHTML = 'O IMC desses dados é <strong id="imc-result">'+formattedImc+'</strong>';
  imcText.innerHTML = 'Este valor considera que você está na faixa <strong id="imc-text">'+text+'</strong>';
}