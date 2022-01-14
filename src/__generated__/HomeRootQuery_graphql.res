/* @sourceLoc HomeRoot.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")

  type rec response_repository = {fragmentRefs: RescriptRelay.fragmentRefs<[#Issues_repository]>}
  type response = {repository: option<response_repository>}
  type rawResponse = response
  type refetchVariables = {
    owner: option<string>,
    name: option<string>,
  }
  let makeRefetchVariables = (~owner=?, ~name=?, ()): refetchVariables => {
    owner: owner,
    name: name,
  }

  type variables = {
    owner: string,
    name: string,
  }
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"repository":{"f":"","n":""}}}`)

  let wrapResponseConverterMap = ()
  let convertWrapResponse = v =>
    v->RescriptRelay.convertObj(wrapResponseConverter, wrapResponseConverterMap, Js.null)
  type responseRaw
  let responseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"repository":{"f":"","n":""}}}`)

  let responseConverterMap = ()
  let convertResponse = v =>
    v->RescriptRelay.convertObj(responseConverter, responseConverterMap, Js.undefined)
  type wrapRawResponseRaw = wrapResponseRaw
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  let convertRawResponse = convertResponse
  let variablesConverter: Js.Dict.t<Js.Dict.t<Js.Dict.t<string>>> = %raw(json`{}`)

  let variablesConverterMap = ()
  let convertVariables = v =>
    v->RescriptRelay.convertObj(variablesConverter, variablesConverterMap, Js.undefined)
}

type queryRef

module Utils = {
  @@ocaml.warning("-33")
  open Types
  let makeVariables = (~owner, ~name): variables => {
    owner: owner,
    name: name,
  }
}
type relayOperationNode
type operationType = RescriptRelay.queryNode<relayOperationNode>

let node: operationType = %raw(json` (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "states",
    "value": "OPEN"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRootQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "args": null,
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
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeRootQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "title",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
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
            "storageKey": "issues(first:10,states:\"OPEN\")"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "filters": [
              "states"
            ],
            "handle": "connection",
            "key": "Issues_issues",
            "kind": "LinkedHandle",
            "name": "issues"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e98afcf71519d94c97e896865dc42fac",
    "id": null,
    "metadata": {},
    "name": "HomeRootQuery",
    "operationKind": "query",
    "text": "query HomeRootQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(owner: $owner, name: $name) {\n    ...Issues_repository\n    id\n  }\n}\n\nfragment IssuesListItem_issue on Issue {\n  id\n  title\n}\n\nfragment Issues_repository on Repository {\n  issues(first: 10, states: OPEN) {\n    edges {\n      node {\n        ...IssuesListItem_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
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
})
