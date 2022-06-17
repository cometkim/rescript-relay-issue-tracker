

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ReactMarkdown from "./bindings/ReactMarkdown.bs.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as SuspenseImage from "./SuspenseImage.bs.js";
import ReactMarkdown$1 from "react-markdown";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as IssueDetailCommentsQuery_graphql from "./__generated__/IssueDetailCommentsQuery_graphql.bs.js";
import * as IssueDetailComments_issue_graphql from "./__generated__/IssueDetailComments_issue_graphql.bs.js";

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
  var match = Hooks.useRefetchableFragment(IssueDetailComments_issue_graphql.node, fRef);
  var refetchFn = match[1];
  var data = RescriptRelay_Internal.internal_useConvertedValue(IssueDetailComments_issue_graphql.Internal.convertFragment, match[0]);
  return [
          data,
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3) {
                    return Curry._2(refetchFn, RescriptRelay_Internal.internal_removeUndefinedAndConvertNullsRaw(IssueDetailCommentsQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [refetchFn])
        ];
}

function use(fRef) {
  var data = Hooks.useFragment(IssueDetailComments_issue_graphql.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(IssueDetailComments_issue_graphql.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(IssueDetailComments_issue_graphql.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return IssueDetailComments_issue_graphql.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

function usePagination(fr) {
  var p = Hooks.usePaginationFragment(IssueDetailComments_issue_graphql.node, fr);
  var data = RescriptRelay_Internal.internal_useConvertedValue(IssueDetailComments_issue_graphql.Internal.convertFragment, p.data);
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
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(IssueDetailCommentsQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

function useBlockingPagination(fRef) {
  var p = Hooks.useBlockingPaginationFragment(IssueDetailComments_issue_graphql.node, fRef);
  var data = RescriptRelay_Internal.internal_useConvertedValue(IssueDetailComments_issue_graphql.Internal.convertFragment, p.data);
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
                    return p.refetch(RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(IssueDetailCommentsQuery_graphql.Internal.convertVariables(param)), internal_makeRefetchableFnOpts(param$1, param$2, undefined));
                  };
                }), [p.refetch])
        };
}

var makeRefetchVariables = IssueDetailCommentsQuery_graphql.Types.makeRefetchVariables;

var IssueFragment_getConnectionNodes = IssueDetailComments_issue_graphql.Utils.getConnectionNodes;

var IssueFragment = {
  getConnectionNodes: IssueFragment_getConnectionNodes,
  Types: undefined,
  internal_makeRefetchableFnOpts: internal_makeRefetchableFnOpts,
  useRefetchable: useRefetchable,
  use: use,
  useOpt: useOpt,
  usePagination: usePagination,
  useBlockingPagination: useBlockingPagination,
  makeRefetchVariables: makeRefetchVariables
};

function IssueDetailComments(Props) {
  var issue = Props.issue;
  var match = usePagination(issue);
  var isLoadingNext = match.isLoadingNext;
  var loadNext = match.loadNext;
  var match$1 = React.useTransition();
  var startTransition = match$1[1];
  var loadMore = React.useCallback((function (param) {
          if (isLoadingNext) {
            return ;
          } else {
            return Curry._1(startTransition, (function (param) {
                          Curry._3(loadNext, 10, undefined, undefined);
                          
                        }));
          }
        }), [
        isLoadingNext,
        loadNext,
        startTransition
      ]);
  var edges = match.data.comments.edges;
  if (edges !== undefined && edges.length !== 0) {
    var tmp;
    if (match.hasNext) {
      var disabled = match$1[0] || isLoadingNext;
      tmp = React.createElement("button", {
            className: "issue-comments-load-more",
            disabled: disabled,
            name: "load more comments",
            type: "button",
            onClick: (function (param) {
                return Curry._1(loadMore, undefined);
              })
          }, disabled ? "Loading..." : "Load More");
    } else {
      tmp = null;
    }
    return React.createElement(React.Fragment, {
                children: null
              }, React.createElement(React.SuspenseList, {
                    children: Belt_Array.map(edges, (function (edge) {
                            if (edge === undefined) {
                              return null;
                            }
                            var comment = edge.node;
                            if (comment === undefined) {
                              return null;
                            }
                            var author = Belt_Option.getWithDefault(comment.author, {
                                  __typename: "User",
                                  avatarUrl: "https://avatars.githubusercontent.com/u/10137?v=4",
                                  login: "ghost"
                                });
                            return React.createElement(React.Suspense, {
                                        children: React.createElement("div", {
                                              className: "issue-comment"
                                            }, React.createElement(SuspenseImage.make, {
                                                  src: author.avatarUrl,
                                                  alt: author.login + "'s avatar",
                                                  className: "issue-comment-author-image"
                                                }), React.createElement("div", {
                                                  className: "issue-comment-author-name"
                                                }, author.login), React.createElement("div", {
                                                  className: "issue-comment-body"
                                                }, React.createElement(ReactMarkdown$1, ReactMarkdown.makeProps(comment.body, {
                                                          image: (function (src, alt, className, param) {
                                                              return React.createElement(SuspenseImage.make, {
                                                                          src: src,
                                                                          alt: alt,
                                                                          className: className
                                                                        });
                                                            })
                                                        }, undefined)))),
                                        fallback: null,
                                        key: comment.id
                                      });
                          })),
                    revealOrder: "forwards"
                  }), tmp);
  }
  return React.createElement("div", {
              className: "issue-no-comments"
            }, "No comments");
}

var make = IssueDetailComments;

export {
  IssueFragment ,
  make ,
  
}
/* react Not a pure module */
