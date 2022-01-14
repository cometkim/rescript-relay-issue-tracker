

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Issues from "./Issues.bs.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as RelayRuntime from "relay-runtime";
import * as Hooks from "react-relay/hooks";
import * as HomeRootQuery_graphql from "./__generated__/HomeRootQuery_graphql.bs.js";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";

function use(variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
  var data = Hooks.useLazyLoadQuery(HomeRootQuery_graphql.node, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(HomeRootQuery_graphql.Internal.convertVariables(variables)), {
        fetchKey: fetchKey,
        fetchPolicy: RescriptRelay.mapFetchPolicy(fetchPolicy),
        networkCacheConfig: networkCacheConfig
      });
  return RescriptRelay_Internal.internal_useConvertedValue(HomeRootQuery_graphql.Internal.convertResponse, data);
}

function useLoader(param) {
  var match = Hooks.useQueryLoader(HomeRootQuery_graphql.node);
  var loadQueryFn = match[1];
  var loadQuery = React.useMemo((function () {
          return function (param, param$1, param$2, param$3) {
            return Curry._2(loadQueryFn, HomeRootQuery_graphql.Internal.convertVariables(param), {
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
  Hooks.fetchQuery(environment, HomeRootQuery_graphql.node, HomeRootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).subscribe({
        next: (function (res) {
            return Curry._1(onResult, {
                        TAG: /* Ok */0,
                        _0: HomeRootQuery_graphql.Internal.convertResponse(res)
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
  var __x = Hooks.fetchQuery(environment, HomeRootQuery_graphql.node, HomeRootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).toPromise();
  return __x.then(function (res) {
              return Promise.resolve(HomeRootQuery_graphql.Internal.convertResponse(res));
            });
}

function usePreloaded(queryRef, param) {
  var data = Hooks.usePreloadedQuery(HomeRootQuery_graphql.node, queryRef);
  return RescriptRelay_Internal.internal_useConvertedValue(HomeRootQuery_graphql.Internal.convertResponse, data);
}

function retain(environment, variables) {
  var operationDescriptor = RelayRuntime.createOperationDescriptor(HomeRootQuery_graphql.node, HomeRootQuery_graphql.Internal.convertVariables(variables));
  return environment.retain(operationDescriptor);
}

var HomeRootQuery_makeVariables = HomeRootQuery_graphql.Utils.makeVariables;

var HomeRootQuery = {
  makeVariables: HomeRootQuery_makeVariables,
  Types: undefined,
  use: use,
  useLoader: useLoader,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  usePreloaded: usePreloaded,
  retain: retain
};

function HomeRoot(Props) {
  var queryRef = Props.queryRef;
  var data = usePreloaded(queryRef, undefined);
  var repository = data.repository;
  if (repository !== undefined) {
    return React.createElement(Issues.make, {
                repository: repository.fragmentRefs
              });
  } else {
    return null;
  }
}

var make = HomeRoot;

export {
  HomeRootQuery ,
  make ,
  
}
/* react Not a pure module */
