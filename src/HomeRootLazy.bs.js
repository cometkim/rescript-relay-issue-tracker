

import * as React from "react";

function loadReactComponent(param) {
  var __x = import("./HomeRoot.bs.js");
  return __x.then(function (m) {
              return Promise.resolve({
                          default: m.make
                        });
            });
}

function preload(param) {
  import("./HomeRoot.bs.js");
  
}

var unsafePlaceholder = {};

function makeProps(prim0, prim1, prim2) {
  var tmp = {
    queryRef: prim0
  };
  if (prim1 !== undefined) {
    tmp.key = prim1;
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
