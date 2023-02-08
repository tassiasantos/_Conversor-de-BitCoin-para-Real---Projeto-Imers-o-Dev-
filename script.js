var Nome = prompt("Olá, bem vindo(a) como é seu nome?");
var Valor = prompt(
  "Insira aqui quantos BitCoins você quer converter para real:"
);
var valorEmBitCoins = Valor;
var valorEmReal = 120.296;

var valorConvertidoEmReal = valorEmBitCoins * valorEmReal;

alert(
  "Oii, " +
    Nome +
    " , " +
    Valor +
    " BitCoins convertidos para Real é R$" +
    valorConvertidoEmReal
);
