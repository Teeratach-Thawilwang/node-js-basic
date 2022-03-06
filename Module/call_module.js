// import module
const md1 = require("./module1/module_1.js");

console.log(md1.getAutherName());
console.log(md1.formatNumber(14823145));

mdCal = new md1.calculator()
console.log(mdCal.add(5, 10));
console.log(mdCal.minus(5, 10));
console.log(mdCal.multiply(5, 10));
console.log(mdCal.divide(5, 10));