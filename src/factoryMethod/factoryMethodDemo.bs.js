// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var FactoryMethod$ReasonOopPatterns = require("./factoryMethod.bs.js");

function show(param) {
  var tmp = Curry._2(FactoryMethod$ReasonOopPatterns.productFactory[0], undefined, /* "A" */65);
  var a = Caml_oo_curry.js1(-633157741, 1, tmp);
  var tmp$1 = Curry._2(FactoryMethod$ReasonOopPatterns.productFactory[0], undefined, /* "B" */66);
  var b = Caml_oo_curry.js1(-633157741, 2, tmp$1);
  console.log(Caml_oo_curry.js1(641535536, 3, a));
  console.log(Caml_oo_curry.js1(641535536, 4, b));
  
}

show(undefined);

exports.show = show;
/*  Not a pure module */