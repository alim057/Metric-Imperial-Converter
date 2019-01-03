/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('math')


function ConvertHandler() {
  
  this.getNum = function(input){
    var result = input.replace(/[a-z]/ig,'')
    var regex = /\d/g;
    if(!regex.test(result)){return 'No number'}
    else if(result.includes('//')){return 'Invalid input'}
    else if(result.includes('/')){return eval(result)}
    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    var unit = input;
    var regex = /gal|mi|km|lbs|kg|l/i
    var result = unit.match(regex);
    if(!result){return 'Not a unit'}
    return result.toString();
  };
  
  this.getReturnUnit = function(initUnit) {
    var unit = initUnit.toLowerCase();
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result = expect[input.indexOf(unit)]
    return result;
  };

  this.spellOutUnit = function(unit) {
    const unitLowerCase = unit
    const units = {
      gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
      Gal: 'gallons',
      L: 'liters',
      Mi: 'miles',
      Km: 'kilometers',
      Lbs: 'pounds',
      Kg: 'kilograms'
    }

    return units[unitLowerCase];
  };
  
  this.convert = function(initNum, initUnit) {
    var unit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;    
    const convertTable = {
      gal: galToL,
      l: 1 / galToL,
      mi: miToKm,
      km: 1 / miToKm,
      lbs: lbsToKg,
      kg: 1 / lbsToKg
    };
    var num = initNum * convertTable[initUnit.toLowerCase()]
    var result = num.toFixed(4)
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var unit = this.spellOutUnit(initUnit);
    var reUnit = this.spellOutUnit(returnUnit)
    var result = initNum + ' ' + unit + " converts to " + " " + returnNum + " " +reUnit
    return result;
  };
  
}

module.exports = ConvertHandler;