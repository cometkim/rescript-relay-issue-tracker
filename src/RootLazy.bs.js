

import * as React from "react";

function loadReactComponent(param) {
  var __x = import("./Root.bs.js");
  return __x.then(function (m) {
              return Promise.resolve({
                          default: m.make
                        });
            });
}

function preload(param) {
  import("./Root.bs.js");
  
}

var unsafePlaceholder = {};

function makeProps(prim0, prim1, prim2, prim3) {
  var tmp = {
    queryRef: prim0,
    children: prim1
  };
  if (prim2 !== undefined) {
    tmp.key = prim2;
  }
  return tmp;
}

var make = React.lazy(loadReactComponent);

var UnsafePlaceholder = unsafePlaceholder;

export {
  loadReactComponent ,
  preload ,
  UnsafePlaceholder ,
  makeProps ,
  make ,
  
}
/* make Not a pure module */
