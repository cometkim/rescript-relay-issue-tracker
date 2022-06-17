/* @sourceLoc Issues.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")

  type enum_IssueState = private [>
      | #CLOSED
      | #OPEN
    ]

  @live
  type enum_IssueState_input = [
      | #CLOSED
      | #OPEN
    ]



  @live
  type rec response_node = {
    @live __typename: string,
    fragmentRefs: RescriptRelay.fragmentRefs<[ | #Issues_repository]>,
  }
  @live
  type response = {
    node: option<response_node>,
  }
  @live
  type rawResponse = response
  @live
  type variables = {
    count: option<int>,
    cursor: option<string>,
    @live id: string,
    states: option<array<[
      | #CLOSED
      | #OPEN
    ]>>,
  }
  @live
  type refetchVariables = {
    count: option<option<int>>,
    cursor: option<option<string>>,
    @live id: option<string>,
    states: option<option<array<[
      | #CLOSED
      | #OPEN
    ]>>>,
  }
  @live let makeRefetchVariables = (
    ~count=?,
    ~cursor=?,
    ~id=?,
    ~states=?,
    ()
  ): refetchVariables => {
    count: count,
    cursor: cursor,
    id: id,
    states: states
  }

}

module Internal = {
  @live
  let variablesConverter: Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = %raw(
    json`{}`
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
    json`{"__root":{"node":{"f":""}}}`
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
    json`{"__root":{"node":{"f":""}}}`
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

type queryRef

module Utils = {
  @@ocaml.warning("-33")
  open Types
  @live
  external issueState_toString: enum_IssueState => string = "%identity"
  @live
  external issueState_input_toString: enum_IssueState_input => string = "%identity"
  @live
  let issueState_decode = (enum: enum_IssueState): option<enum_IssueState_input> => {
    switch enum {
      | #...enum_IssueState_input as valid => Some(valid)
      | _ => None
    }
  }
  @live
  let issueState_fromString = (str: string): option<enum_IssueState_input> => {
    issueState_decode(Obj.magic(str))
  }
  @live @obj external makeVariables: (
    ~count: int=?,
    ~cursor: string=?,
    ~id: string,
    ~states: array<[
      | #CLOSED
      | #OPEN
    ]>=?,
    unit
  ) => variables = ""


}

type relayOperationNode
type operationType = RescriptRelay.queryNode<relayOperationNode>


let node: operationType = %raw(json` (function(){
var v0 = {
  "defaultValue": 10,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": "OPEN",
  "kind": "LocalArgument",
  "name": "states"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "states",
  "variableName": "states"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "IssuesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v6/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "Issues_repository"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "IssuesPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "IssueConnection",
                "kind": "LinkedField",
                "name": "issues",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "IssueEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      },
                      {
                        "kind": "ClientExtension",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__id",
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "filters": [
                  "states"
                ],
                "handle": "connection",
                "key": "Issues_issues",
                "kind": "LinkedHandle",
                "name": "issues"
              }
            ],
            "type": "Repository",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "36b04c8eac1db29640260e620c8e9f0c",
    "id": null,
    "metadata": {},
    "name": "IssuesPaginationQuery",
    "operationKind": "query",
    "text": "query IssuesPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n  $states: [IssueState!] = OPEN\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...Issues_repository_a4QoT\n    id\n  }\n}\n\nfragment IssuesListItem_issue on Issue {\n  id\n  title\n}\n\nfragment Issues_repository_a4QoT on Repository {\n  issues(after: $cursor, first: $count, states: $states) {\n    edges {\n      node {\n        ...IssuesListItem_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})() `)

include RescriptRelay.MakeLoadQuery({
    type variables = Types.variables
    type loadedQueryRef = queryRef
    type response = Types.response
    type node = relayOperationNode
    let query = node
    let convertVariables = Internal.convertVariables
});
