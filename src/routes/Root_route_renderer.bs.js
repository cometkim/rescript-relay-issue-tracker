

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Config from "../Config.bs.js";
import * as RelayRouter from "rescript-relay-router/src/RelayRouter.bs.js";
import * as RootQuery_graphql from "../__generated__/RootQuery_graphql.bs.js";

function loadReactComponent(param) {
  var __x = import("@rescriptModule/Root");
  return __x.then(function (m) {
              return Promise.resolve({
                          default: m.make
                        });
            });
}

function eagerPreload(param) {
  import("@rescriptModule/Root");
  
}

function preload(param) {
  return {
          TAG: /* Component */0,
          moduleName: "Root",
          chunk: "@rescriptModule/Root",
          eagerPreloadFn: eagerPreload
        };
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

var component = React.lazy(loadReactComponent);

function make(props) {
  RelayRouter.useRegisterPreloadedAsset({
        TAG: /* Component */0,
        moduleName: "Root",
        chunk: "@rescriptModule/Root",
        eagerPreloadFn: eagerPreload
      });
  return React.createElement(component, props);
}

var Root = {
  loadReactComponent: loadReactComponent,
  eagerPreload: eagerPreload,
  preload: preload,
  UnsafePlaceholder: unsafePlaceholder,
  makeProps: makeProps,
  component: component,
  make: make
};

var renderer = {
  prepare: (function (param) {
      return Curry._6(RootQuery_graphql.load, param.environment, {
                  name: Config.name,
                  owner: Config.owner
                }, /* StoreOrNetwork */1, undefined, undefined, undefined);
    }),
  prepareCode: (function (param) {
      return [{
                TAG: /* Component */0,
                moduleName: "Root",
                chunk: "@rescriptModule/Root",
                eagerPreloadFn: eagerPreload
              }];
    }),
  render: (function (props) {
      return React.createElement(make, makeProps(props.prepared, props.childRoutes, undefined, undefined));
    })
};

export {
  Root ,
  renderer ,
  
}
/* component Not a pure module */
