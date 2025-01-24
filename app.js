const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },  
  times: function(a, b) {
    return a * b;
  },    
  divide: function(a, b) {
    return a / b;
  },  
  power: function(a, b) {
    return a ** b;
  },  
  
};

const plusreuslt = calculator.plus(2, 3);
const minusreuslt = calculator.plus(plusreuslt, 11);
const timereuslt = calculator.plus(10, minusreuslt);
const dividereuslt = calculator.plus(timereuslt, plusreuslt);
const powerreuslt = calculator.plus(dividereuslt, minusreuslt);