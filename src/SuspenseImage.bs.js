

import * as React from "react";
import * as Belt_HashMapString from "rescript/lib/es6/belt_HashMapString.js";

var $$Image = {};

function make(param) {
  return Belt_HashMapString.make(100);
}

function read(cache, src) {
  var record = Belt_HashMapString.get(cache, src);
  if (record !== undefined) {
    var error = record.status;
    if (typeof error === "number") {
      throw(record.value);
      return ;
    }
    if (error.TAG === /* Resolved */0) {
      return ;
    }
    throw(error._0);
    return ;
  } else {
    var thenable = new Promise((function (resolve, reject) {
            var image = new Image();
            image.onload = (function (param) {
                return resolve(src);
              });
            image.onerror = (function (exn) {
                return reject(exn);
              });
            image.src = src;
            
          }));
    var record$1 = {
      status: /* Pending */0,
      value: thenable
    };
    thenable.then(function (src) {
            record$1.status = {
              TAG: /* Resolved */0,
              _0: src
            };
            return Promise.resolve(src);
          }).catch(function (error) {
          record$1.status = {
            TAG: /* Rejected */1,
            _0: error
          };
          return Promise.resolve(src);
        });
    Belt_HashMapString.set(cache, src, record$1);
    return ;
  }
}

var ImageCache = {
  make: make,
  read: read
};

function SuspenseImage(Props) {
  var src = Props.src;
  var alt = Props.alt;
  var className = Props.className;
  var cache = React.unstable_getCacheForType(make);
  read(cache, src);
  return React.createElement("img", {
              className: className,
              alt: alt,
              src: src
            });
}

var make$1 = SuspenseImage;

export {
  $$Image ,
  ImageCache ,
  make$1 as make,
  
}
/* react Not a pure module */
