function sum(a, b) {
  
  Object.values(arguments).forEach(argument => {
    if ( ! isFinite( +argument ) ) {
      throw new TypeError( argument + ' — не является числом!');
    }
  });
  
  return +a + +b;

}

module.exports = sum;
