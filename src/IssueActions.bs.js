

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as RelayRuntime from "relay-runtime";
import * as Js_null_undefined from "rescript/lib/es6/js_null_undefined.js";
import * as Hooks from "react-relay/hooks";
import * as RescriptRelay_Internal from "rescript-relay/src/RescriptRelay_Internal.bs.js";
import * as IssueActions_issue_graphql from "./__generated__/IssueActions_issue_graphql.bs.js";
import * as IssueActionsAddCommentMutation_graphql from "./__generated__/IssueActionsAddCommentMutation_graphql.bs.js";
import * as IssueActionsCloseIssueMutation_graphql from "./__generated__/IssueActionsCloseIssueMutation_graphql.bs.js";
import * as IssueActionsReopenIssueMutation_graphql from "./__generated__/IssueActionsReopenIssueMutation_graphql.bs.js";

function use(fRef) {
  var data = Hooks.useFragment(IssueActions_issue_graphql.node, fRef);
  return RescriptRelay_Internal.internal_useConvertedValue(IssueActions_issue_graphql.Internal.convertFragment, data);
}

function useOpt(opt_fRef) {
  var fr = opt_fRef !== undefined ? Caml_option.some(Caml_option.valFromOption(opt_fRef)) : undefined;
  var nullableFragmentData = Hooks.useFragment(IssueActions_issue_graphql.node, fr !== undefined ? Js_null_undefined.fromOption(Caml_option.some(Caml_option.valFromOption(fr))) : null);
  var data = (nullableFragmentData == null) ? undefined : Caml_option.some(nullableFragmentData);
  return RescriptRelay_Internal.internal_useConvertedValue((function (rawFragment) {
                if (rawFragment !== undefined) {
                  return IssueActions_issue_graphql.Internal.convertFragment(rawFragment);
                }
                
              }), data);
}

var IssueFragment = {
  Types: undefined,
  use: use,
  useOpt: useOpt
};

function commitMutation(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: IssueActionsAddCommentMutation_graphql.node,
              variables: IssueActionsAddCommentMutation_graphql.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, IssueActionsAddCommentMutation_graphql.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? IssueActionsAddCommentMutation_graphql.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, IssueActionsAddCommentMutation_graphql.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$1(param) {
  var match = Hooks.useMutation(IssueActionsAddCommentMutation_graphql.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, IssueActionsAddCommentMutation_graphql.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? IssueActionsAddCommentMutation_graphql.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, IssueActionsAddCommentMutation_graphql.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: IssueActionsAddCommentMutation_graphql.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var AddCommentMutation = {
  Types: undefined,
  commitMutation: commitMutation,
  use: use$1
};

function commitMutation$1(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: IssueActionsCloseIssueMutation_graphql.node,
              variables: IssueActionsCloseIssueMutation_graphql.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, IssueActionsCloseIssueMutation_graphql.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? IssueActionsCloseIssueMutation_graphql.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, IssueActionsCloseIssueMutation_graphql.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$2(param) {
  var match = Hooks.useMutation(IssueActionsCloseIssueMutation_graphql.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, IssueActionsCloseIssueMutation_graphql.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? IssueActionsCloseIssueMutation_graphql.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, IssueActionsCloseIssueMutation_graphql.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: IssueActionsCloseIssueMutation_graphql.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var CloseIssueMutation = {
  Types: undefined,
  commitMutation: commitMutation$1,
  use: use$2
};

function commitMutation$2(environment, variables, optimisticUpdater, optimisticResponse, updater, onCompleted, onError, uploadables, param) {
  return RelayRuntime.commitMutation(environment, {
              mutation: IssueActionsReopenIssueMutation_graphql.node,
              variables: IssueActionsReopenIssueMutation_graphql.Internal.convertVariables(variables),
              onCompleted: (function (res, err) {
                  if (onCompleted !== undefined) {
                    return Curry._2(onCompleted, IssueActionsReopenIssueMutation_graphql.Internal.convertResponse(res), (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              onError: (function (err) {
                  if (onError !== undefined) {
                    return Curry._1(onError, (err == null) ? undefined : Caml_option.some(err));
                  }
                  
                }),
              optimisticResponse: optimisticResponse !== undefined ? IssueActionsReopenIssueMutation_graphql.Internal.convertWrapRawResponse(optimisticResponse) : undefined,
              optimisticUpdater: optimisticUpdater,
              updater: updater !== undefined ? (function (store, r) {
                    return Curry._2(updater, store, IssueActionsReopenIssueMutation_graphql.Internal.convertResponse(r));
                  }) : undefined,
              uploadables: uploadables
            });
}

function use$3(param) {
  var match = Hooks.useMutation(IssueActionsReopenIssueMutation_graphql.node);
  var mutate = match[0];
  return [
          React.useMemo((function () {
                  return function (param, param$1, param$2, param$3, param$4, param$5, param$6, param$7, param$8) {
                    return Curry._1(mutate, {
                                onError: param,
                                onCompleted: param$1 !== undefined ? (function (r, errors) {
                                      return Curry._2(param$1, IssueActionsReopenIssueMutation_graphql.Internal.convertResponse(r), (errors == null) ? undefined : Caml_option.some(errors));
                                    }) : undefined,
                                onUnsubscribe: param$2,
                                optimisticResponse: param$3 !== undefined ? IssueActionsReopenIssueMutation_graphql.Internal.convertWrapRawResponse(param$3) : undefined,
                                optimisticUpdater: param$4,
                                updater: param$5 !== undefined ? (function (store, r) {
                                      return Curry._2(param$5, store, IssueActionsReopenIssueMutation_graphql.Internal.convertResponse(r));
                                    }) : undefined,
                                variables: IssueActionsReopenIssueMutation_graphql.Internal.convertVariables(param$6),
                                uploadables: param$7
                              });
                  };
                }), [mutate]),
          match[1]
        ];
}

var ReopenIssueMutation = {
  Types: undefined,
  commitMutation: commitMutation$2,
  use: use$3
};

function IssueActions(Props) {
  var issue = Props.issue;
  var match = React.useTransition();
  var startTransition = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setCommentText = match$1[1];
  var commentText = match$1[0];
  var isCommentEmpty = commentText.trim().length === 0;
  var issue$1 = use(issue);
  var match$2 = use$1(undefined);
  var addComment = match$2[0];
  var match$3 = use$3(undefined);
  var reopenIssue = match$3[0];
  var match$4 = use$2(undefined);
  var closeIssue = match$4[0];
  var isPending = match$2[1] || match$4[1] || match$3[1];
  var onChange = React.useCallback((function ($$event) {
          var value = $$event.target.value;
          return Curry._1(startTransition, (function (param) {
                        return Curry._1(setCommentText, (function (param) {
                                      return value;
                                    }));
                      }));
        }), []);
  var onSubmit = React.useCallback((function ($$event) {
          $$event.preventDefault();
          var dataId = issue$1.id;
          var connectionId = RelayRuntime.ConnectionHandler.getConnectionID(dataId, "IssueDetailComments_comments", undefined);
          return Curry._1(startTransition, (function (param) {
                        Curry.app(addComment, [
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              {
                                connections: [connectionId],
                                input: {
                                  body: commentText,
                                  clientMutationId: undefined,
                                  subjectId: issue$1.id
                                }
                              },
                              undefined,
                              undefined
                            ]);
                        return Curry._1(setCommentText, (function (param) {
                                      return "";
                                    }));
                      }));
        }), [
        issue$1,
        addComment,
        commentText
      ]);
  var onToggleOpen = React.useCallback((function ($$event) {
          $$event.preventDefault();
          return Curry._1(startTransition, (function (param) {
                        if (issue$1.closed) {
                          Curry.app(reopenIssue, [
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                {
                                  input: {
                                    clientMutationId: undefined,
                                    issueId: issue$1.id
                                  }
                                },
                                undefined,
                                undefined
                              ]);
                        } else {
                          Curry.app(closeIssue, [
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                undefined,
                                {
                                  input: {
                                    clientMutationId: undefined,
                                    issueId: issue$1.id
                                  }
                                },
                                undefined,
                                undefined
                              ]);
                        }
                        
                      }));
        }), [
        issue$1,
        reopenIssue,
        closeIssue
      ]);
  return React.createElement("form", {
              className: "issue-actions",
              onSubmit: onSubmit
            }, React.createElement("textarea", {
                  className: "issue-actions-text",
                  placeholder: "Leave a comment",
                  value: commentText,
                  onChange: onChange
                }), React.createElement("button", {
                  className: "issue-actions-button",
                  disabled: isPending || isCommentEmpty,
                  type: "submit"
                }, "Comment"), React.createElement("button", {
                  className: "issue-actions-button",
                  disabled: isPending,
                  type: "button",
                  onClick: onToggleOpen
                }, issue$1.closed ? "Reopen" : "Close"));
}

var make = IssueActions;

export {
  IssueFragment ,
  AddCommentMutation ,
  CloseIssueMutation ,
  ReopenIssueMutation ,
  make ,
  
}
/* react Not a pure module */
