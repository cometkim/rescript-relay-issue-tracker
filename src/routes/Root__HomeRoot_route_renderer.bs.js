

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Config from "../Config.bs.js";
import * as RelayRouter from "rescript-relay-router/src/RelayRouter.bs.js";
import * as HomeRootQuery_graphql from "../__generated__/HomeRootQuery_graphql.bs.js";

function loadReactComponent(param) {
  var __x = import("@rescriptModule/HomeRoot");
  return __x.then(function (m) {
              return Promise.resolve({
                          default: m.make
                        });
            });
}

function eagerPreload(param) {
  import("@rescriptModule/HomeRoot");
  
}

function preload(param) {
  return {
          TAG: /* Component */0,
          moduleName: "HomeRoot",
          chunk: "@rescriptModule/HomeRoot",
          eagerPreloadFn: eagerPreload
        };
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

var component = React.lazy(loadReactComponent);

function make(props) {
  RelayRouter.useRegisterPreloadedAsset({
        TAG: /* Component */0,
        moduleName: "HomeRoot",
        chunk: "@rescriptModule/HomeRoot",
        eagerPreloadFn: eagerPreload
      });
  return React.createElement(component, props);
}

var HomeRoot = {
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
      return Curry._6(HomeRootQuery_graphql.load, param.environment, {
                  name: Config.name,
                  owner: Config.owner
                }, /* StoreOrNetwork */1, undefined, undefined, undefined);
    }),
  prepareCode: (function (param) {
      return [{
                TAG: /* Component */0,
                moduleName: "HomeRoot",
                chunk: "@rescriptModule/HomeRoot",
                eagerPreloadFn: eagerPreload
              }];
    }),
  render: (function (props) {
      return React.createElement(make, {
                  queryRef: props.prepared
                });
    })
};

export {
  HomeRoot ,
  renderer ,
  
}
/* component Not a pure module */
