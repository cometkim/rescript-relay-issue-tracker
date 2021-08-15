open RescriptRelay

module IssuesRepositoryFragment = %relay(`
  fragment Issues_repository on Repository
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
    states: { type: "[IssueState!]", defaultValue: OPEN }
  )
  @refetchable(queryName: "IssuesPaginationQuery") {
    issues(after: $cursor, first: $count, states: $states)
      @connection(key: "Issues_issues") {
      edges {
        __id
        node {
          ...IssuesListItem_issue
        }
      }
    }
  }
`)

@react.component
let make = (~repository) => {
  let {data: repository, loadNext, isLoadingNext, _} = IssuesRepositoryFragment.usePagination(
    repository,
  )

  let loadMore = React.useCallback2(() => {
    switch isLoadingNext {
    | true => ()
    | false => loadNext(~count=10, ())->ignore
    }
  }, (isLoadingNext, loadNext))

  <div className="issues">
    {switch repository.issues.edges {
    | None => React.null
    | Some(edges) =>
      edges
      ->Belt.Array.map(edge => {
        switch edge {
        | Some({node: Some(node), __id}) =>
          <div className="issues-issue" key={__id->dataIdToString}>
            <IssuesListItem issue={node.fragmentRefs} />
          </div>
        | _ => React.null
        }
      })
      ->React.array
    }}
    <button
      name="load more issues" type_="button" className="issues-load-more" onClick={_ => loadMore()}>
      {React.string("Load More")}
    </button>
  </div>
}
