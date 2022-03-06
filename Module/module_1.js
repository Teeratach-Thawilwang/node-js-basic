// Create data and process of module
function getAutherName() {
    return "Teeratach Thawilwang";
}

function formatNumber(param) {
    return param.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

class calculator {
    constructor() {}
    add(param1, param2) {
        return param1 + param2;
    }
    minus(param1, param2) {
        return param1 - param2;
    }
    multiply(param1, param2) {
        return param1 * param2;
    }
    divide(param1, param2) {
        if (param2 != 0) {
            return param1 / param2;
        } else {
            return "Error! Cannot divide by zero."
        }
    }
}

// Export
module.exports.getAutherName = getAutherName;
module.exports.formatNumber = formatNumber;
module.exports.calculator = calculator;