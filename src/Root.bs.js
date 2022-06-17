

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as RelayRuntime from "relay-runtime";
import * as RootQuery_graphql from "./__generated__/RootQuery_graphql.bs.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";

function use(variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
  var data = Hooks.useLazyLoadQuery(RootQuery_graphql.node, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(RootQuery_graphql.Internal.convertVariables(variables)), {
        fetchKey: fetchKey,
        fetchPolicy: RescriptRelay.mapFetchPolicy(fetchPolicy),
        networkCacheConfig: networkCacheConfig
      });
  return RescriptRelay_Internal.internal_useConvertedValue(RootQuery_graphql.Internal.convertResponse, data);
}

function useLoader(param) {
  var match = Hooks.useQueryLoader(RootQuery_graphql.node);
  var loadQueryFn = match[1];
  var loadQuery = React.useMemo((function () {
          return function (param, param$1, param$2, param$3) {
            return Curry._2(loadQueryFn, RootQuery_graphql.Internal.convertVariables(param), {
                        fetchPolicy: param$1,
                        networkCacheConfig: param$2
                      });
          };
        }), [loadQueryFn]);
  return [
          Caml_option.nullable_to_opt(match[0]),
          loadQuery,
          match[2]
        ];
}

function $$fetch(environment, variables, onResult, networkCacheConfig, fetchPolicy, param) {
  Hooks.fetchQuery(environment, RootQuery_graphql.node, RootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).subscribe({
        next: (function (res) {
            return Curry._1(onResult, {
                        TAG: /* Ok */0,
                        _0: RootQuery_graphql.Internal.convertResponse(res)
                      });
          }),
        error: (function (err) {
            return Curry._1(onResult, {
                        TAG: /* Error */1,
                        _0: err
                      });
          })
      });
  
}

function fetchPromised(environment, variables, networkCacheConfig, fetchPolicy, param) {
  var __x = Hooks.fetchQuery(environment, RootQuery_graphql.node, RootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).toPromise();
  return __x.then(function (res) {
              return Promise.resolve(RootQuery_graphql.Internal.convertResponse(res));
            });
}

function usePreloaded(queryRef, param) {
  var data = Hooks.usePreloadedQuery(RootQuery_graphql.node, queryRef);
  return RescriptRelay_Internal.internal_useConvertedValue(RootQuery_graphql.Internal.convertResponse, data);
}

function retain(environment, variables) {
  var operationDescriptor = RelayRuntime.createOperationDescriptor(RootQuery_graphql.node, RootQuery_graphql.Internal.convertVariables(variables));
  return environment.retain(operationDescriptor);
}

var RootQuery = {
  Types: undefined,
  use: use,
  useLoader: useLoader,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  usePreloaded: usePreloaded,
  retain: retain
};

function Root(Props) {
  var queryRef = Props.queryRef;
  var children = Props.children;
  var data = usePreloaded(queryRef, undefined);
  var repository = data.repository;
  return React.createElement("div", {
              className: "root"
            }, React.createElement("header", {
                  className: "header"
                }, repository !== undefined ? repository.owner.login + "/" + repository.name + ": Issues" : "No repositories found"), React.createElement("section", {
                  className: "content"
                }, React.createElement(React.Suspense, {
                      children: children,
                      fallback: "Loading..."
                    })));
}

var make = Root;

export {
  RootQuery ,
  make ,
  
}
/* react Not a pure module */
