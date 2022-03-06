var Quantidadevendida = 104;
var Custo = 1.54;
var Preco = 2.00;
var parcela = 28;

var Vendido = Quantidadevendida * Preco;
var Gastos = Quantidadevendida * Custo;

var Lucro = Vendido - Gastos;
console.log("O lucro na venda de 104 latas de coca-cola é:");
console.log(Lucro);

console.log("Se almentasse 28 latinhas:");
var Adicaode28 = Quantidadevendida + parcela;
var Vendido2 = Adicaode28 * Preco;
var Gastos2 = Adicaode28 * Custo;
var Lucro2 = Vendido2 - Gastos2;
console.log("O lucro na venda de 132 latas de cocq-cola é:");
console.log(Lucro2);