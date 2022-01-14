/* @sourceLoc IssueActions.res */
/* @generated */
%%raw("/* @generated */")
module Types = {
  @@ocaml.warning("-30")

  type rec response_addComment = {
    subject: option<response_addComment_subject>,
    commentEdge: option<response_addComment_commentEdge>,
  }
  and response_addComment_subject = {
    __typename: string,
    id: string,
  }
  and response_addComment_commentEdge = {
    __id: RescriptRelay.dataId,
    node: option<response_addComment_commentEdge_node>,
  }
  and response_addComment_commentEdge_node = {
    id: string,
    author: option<response_addComment_commentEdge_node_author>,
    body: string,
  }
  and response_addComment_commentEdge_node_author = {
    __typename: string,
    login: string,
    avatarUrl: string,
  }
  and addCommentInput = {
    body: string,
    clientMutationId: option<string>,
    subjectId: string,
  }

  type response = {addComment: option<response_addComment>}
  type rawResponse = response
  type variables = {
    connections: array<RescriptRelay.dataId>,
    input: addCommentInput,
  }
}

module Internal = {
  type wrapResponseRaw
  let wrapResponseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"addComment_commentEdge":{"n":""},"addComment_commentEdge_node":{"n":""},"addComment_subject":{"n":""},"addComment_commentEdge_node_author":{"n":""},"addComment":{"n":""}}}`)

  let wrapResponseConverterMap = ()
  let convertWrapResponse = v =>
    v->RescriptRelay.convertObj(wrapResponseConverter, wrapResponseConverterMap, Js.null)
  type responseRaw
  let responseConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"addComment_commentEdge":{"n":""},"addComment_commentEdge_node":{"n":""},"addComment_subject":{"n":""},"addComment_commentEdge_node_author":{"n":""},"addComment":{"n":""}}}`)

  let responseConverterMap = ()
  let convertResponse = v =>
    v->RescriptRelay.convertObj(responseConverter, responseConverterMap, Js.undefined)
  type wrapRawResponseRaw = wrapResponseRaw
  let convertWrapRawResponse = convertWrapResponse
  type rawResponseRaw = responseRaw
  let convertRawResponse = convertResponse
  let variablesConverter: Js.Dict.t<
    Js.Dict.t<Js.Dict.t<string>>,
  > = %raw(json`{"__root":{"input":{"r":"AddCommentInput"}},"AddCommentInput":{"clientMutationId":{"n":""}}}`)

  let variablesConverterMap = ()
  let convertVariables = v =>
    v->RescriptRelay.convertObj(variablesConverter, variablesConverterMap, Js.undefined)
}

module Utils = {
  @@ocaml.warning("-33")
  open Types
  let make_addCommentInput = (~body, ~clientMutationId=?, ~subjectId, ()): addCommentInput => {
    body: body,
    clientMutationId: clientMutationId,
    subjectId: subjectId,
  }

  let makeVariables = (~connections, ~input): variables => {
    connections: connections,
    input: input,
  }
  let make_response_addComment_commentEdge_node_author = (
    ~__typename,
    ~login,
    ~avatarUrl,
  ): response_addComment_commentEdge_node_author => {
    __typename: __typename,
    login: login,
    avatarUrl: avatarUrl,
  }
  let make_response_addComment_commentEdge_node = (
    ~id,
    ~author=?,
    ~body,
    (),
  ): response_addComment_commentEdge_node => {
    id: id,
    author: author,
    body: body,
  }
  let make_response_addComment_commentEdge = (
    ~__id,
    ~node=?,
    (),
  ): response_addComment_commentEdge => {
    __id: __id,
    node: node,
  }
  let make_response_addComment_subject = (~__typename, ~id): response_addComment_subject => {
    __typename: __typename,
    id: id,
  }
  let make_response_addComment = (~subject=?, ~commentEdge=?, ()): response_addComment => {
    subject: subject,
    commentEdge: commentEdge,
  }
  let makeOptimisticResponse = (~addComment=?, ()): rawResponse => {
    addComment: addComment,
  }
}
type relayOperationNode
type operationType = RescriptRelay.mutationNode<relayOperationNode>

let node: operationType = %raw(json` (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": null,
  "kind": "LinkedField",
  "name": "subject",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v8 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueActionsAddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCommentPayload",
        "kind": "LinkedField",
        "name": "addComment",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "kind": "LinkedField",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
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
    "name": "IssueActionsAddCommentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddCommentPayload",
        "kind": "LinkedField",
        "name": "addComment",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "IssueCommentEdge",
            "kind": "LinkedField",
            "name": "commentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "IssueComment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "commentEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "19434bd8bebd271b879ea580f6c6ecaf",
    "id": null,
    "metadata": {},
    "name": "IssueActionsAddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation IssueActionsAddCommentMutation(\n  $input: AddCommentInput!\n) {\n  addComment(input: $input) {\n    subject {\n      __typename\n      id\n    }\n    commentEdge {\n      node {\n        id\n        author {\n          __typename\n          login\n          avatarUrl\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        body\n      }\n    }\n  }\n}\n"
  }
};
})() `)
