module IssueDetailRootQuery = %relay(`
  query IssueDetailRootQuery($id: ID!) {
    node(id: $id) {
      __typename
      ... on Issue {
        title
        number
        author {
          __typename
          login
          avatarUrl
        }
        body
        closed
        url
        ...IssueDetailComments_issue
        ...IssueActions_issue
      }
    }
  }
`)

@react.component
let make = (~queryRef) => {
  let {node: issue} = IssueDetailRootQuery.usePreloaded(~queryRef, ())

  switch issue {
  | Some(issue) =>
    <div className="issue">
      <div className="issue-title">
        {React.string(
          `#${issue.number->Belt.Int.toString} - ${issue.title} - ${issue.closed
              ? "Closed"
              : "Open"}`,
        )}
        <a className="issue-title-github-link" href={issue.url} title="Issue on GitHub">
          {React.string("View on GitHub")}
        </a>
      </div>
      {
        let author = issue.author->Belt.Option.getWithDefault({
          __typename: "User",
          login: "ghost",
          avatarUrl: "https://avatars.githubusercontent.com/u/10137?v=4",
        })
        <div className="issue-comment">
          <SuspenseImage
            className="issue-comment-author-image"
            alt={`${author.login}'s avatar`}
            src={author.avatarUrl}
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
              {issue.body}
            </ReactMarkdown>
          </div>
        </div>
      }
      <IssueDetailComments issue={issue.fragmentRefs} />
      <IssueActions issue={issue.fragmentRefs} />
    </div>
  | None => React.null
  }
}
