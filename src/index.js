module.exports = function check(str, bracketsConfig) {
  
  let openBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
  };

  let bracketsPair = {};
  for (let key in bracketsConfig) {
    bracketsPair[bracketsConfig[key][1]] = bracketsConfig[key][0];
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (bracketsPair[currentSymbol] === currentSymbol && stack.includes(currentSymbol)) {
      stack.pop();
    } else {
      if (openBrackets.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false
        }      
        let topElement = stack[stack.length - 1];
        if (bracketsPair[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false
        }
      }
    }
  }
  return stack.length === 0
}