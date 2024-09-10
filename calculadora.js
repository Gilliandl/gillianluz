
var numero1Input = document.getElementById('numero1Input');
var numero2Input = document.getElementById('numero2Input');

// Atenção, deem preferência pelo uso de IDs e getElementById
var section = document.getElementsByTagName('section')[0]; //se usar section.removeChild(resultado); utilizar a variavel como global

function calcular() {
    var numero1 = numero1Input.value;
    var numero2 = numero2Input.value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Entrada inválida! Por favor informe número.');
        return;
    }

    var operacaoSelect = document.getElementById('operacaoSelect').value;
    var resultado;

    switch (operacaoSelect) {
        case '+':
            resultado = numero1 + numero2;
            break;

        case '-':
            resultado = numero1 - numero2;
            break;

        case '*':
            resultado = numero1 * numero2;
            break;

        case '/':
            resultado = numero1 / numero2;
            break;
    }

    var paragrafoResultado = document.getElementById('resultado');
    var textoParagrafo = document.createTextNode('Resultado: ' + resultado)

    if (!paragrafoResultado) {
        paragrafoResultado = document.createElement('p');
        paragrafoResultado.setAttribute('id', 'resultado')
        paragrafoResultado.appendChild(textoParagrafo);
        section.appendChild(paragrafoResultado);
    }else{
        if(paragrafoResultado.firstChild){
            paragrafoResultado.removeChild(paragrafoResultado.firstChild);
        }
        paragrafoResultado.appendChild(textoParagrafo);
    }
}

function limpar() {
    numero1Input.value = '';
    numero2Input.value = '';
    operacaoSelect.value = '+'

    var paragrafoResultado = document.getElementById('resultado')

    if (paragrafoResultado) {
        //resultado.remove();
        //section.removeChild(resultado);
        if (paragrafoResultado.firstChild){
            paragrafoResultado.removeChild(paragrafoResultado.firstChild);
        }
    }
   // alert('limpar');
}

document.getElementById('limparButton').addEventListener('click', limpar)