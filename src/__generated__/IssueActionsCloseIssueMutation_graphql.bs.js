/* @generated */

import * as RescriptRelay from "rescript-relay/src/RescriptRelay.bs.js";

var Types = {};

var wrapResponseConverter = {"__root":{"closeIssue_issue":{"f":"","n":""},"closeIssue":{"n":""}}};

function convertWrapResponse(v) {
  return RescriptRelay.convertObj(v, wrapResponseConverter, undefined, null);
}

var responseConverter = {"__root":{"closeIssue_issue":{"f":"","n":""},"closeIssue":{"n":""}}};

function convertResponse(v) {
  return RescriptRelay.convertObj(v, responseConverter, undefined, undefined);
}

var variablesConverter = {"CloseIssueInput":{"clientMutationId":{"n":""}},"__root":{"input":{"r":"CloseIssueInput"}}};

function convertVariables(v) {
  return RescriptRelay.convertObj(v, variablesConverter, undefined, undefined);
}

var Internal = {
  wrapResponseConverter: wrapResponseConverter,
  wrapResponseConverterMap: undefined,
  convertWrapResponse: convertWrapResponse,
  responseConverter: responseConverter,
  responseConverterMap: undefined,
  convertResponse: convertResponse,
  convertWrapRawResponse: convertWrapResponse,
  convertRawResponse: convertResponse,
  variablesConverter: variablesConverter,
  variablesConverterMap: undefined,
  convertVariables: convertVariables
};

function make_closeIssueInput(clientMutationId, issueId, param) {
  return {
          clientMutationId: clientMutationId,
          issueId: issueId
        };
}

function makeVariables(input) {
  return {
          input: input
        };
}

function make_response_closeIssue_issue(param) {
  
}

function make_response_closeIssue(issue, param) {
  return {
          issue: issue
        };
}

function makeOptimisticResponse(closeIssue, param) {
  return {
          closeIssue: closeIssue
        };
}

var Utils = {
  make_closeIssueInput: make_closeIssueInput,
  makeVariables: makeVariables,
  make_response_closeIssue_issue: make_response_closeIssue_issue,
  make_response_closeIssue: make_response_closeIssue,
  makeOptimisticResponse: makeOptimisticResponse
};

var node = ((function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueActionsCloseIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CloseIssuePayload",
        "kind": "LinkedField",
        "name": "closeIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "IssueActions_issue"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueActionsCloseIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CloseIssuePayload",
        "kind": "LinkedField",
        "name": "closeIssue",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Issue",
            "kind": "LinkedField",
            "name": "issue",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "closed",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e4ede67086637ec665ca9888ba783684",
    "id": null,
    "metadata": {},
    "name": "IssueActionsCloseIssueMutation",
    "operationKind": "mutation",
    "text": "mutation IssueActionsCloseIssueMutation(\n  $input: CloseIssueInput!\n) {\n  closeIssue(input: $input) {\n    issue {\n      ...IssueActions_issue\n      id\n    }\n  }\n}\n\nfragment IssueActions_issue on Issue {\n  id\n  closed\n}\n"
  }
};
})());

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* node Not a pure module */
