/*
===========================================================
Exercícios Práticos - Estruturas de Decisão (if, else, switch)
===========================================================
*/

// 1. Crie uma variável `idade` e use um `if` para exibir "Maior de idade" se idade >= 18.
let idade = 20; // valor de exemplo

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 2. Crie uma variável `hora` e use `if/else` para exibir "Bom dia" se hora < 12 e "Boa tarde" caso contrário.
let hora = 10; // valor de exemplo

if (hora < 12) {
    console.log("Bom dia");
} else {
    console.log("Boa tarde");
}    

// 3. Crie uma variável `nota` e use `if/else if/else` para exibir:
// "Excelente" se nota >= 9
// "Aprovado" se nota >= 7
// "Recuperação" se nota >= 5
// "Reprovado" caso contrário
console.log("Menor de idade");
}       
// "Excelente" se nota >= 9
let nota = 8;
if (nota >= 9) {        
// "Aprovado" se nota >= 7
    console.log("Excelente");
}   
// "Recuperação" se nota >= 5 
else if (nota >= 7) {
    console.log("Aprovado");    
// "Reprovado" caso contrário
}
else if (nota >= 5) {       


// 4. Crie uma variável `diaSemana` (1 a 7) e use `switch/case` para exibir o nome do dia correspondente.
let diaSemana = 4; // pode variar de 1 a 7

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido! Digite um valor de 1 a 7.");
}     


// 5. Modifique o exercício anterior para usar `default` caso o valor da variável não seja de 1 a 7.
let diaSemana = 10; // valor qualquer (pode ser de 1 a 7)

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Valor inválido! Digite um número entre 1 e 7.");
}


// 6. Crie uma variável `cor` e use `switch/case` para agrupar cores primárias (vermelho, azul, verde) e secundárias (amarelo, roxo, laranja).
let cor = "roxo"; // pode ser vermelho, azul, verde, amarelo, roxo, laranja

switch (cor.toLowerCase()) {
    case "vermelho":
    case "azul":
    case "verde":
        console.log("Cor primária");
        break;

    case "amarelo":
    case "roxo":
    case "laranja":
        console.log("Cor secundária");
        break;

    default:
        console.log("Cor não reconhecida");
}


// 7. Crie um `if` que verifique se um número é positivo, negativo ou zero, e exiba a mensagem correspondente.
{
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
} 


// 8. Crie um `if/else` que verifica se um usuário pode acessar um sistema com base em idade >= 18.
let idade = 17; // valor de exemplo

if (idade >= 18) {
    console.log("Acesso permitido: usuário é maior de idade.");
} else {
    console.log("Acesso negado: usuário é menor de idade.");
}
➡️ Se idade = 17, a saída será: "Acesso negado: usuário é menor de idade."

🔹 Exemplo extra — Testar número positivo (usando o que você começou)
javascript
Copiar código
let numero = -5;

if (numero > 0) {
    console.log("Número positivo");
} else {
    console.log("Número negativo ou zero");
}


// 9. Crie um `switch` que exiba uma mensagem diferente para cada mês do ano (1 a 12), usando `default` para valor inválido.
let mes = 5; // valor de exemplo (1 a 12)

switch (mes) {
    case 1:
        console.log("Janeiro - Início do ano, tempo de renovar metas!");
        break;
    case 2:
        console.log("Fevereiro - Carnaval e muita alegria!");
        break;
    case 3:
        console.log("Março - Chegada do outono.");
        break;
    case 4:
        console.log("Abril - Páscoa e renovação.");
        break;
    case 5:
        console.log("Maio - Mês das mães.");
        break;
    case 6:
        console.log("Junho - Festas juninas!");
        break;
    case 7:
        console.log("Julho - Férias escolares.");
        break;
    case 8:
        console.log("Agosto - Mês do folclore.");
        break;
    case 9:
        console.log("Setembro - Chegada da primavera.");
        break;
    case 10:
        console.log("Outubro - Dia das crianças e Halloween!");
        break;
    case 11:
        console.log("Novembro - Mês da consciência negra.");
        break;
    case 12:
        console.log("Dezembro - Natal e fim de ano!");
        break;
    default:
        console.log("Mês inválido! Digite um número de 1 a 12.");
}


// 10. Crie um `if/else if/else` que classifica a velocidade de um veículo:
// <= 40 km/h → "Devagar"
// <= 80 km/h → "Moderado"
// <= 120 km/h → "Rápido"
// > 120 km/h → "Muito rápido"
{
    console.log("Número negativo");
} else {
    console.log("Número é zero");
}       
// <= 40 km/h → "Devagar"
else if (numero >= 0 && numero <= 40) {     
// <= 80 km/h → "Moderado"
    console.log("Devagar");
} else if (numero > 40 && numero <= 80) {   
// <= 120 km/h → "Rápido"
    console.log("Moderado");
} else if (numero > 80 && numero <= 120) {  
// > 120 km/h → "Muito rápido"
    console.log("Rápido");      
    
    
// 11. Crie uma variável booleana isAdmin e use if/else para exibir se o usuário tem acesso ou não.
let isAdmin = true; // pode ser true ou false

if (isAdmin) {
    console.log("Acesso permitido: usuário é administrador.");
} else {
    console.log("Acesso negado: usuário não é administrador.");
}


// 12. Crie uma variável `temperatura` e use `switch` para exibir:
// "Frio" se 0, 1, 2
// "Agradável" se 3, 4, 5
// "Quente" se 6, 7, 8
// "Desconhecido" para outros valores
console.log("Muito rápido");
}       
// "Frio" se 0, 1, 2
let isAdmin = true;     
// "Agradável" se 3, 4, 5
if (isAdmin) {
    console.log("Acesso concedido");
}       
// "Quente" se 6, 7, 8
else {
    console.log("Acesso negado");
}   
// "Desconhecido" para outros valores
let temperatura = 4;
switch (temperatura) {   

// 13. Crie um `if` que verifica se um número é par ou ímpar.
case 0:
    case 1:
    case 2:
        console.log("Frio");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Agradável");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Quente");
        break;
    default:
        console.log("Desconhecido");
}       

// 14. Crie um `switch` para exibir a estação do ano com base em um número de 1 a 4.
let estacao = 3; // valor entre 1 e 4

switch (estacao) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Valor inválido! Digite um número de 1 a 4.");
}


// 15. Crie um `if/else if/else` para classificar idade de uma pessoa:
// 0-12 → Criança
// 13-19 → Adolescente
// 20-59 → Adulto
// 60+ → Idoso
console.log("Número é par");
}       
// 0-12 → Criança
else {
    console.log("Número é ímpar");
}   
// 13-19 → Adolescente
let estacao = 2;        
// 20-59 → Adulto
if (estacao === 1) {
    console.log("Verão");
}       
// 60+ → Idoso
else if (estacao === 2) {
    console.log("Outono");
}       
else if (estacao === 3) {
    console.log("Inverno");
}       
else if (estacao === 4) {
    console.log("Primavera");
}       
else {
    console.log("Estação desconhecida");
}

// 16. Crie uma variável `saldo` e use `if` para verificar se é positivo, negativo ou zero.
let saldo = -10; // valor de exemplo

if (saldo > 0) {
    console.log("Saldo positivo");
} else if (saldo < 0) {
    console.log("Saldo negativo");
} else {
    console.log("Saldo zero");
}

// 17. Crie uma variável `letra` e use `switch` para verificar se é vogal ou consoante.
let letra = "a"; // exemplo: a, b, c ...

switch (letra.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vogal");
        break;
    default:
        console.log("Consoante");
}

// 18. Crie um `if/else` que verifica se um número está dentro de um intervalo (10 a 20).
else if (idadePessoa >= 13 && idadePessoa <= 19) {
    console.log("Adolescente");
} else if (idadePessoa >= 20 && idadePessoa <= 59) {
    console.log("Adulto");
} else if (idadePessoa >= 60) {
    console.log("Idoso");
} else {
    console.log("Idade inválida");
}

// 19. Crie um `switch` para exibir mensagens diferentes para valores 1, 2, 3 e default.
let valor = 2; // valor de exemplo

switch (valor) {
    case 1:
        console.log("Você escolheu o valor 1");
        break;
    case 2:
        console.log("Você escolheu o valor 2");
        break;
    case 3:
        console.log("Você escolheu o valor 3");
        break;
    default:
        console.log("Valor inválido");
}

// 20. Crie um `if` que verifica se um ano é bissexto (divisível por 4, mas não por 100, exceto se divisível por 400).
let ano = 2024; // valor de exemplo

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(ano + " é um ano bissexto");
} else {
    console.log(ano + " não é um ano bissexto");
}

// 21. Crie um `if/else` que verifica se uma string contém pelo menos 5 caracteres.
{
    console.log("Saldo negativo");
} else {
    console.log("Saldo é zero");
}
// 22. Crie uma variável `nota1` e `nota2` e use `if/else` para exibir se a média é maior ou igual a 7.
else if (saldo === 0) {
    console.log("Saldo é zero");
} else {
    console.log("Saldo inválido");
}   

// 23. Crie um `switch` que exiba o tipo de triângulo com base em um número de 1 a 3 (1: Equilátero, 2: Isósceles, 3: Escaleno).
let letra = 'a';
switch (letra.toLowerCase()) {  
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("É uma vogal");
        break;
    default:
        console.log("É uma consoante");
}   

// 24. Crie um `if/else` que verifica se uma variável `senha` corresponde à senha correta.
let numeroIntervalo = 15;
if (numeroIntervalo >= 10 && numeroIntervalo <= 20) {   
    console.log("Número está dentro do intervalo");
}   

// 25. Crie um `switch` que exiba a quantidade de dias do mês baseado em uma variável `mes` (1 a 12).
let mes = 2;
switch (mes) {      
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias (ano bissexto)");
        break;
    default:
        console.log("Mês inválido");
}

// 26. Crie um `if/else` que verifica se um número é múltiplo de 3, de 5, ou de ambos.
let senha = "12345";
if (senha === "12345") {
    console.log("Senha correta");
}   

// 27. Crie um `switch` que retorna "Sim" para caso 1 e 2, "Não" para caso 3 e 4, e "Talvez" para outros.
else {
    console.log("Senha incorreta");
}   

// 28. Crie um `if` que verifica se uma variável `temperatura` está em uma faixa entre 18 e 25 graus.
let temperatura = 22; // valor de exemplo

if (temperatura >= 18 && temperatura <= 25) {
    console.log("Temperatura agradável");
} else {
    console.log("Temperatura fora da faixa ideal");
}

// 29. Crie um `switch` que agrupe vários casos em uma mesma ação (por exemplo, cores quentes e frias).
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 dias");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias");
        break;
    case 2:
        console.log("28 ou 29 dias (ano bissexto)");
        break;
    default:
        console.log("Mês inválido");
}   

// 30. Crie um `if/else` que combina duas condições (ex: idade >= 18 e isAdmin = true) para permitir ou negar acesso.
if (mesDias >= 1 && mesDias <= 12) {
    console.log("Mês válido");
}







https://github.com/Rodrigojesussilva/JavaScript.git



