#!/usr/bin/env node
  const { arr, Complex, functionObject, print, assign } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $a;

(((($a = arr(
    Complex("4"),
    arr(Complex("5"), Complex("9")),
    functionObject(function($x) {
        return functionObject(function($y) {
            return $x.add($y);
        });
    })
), print($a(Complex("2").neg()))), assign($a, [Complex("1"), Complex("0")], Complex("0"), 0)), print($a(Complex("1")))), print($a(Complex("1").neg())(Complex("3"))(Complex("7")))), print($a);
  