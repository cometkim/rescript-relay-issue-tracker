/* @sourceLoc IssueActions.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")

  @live
  type rec reopenIssueInput = {
    clientMutationId: option<string>,
    issueId: string,
  }
  @live
  type rec response_reopenIssue_issue = {
    fragmentRefs: RescriptRelay.fragmentRefs<[ | #IssueActions_issue]>,
  }
  @live
  and response_reopenIssue = {
    issue: option<response_reopenIssue_issue>,
  }
  @live
  type response = {
    reopenIssue: option<response_reopenIssue>,
  }
  @live
  type rawResponse = response
  @live
  type variables = {
    input: reopenIssueInput,
  }
}

module Internal = {
  @live
  let variablesConverter: Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = %raw(
    json`{"reopenIssueInput":{},"__root":{"input":{"r":"reopenIssueInput"}}}`
  )
  @live
  let variablesConverterMap = ()
  @live
  let convertVariables = v => v->RescriptRelay.convertObj(
    variablesConverter,
    variablesConverterMap,
    Js.undefined
  )
  @live
  type wrapResponseRaw
  @live
  let wrapResponseConverter: Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = %raw(
    json`{"__root":{"reopenIssue_issue":{"f":""}}}`
  )
  @live
  let wrapResponseConverterMap = ()
  @live
  let convertWrapResponse = v => v->RescriptRelay.convertObj(
    wrapResponseConverter,
    wrapResponseConverterMap,
    Js.null
  )
  @live
  type responseRaw
  @live
  let responseConverter: Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = %raw(
    json`{"__root":{"reopenIssue_issue":{"f":""}}}`
  )
  @live
  let responseConverterMap = ()
  @live
  let convertResponse = v => v->RescriptRelay.convertObj(
    responseConverter,
    responseConverterMap,
    Js.undefined
  )
  type wrapRawResponseRaw = wrapResponseRaw
  @live
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  @live
  let convertRawResponse = convertResponse
}
module Utils = {
  @@ocaml.warning("-33")
  open Types
  @live @obj external make_reopenIssueInput: (
    ~clientMutationId: string=?,
    ~issueId: string,
    unit
  ) => reopenIssueInput = ""


  @live @obj external makeVariables: (
    ~input: reopenIssueInput,
  ) => variables = ""


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


