

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as IssuesListItem from "./IssuesListItem.bs.js";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as Issues_repository_graphql from "./__generated__/Issues_repository_graphql.bs.js";
import * as IssuesPaginationQuery_graphql from "./__generated__/IssuesPaginationQuery_graphql.bs.js";

function internal_makeRefetchableFnOpts(fetchPolicy, onComplete, param) {
  var tmp = {};
  var tmp$1 = RescriptRelay.mapFetchPolicy(fetchPolicy);
  if (tmp$1 !== undefined) {
    tmp.fetchPolicy = Caml_option.valFromOption(tmp$1);
  }
  var tmp$2 = RescriptRelay_Internal.internal_nullableToOptionalExnHandler(onComplete);
  if (tmp$2 !== undefined) {
    tmp.onComplete = Caml_option.valFromOption(tmp$2);
  }
  return tmp;
}

function useRefetchable(fRef) {
  var match = Hooks.useRefetchableFragment(Issues_repository_graphql.node, fRef);
  var refetchFn = match[1];
  var data = RescriptRelay_Internal.internal_useConvertedValue(Issues_repository_graphql.Internal.convertFragment, match[0]);
  return [
          data,
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return Curry._2(refetchFn, RescriptRelay_Internal.internal_removeUndefinedAndConvertNullsRaw(IssuesPaginationQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [refetchFn])
        ];
}

function use(fRef) {
  var data = Hooks.useFragment(Issues_repository_graphql.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(Issues_repository_graphql.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(Issues_repository_graphql.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return Issues_repository_graphql.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

function usePagination(fr) {
  var p = Hooks.usePaginationFragment(Issues_repository_graphql.node, fr);
  var data = RescriptRelay_Internal.internal_useConvertedValue(Issues_repository_graphql.Internal.convertFragment, p.data);
  return {
          data: data,
          loadNext: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadNext(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadNext]),
          loadPrevious: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadPrevious(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadPrevious]),
          hasNext: p.hasNext,
          hasPrevious: p.hasPrevious,
          isLoadingNext: p.isLoadingNext,
          isLoadingPrevious: p.isLoadingPrevious,
          refetch: React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(IssuesPaginationQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

function useBlockingPagination(fRef) {
  var p = Hooks.useBlockingPaginationFragment(Issues_repository_graphql.node, fRef);
  var data = RescriptRelay_Internal.internal_useConvertedValue(Issues_repository_graphql.Internal.convertFragment, p.data);
  return {
          data: data,
          loadNext: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadNext(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadNext]),
          loadPrevious: React.useMemo((function () {
                  return function (param, param$1, param$2) {
                    return p.loadPrevious(param, {
                                onComplete: RescriptRelay_Internal.internal_nullableToOptionalExnHandler(param$1)
                              });
                  };
                }), [p.loadPrevious]),
          hasNext: p.hasNext,
          hasPrevious: p.hasPrevious,
          refetch: React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(IssuesPaginationQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

var makeRefetchVariables = IssuesPaginationQuery_graphql.Types.makeRefetchVariables;

var IssuesRepositoryFragment_getConnectionNodes = Issues_repository_graphql.Utils.getConnectionNodes;

var IssuesRepositoryFragment = {
  getConnectionNodes: IssuesRepositoryFragment_getConnectionNodes,
  Types: undefined,
  internal_makeRefetchableFnOpts: internal_makeRefetchableFnOpts,
  useRefetchable: useRefetchable,
  use: use,
  useOpt: useOpt,
  usePagination: usePagination,
  useBlockingPagination: useBlockingPagination,
  makeRefetchVariables: makeRefetchVariables
};

function Issues(Props) {
  var repository = Props.repository;
  var match = usePagination(repository);
  var isLoadingNext = match.isLoadingNext;
  var loadNext = match.loadNext;
  var loadMore = React.useCallback((function (param) {
          if (isLoadingNext) {
            return ;
          } else {
            Curry._3(loadNext, 10, undefined, undefined);
            return ;
          }
        }), [
        isLoadingNext,
        loadNext
      ]);
  var edges = match.data.issues.edges;
  return React.createElement("div", {
              className: "issues"
            }, edges !== undefined ? Belt_Array.map(edges, (function (edge) {
                      if (edge === undefined) {
                        return null;
                      }
                      var node = edge.node;
                      if (node !== undefined) {
                        return React.createElement("div", {
                                    key: edge.__id,
                                    className: "issues-issue"
                                  }, React.createElement(IssuesListItem.make, {
                                        issue: node.fragmentRefs
                                      }));
                      } else {
                        return null;
                      }
                    })) : null, React.createElement("button", {
                  className: "issues-load-more",
                  name: "load more issues",
                  type: "button",
                  onClick: (function (param) {
                      return Curry._1(loadMore, undefined);
                    })
                }, "Load More"));
}

var make = Issues;

export {
  IssuesRepositoryFragment ,
  make ,
  
}
/* react Not a pure module */
