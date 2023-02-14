let n1 = ""
let n2 = ""
let operator = ""
let res = ""

function addNumber(number) { // Comando para inserir o numero que vai ser usado
    if (res != "" && operator === "") { // Comando para verificar se tem número adiconado. Vai comparar se tem também o operador
        erase() // Vai chamar função para fazer limpeza de tela
    }

    if (operator === "") {
        document.getElementById('display').innerHTML += number;
        n1 += number;  
    } else if (operator != "" && n2 === "") {
        document.getElementById('display').innerHTML = "";
        document.getElementById('display').innerHTML = number;
        n2 += number;
    } else {
        document.getElementById('display').innerHTML = number;
        n2 += number;
    }
}

function erase() { // Faz limpeza da tela após adicionar o valor desejado
    n1 = ""
    n2 = "" 
    operador = ""
    res = ""
    
    document.getElementById('display').innerHTML = "";
}


function addOperator(operatorSelected) {
  if (n1 != "") {
    operator = operatorSelected;
  }

  
} 

function calculate(event) { 
  event.preventDefault() // comando para não permitir ficar carregando a tela novamente (recarregando) pois foi utilizado um submit
  if (n1 !== "" && n2 !== "" && operator !== ""){
      switch (operator) {
        case '+':
            res = parseInt(n1) + parseInt(n2);
        break;
        case '-':
            res = parseInt(n1) - parseInt(n2);
        break;
        case '*':
            res = parseInt(n1) * parseInt(n2);
        break;   
        case '/':
            res = parseInt(n1) / parseInt(n2);
        break;
        case '^':
            res = parseInt(n1) ** parseInt(n2)
        break;
        default:
        break;
      }
    } else if(n1 !== "" && n2 === "" && operator === "") {
            res = parseInt(n1) ** (1/2)
    }

  document.getElementById('display').innerHTML = "" +  res;
  n1 = "" + res
  n2 = ""
  operator = ""
}








