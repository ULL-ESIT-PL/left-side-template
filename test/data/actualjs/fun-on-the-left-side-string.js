#!/usr/bin/env node
  const { functionObject, assign, Complex, write } = require("/Users/casianorodriguezleon/campus-virtual/2324/pl2324/practicas/left-side/left-side-solution/src/support-lib.js"); 
  
/* End of support code */

 
  let $f;

(((($f = functionObject(function($x) {
    return functionObject(function($y) {
        return $x.add($y);
    });
}), assign($f, ["string", Complex("3")], Complex("8"), 0)), assign($f, [Complex("2"), "string"], Complex("9"), 0)), write($f("string")(Complex("3")))), write($f("string")(Complex("4")))), write($f(Complex("2"))("string"));
  