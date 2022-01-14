/* @sourceLoc IssueActions.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")

  type rec response_reopenIssue = {issue: option<response_reopenIssue_issue>}
  and response_reopenIssue_issue = {fragmentRefs: RescriptRelay.fragmentRefs<[#IssueActions_issue]>}
  and reopenIssueInput = {
    clientMutationId: option<string>,
    issueId: string,
  }

  type response = {reopenIssue: option<response_reopenIssue>}
  type rawResponse = response
  type variables = {input: reopenIssueInput}
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"reopenIssue":{"n":""},"reopenIssue_issue":{"f":"","n":""}}}`)

  let wrapResponseConverterMap = ()
  let convertWrapResponse = v =>
    v->RescriptRelay.convertObj(wrapResponseConverter, wrapResponseConverterMap, Js.null)
  type responseRaw
  let responseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"reopenIssue":{"n":""},"reopenIssue_issue":{"f":"","n":""}}}`)

  let responseConverterMap = ()
  let convertResponse = v =>
    v->RescriptRelay.convertObj(responseConverter, responseConverterMap, Js.undefined)
  type wrapRawResponseRaw = wrapResponseRaw
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  let convertRawResponse = convertResponse
  let variablesConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"input":{"r":"ReopenIssueInput"}},"ReopenIssueInput":{"clientMutationId":{"n":""}}}`)

  let variablesConverterMap = ()
  let convertVariables = v =>
    v->RescriptRelay.convertObj(variablesConverter, variablesConverterMap, Js.undefined)
}

module Utils = {
  @@ocaml.warning("-33")
  open Types
  let make_reopenIssueInput = (~clientMutationId=?, ~issueId, ()): reopenIssueInput => {
    clientMutationId: clientMutationId,
    issueId: issueId,
  }

  let makeVariables = (~input): variables => {
    input: input,
  }
  let make_response_reopenIssue_issue = () => ()
  let make_response_reopenIssue = (~issue=?, ()): response_reopenIssue => {
    issue: issue,
  }
  let makeOptimisticResponse = (~reopenIssue=?, ()): rawResponse => {
    reopenIssue: reopenIssue,
  }
}
type relayOperationNode
type operationType = RescriptRelay.mutationNode<relayOperationNode>

let node: operationType = %raw(json` (function(){
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
    "name": "IssueActionsReopenIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
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
    "name": "IssueActionsReopenIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ReopenIssuePayload",
        "kind": "LinkedField",
        "name": "reopenIssue",
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
    "cacheID": "f70274e3bd2d9f385098f4781c58c8f5",
    "id": null,
    "metadata": {},
    "name": "IssueActionsReopenIssueMutation",
    "operationKind": "mutation",
    "text": "mutation IssueActionsReopenIssueMutation(\n  $input: ReopenIssueInput!\n) {\n  reopenIssue(input: $input) {\n    issue {\n      ...IssueActions_issue\n      id\n    }\n  }\n}\n\nfragment IssueActions_issue on Issue {\n  id\n  closed\n}\n"
  }
};
})() `)
