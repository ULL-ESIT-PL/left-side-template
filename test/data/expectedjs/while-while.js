#!/usr/bin/env node
  const { write, Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a, $b;

(((((write("Counting from 0 to 10"), $a = Complex("0")), $b = (() => {
    let result = false;

    while ($a.lessThan(Complex("10"))) {
        result = (print($a), $a = $a.add(Complex("1")));
    }

    return result;
})()), print($b)), write("Counting towards 0")), $b = (() => {
    let result = false;

    while ($a.greaterThan(Complex("0"))) {
        result = (print($a), $a = $a.sub(Complex("1")));
    }

    return result;
})()), print($b);
  