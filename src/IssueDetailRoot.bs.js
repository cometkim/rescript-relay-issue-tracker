

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as IssueActions from "./IssueActions.bs.js";
import * as ReactMarkdown from "./bindings/ReactMarkdown.bs.js";
import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";
import * as SuspenseImage from "./SuspenseImage.bs.js";
import * as RelayRuntime from "relay-runtime";
import ReactMarkdown$1 from "react-markdown";
import * as Hooks from "react-relay/hooks";
import * as IssueDetailComments from "./IssueDetailComments.bs.js";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as IssueDetailRootQuery_graphql from "./__generated__/IssueDetailRootQuery_graphql.bs.js";

function use(variables, fetchPolicy, fetchKey, networkCacheConfig, param) {
  var data = Hooks.useLazyLoadQuery(IssueDetailRootQuery_graphql.node, RescriptRelay_Internal.internal_cleanObjectFromUndefinedRaw(IssueDetailRootQuery_graphql.Internal.convertVariables(variables)), {
        fetchKey: fetchKey,
        fetchPolicy: RescriptRelay.mapFetchPolicy(fetchPolicy),
        networkCacheConfig: networkCacheConfig
      });
  return RescriptRelay_Internal.internal_useConvertedValue(IssueDetailRootQuery_graphql.Internal.convertResponse, data);
}

function useLoader(param) {
  var match = Hooks.useQueryLoader(IssueDetailRootQuery_graphql.node);
  var loadQueryFn = match[1];
  var loadQuery = React.useMemo((function () {
          return function (param, param$1, param$2, param$3) {
            return Curry._2(loadQueryFn, IssueDetailRootQuery_graphql.Internal.convertVariables(param), {
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
  Hooks.fetchQuery(environment, IssueDetailRootQuery_graphql.node, IssueDetailRootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).subscribe({
        next: (function (res) {
            return Curry._1(onResult, {
                        TAG: /* Ok */0,
                        _0: IssueDetailRootQuery_graphql.Internal.convertResponse(res)
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
  var __x = Hooks.fetchQuery(environment, IssueDetailRootQuery_graphql.node, IssueDetailRootQuery_graphql.Internal.convertVariables(variables), {
          networkCacheConfig: networkCacheConfig,
          fetchPolicy: RescriptRelay.mapFetchQueryFetchPolicy(fetchPolicy)
        }).toPromise();
  return __x.then(function (res) {
              return Promise.resolve(IssueDetailRootQuery_graphql.Internal.convertResponse(res));
            });
}

function usePreloaded(queryRef, param) {
  var data = Hooks.usePreloadedQuery(IssueDetailRootQuery_graphql.node, queryRef);
  return RescriptRelay_Internal.internal_useConvertedValue(IssueDetailRootQuery_graphql.Internal.convertResponse, data);
}

function retain(environment, variables) {
  var operationDescriptor = RelayRuntime.createOperationDescriptor(IssueDetailRootQuery_graphql.node, IssueDetailRootQuery_graphql.Internal.convertVariables(variables));
  return environment.retain(operationDescriptor);
}

var IssueDetailRootQuery = {
  Types: undefined,
  use: use,
  useLoader: useLoader,
  $$fetch: $$fetch,
  fetchPromised: fetchPromised,
  usePreloaded: usePreloaded,
  retain: retain
};

function IssueDetailRoot(Props) {
  var queryRef = Props.queryRef;
  var match = usePreloaded(queryRef, undefined);
  var issue = match.node;
  if (issue === undefined) {
    return null;
  }
  var author = Belt_Option.getWithDefault(issue.author, {
        __typename: "User",
        avatarUrl: "https://avatars.githubusercontent.com/u/10137?v=4",
        login: "ghost"
      });
  return React.createElement("div", {
              className: "issue"
            }, React.createElement("div", {
                  className: "issue-title"
                }, "#" + String(issue.number) + " - " + issue.title + " - " + (
                  issue.closed ? "Closed" : "Open"
                ), React.createElement("a", {
                      className: "issue-title-github-link",
                      title: "Issue on GitHub",
                      href: issue.url
                    }, "View on GitHub")), React.createElement("div", {
                  className: "issue-comment"
                }, React.createElement(SuspenseImage.make, {
                      src: author.avatarUrl,
                      alt: author.login + "'s avatar",
                      className: "issue-comment-author-image"
                    }), React.createElement("div", {
                      className: "issue-comment-author-name"
                    }, author.login), React.createElement("div", {
                      className: "issue-comment-body"
                    }, React.createElement(ReactMarkdown$1, ReactMarkdown.makeProps(issue.body, {
                              image: (function (src, alt, className, param) {
                                  return React.createElement(SuspenseImage.make, {
                                              src: src,
                                              alt: alt,
                                              className: className
                                            });
                                })
                            }, undefined)))), React.createElement(IssueDetailComments.make, {
                  issue: issue.fragmentRefs
                }), React.createElement(IssueActions.make, {
                  issue: issue.fragmentRefs
                }));
}

var make = IssueDetailRoot;

export {
  IssueDetailRootQuery ,
  make ,
  
}
/* react Not a pure module */
