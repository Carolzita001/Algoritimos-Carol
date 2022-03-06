var CustoPorHora = 60;
var TotalDeHorasPorDia = 2;
var TotalDeDiasNoMes = 30;

var CustoPorDia = CustoPorHora * TotalDeHorasPorDia;
var CustoPorMes = CustoPorDia * TotalDeDiasNoMes;
console.log("O valor gasto mensalmente pelo pecurista é de:");
console.log(CustoPorMes);