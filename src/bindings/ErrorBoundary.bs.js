

import * as Caml_option from "rescript/lib/es6/caml_option.js";

function makeProps(children, fallback, resetKeys, onError, onReset, onResetKeysChange, param) {
  if (fallback.NAME === "element") {
    var tmp = {
      fallback: fallback.VAL
    };
    if (children !== undefined) {
      tmp.children = Caml_option.valFromOption(children);
    }
    if (resetKeys !== undefined) {
      tmp.resetKeys = Caml_option.valFromOption(resetKeys);
    }
    if (onError !== undefined) {
      tmp.onError = Caml_option.valFromOption(onError);
    }
    if (onReset !== undefined) {
      tmp.onReset = Caml_option.valFromOption(onReset);
    }
    if (onResetKeysChange !== undefined) {
      tmp.onResetKeysChange = Caml_option.valFromOption(onResetKeysChange);
    }
    return tmp;
  }
  var tmp$1 = {
    fallbackRender: fallback.VAL
  };
  if (children !== undefined) {
    tmp$1.children = Caml_option.valFromOption(children);
  }
  if (resetKeys !== undefined) {
    tmp$1.resetKeys = Caml_option.valFromOption(resetKeys);
  }
  if (onError !== undefined) {
    tmp$1.onError = Caml_option.valFromOption(onError);
  }
  if (onReset !== undefined) {
    tmp$1.onReset = Caml_option.valFromOption(onReset);
  }
  if (onResetKeysChange !== undefined) {
    tmp$1.onResetKeysChange = Caml_option.valFromOption(onResetKeysChange);
  }
  return tmp$1;
}

export {
  makeProps ,
  
}
/* No side effect */
