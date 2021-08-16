module IssueFragment = %relay(`
  fragment IssueDetailComments_issue on Issue
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 10 }
  )
  @refetchable(queryName: "IssueDetailCommentsQuery") {
    comments(after: $cursor, first: $count)
      @connection(key: "IssueDetailComments_comments") {
      edges {
        __id
        node {
          id
          author {
            __typename
            login
            avatarUrl
          }
          body
        }
      }
    }
  }
`)

@react.component
let make = (~issue) => {
  let {data: issue, hasNext, loadNext, isLoadingNext} = IssueFragment.usePagination(issue)

  let (isPending, startTransition) = ReactExperimental.useTransition()

  let loadMore = React.useCallback3(() => {
    switch isLoadingNext {
    | true => ()
    | false =>
      startTransition(() => {
        loadNext(~count=10, ())->ignore
      })
    }
  }, (isLoadingNext, loadNext, startTransition))

  switch issue.comments.edges {
  | None | Some([]) => <div className="issue-no-comments"> {React.string("No comments")} </div>
  | Some(edges) =>
    <React.Fragment>
      <ReactExperimental.SuspenseList revealOrder=#forwards>
        {edges
        ->Belt.Array.map(edge =>
          switch edge {
          | None | Some({node: None, _}) => React.null
          | Some({node: Some(comment), __id}) => {
              let author = comment.author->Belt.Option.getWithDefault({
                __typename: "User",
                login: "ghost",
                avatarUrl: "https://avatars.githubusercontent.com/u/10137?v=4",
              })
              <React.Suspense fallback={React.null} key=comment.id>
                <div className="issue-comment">
                  <SuspenseImage
                    className="issue-comment-author-image"
                    src={author.avatarUrl}
                    alt={`${author.login}'s avatar`}
                  />
                  <div className="issue-comment-author-name"> {React.string(author.login)} </div>
                  <div className="issue-comment-body">
                    <ReactMarkdown
                      components={ReactMarkdown.makeCustomComponentMap(
                        ~image=(~src, ~alt, ~className, ()) => {
                          <SuspenseImage src alt className />
                        },
                        (),
                      )}>
                      {comment.body}
                    </ReactMarkdown>
                  </div>
                </div>
              </React.Suspense>
            }
          }
        )
        ->React.array}
      </ReactExperimental.SuspenseList>
      {switch hasNext {
      | true => {
          let disabled = isPending || isLoadingNext
          <button
            name="load more comments"
            type_="button"
            className="issue-comments-load-more"
            onClick={_ => loadMore()}
            disabled>
            {React.string(disabled ? "Loading..." : "Load More")}
          </button>
        }
      | false => React.null
      }}
    </React.Fragment>
  }
}
