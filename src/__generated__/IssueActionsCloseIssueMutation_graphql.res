/* @sourceLoc IssueActions.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")
  
  type rec response_closeIssue = {
    issue: option<response_closeIssue_issue>,
  }
   and response_closeIssue_issue = {
    fragmentRefs: RescriptRelay.fragmentRefs<[ | #IssueActions_issue]>
  }
   and closeIssueInput = {
    clientMutationId: option<string>,
    issueId: string,
  }
  
  
  type response = {
    closeIssue: option<response_closeIssue>,
  }
  type rawResponse = response
  type variables = {
    input: closeIssueInput,
  }
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"closeIssue_issue":{"f":"","n":""},"closeIssue":{"n":""}}}`
    )
  
  let wrapResponseConverterMap = ()
  let convertWrapResponse = v => v->RescriptRelay.convertObj(
    wrapResponseConverter, 
    wrapResponseConverterMap, 
    Js.null
  )
  type responseRaw
  let responseConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"__root":{"closeIssue_issue":{"f":"","n":""},"closeIssue":{"n":""}}}`
    )
  
  let responseConverterMap = ()
  let convertResponse = v => v->RescriptRelay.convertObj(
    responseConverter, 
    responseConverterMap, 
    Js.undefined
  )
  type wrapRawResponseRaw = wrapResponseRaw
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  let convertRawResponse = convertResponse
  let variablesConverter: 
    Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = 
    %raw(
      json`{"CloseIssueInput":{"clientMutationId":{"n":""}},"__root":{"input":{"r":"CloseIssueInput"}}}`
    )
  
  let variablesConverterMap = ()
  let convertVariables = v => v->RescriptRelay.convertObj(
    variablesConverter, 
    variablesConverterMap, 
    Js.undefined
  )
}


module Utils = {
  @@ocaml.warning("-33")
  open Types
  let make_closeIssueInput = (
    ~clientMutationId=?,
    ~issueId,
    ()
  ): closeIssueInput => {
    clientMutationId: clientMutationId,
    issueId: issueId
  }
  
  let makeVariables = (
    ~input
  ): variables => {
    input: input
  }
  let make_response_closeIssue_issue = (
  ) => ()
  let make_response_closeIssue = (
    ~issue=?,
    ()
  ): response_closeIssue => {
    issue: issue
  }
  let makeOptimisticResponse = (
    ~closeIssue=?,
    ()
  ): rawResponse => {
    closeIssue: closeIssue
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
})() `)


