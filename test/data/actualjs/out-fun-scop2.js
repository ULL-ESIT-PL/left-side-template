#!/usr/bin/env node
  const { Complex, print } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-template/src/support-lib.js"); 
  
/* End of support code */

 
  let $x, $f, $b;

((($x = Complex("10"), $f = function($a) {
    let $x;
    return $x = $a.add(Complex("2i")), Complex("3i").mul($x);
}), $b = $f(Complex("4"))), print($b)), print($x);
  