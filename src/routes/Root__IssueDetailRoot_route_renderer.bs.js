

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as RelayRouter from "rescript-relay-router/src/RelayRouter.bs.js";
import * as IssueDetailRootQuery_graphql from "../__generated__/IssueDetailRootQuery_graphql.bs.js";

function loadReactComponent(param) {
  var __x = import("@rescriptModule/IssueDetailRoot");
  return __x.then(function (m) {
              return Promise.resolve({
                          default: m.make
                        });
            });
}

function eagerPreload(param) {
  import("@rescriptModule/IssueDetailRoot");
  
}

function preload(param) {
  return {
          TAG: /* Component */0,
          moduleName: "IssueDetailRoot",
          chunk: "@rescriptModule/IssueDetailRoot",
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
        moduleName: "IssueDetailRoot",
        chunk: "@rescriptModule/IssueDetailRoot",
        eagerPreloadFn: eagerPreload
      });
  return React.createElement(component, props);
}

var IssueDetailRoot = {
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
      return Curry._6(IssueDetailRootQuery_graphql.load, param.environment, {
                  id: param.id
                }, /* StoreOrNetwork */1, undefined, undefined, undefined);
    }),
  prepareCode: (function (param) {
      return [{
                TAG: /* Component */0,
                moduleName: "IssueDetailRoot",
                chunk: "@rescriptModule/IssueDetailRoot",
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
  IssueDetailRoot ,
  renderer ,
  
}
/* component Not a pure module */
