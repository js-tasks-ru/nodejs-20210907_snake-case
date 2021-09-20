function sum(a, b) {
  
  for ( let arg of [a, b] ) {
    if ( ! isFinite( +arg ) ) {
      throw new TypeError( arg + ' — не является числом!');
    }
  }
  
  return +a + +b;

}

module.exports = sum;
