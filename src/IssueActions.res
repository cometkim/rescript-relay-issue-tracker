open RescriptRelay

module IssueFragment = %relay(`
  fragment IssueActions_issue on Issue {
    id
    closed
  }
`)

module AddCommentMutation = %relay(`
  mutation IssueActionsAddCommentMutation(
    $connections: [ID!]!
    $input: AddCommentInput!
  ) {
    addComment(input: $input) {
      subject {
        __typename
        id
      }
      commentEdge @appendEdge(connections: $connections) {
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

module CloseIssueMutation = %relay(`
  mutation IssueActionsCloseIssueMutation($input: CloseIssueInput!) {
    closeIssue(input: $input) {
      issue {
        ...IssueActions_issue
      }
    }
  }
`)

module ReopenIssueMutation = %relay(`
  mutation IssueActionsReopenIssueMutation($input: ReopenIssueInput!) {
    reopenIssue(input: $input) {
      issue {
        ...IssueActions_issue
      }
    }
  }
`)

@react.component
let make = (~issue) => {
  let (_, startTransition) = ReactExperimental.useTransition()
  let (commentText, setCommentText) = React.useState(() => "")
  let isCommentEmpty = commentText->Js.String2.trim->Js.String2.length == 0

  let issue = IssueFragment.use(issue)

  let (addComment, isCommentPending) = AddCommentMutation.use()
  let (reopenIssue, isReopenPending) = ReopenIssueMutation.use()
  let (closeIssue, isClosePending) = CloseIssueMutation.use()
  let isPending = isCommentPending || isClosePending || isReopenPending

  let onChange = React.useCallback0(event => {
    let value = (event->ReactEvent.Form.target)["value"]
    startTransition(() => {
      setCommentText(_ => value)
    })
  })

  let onSubmit = React.useCallback3(event => {
    event->ReactEvent.Form.preventDefault
    let dataId = issue.id->makeDataId
    let connectionId = dataId->ConnectionHandler.getConnectionID("IssueDetailComments_comments", ())
    startTransition(() => {
      addComment(
        ~variables={
          connections: [connectionId],
          input: {
            clientMutationId: None,
            body: commentText,
            subjectId: issue.id,
          },
        },
        (),
      )->ignore
      setCommentText(_ => "")
    })
  }, (issue, addComment, commentText))

  let onToggleOpen = React.useCallback3(event => {
    event->ReactEvent.Mouse.preventDefault
    startTransition(() => {
      switch issue.closed {
      | true =>
        reopenIssue(
          ~variables={
            input: {
              clientMutationId: None,
              issueId: issue.id,
            },
          },
          (),
        )
      | false =>
        closeIssue(
          ~variables={
            input: {
              clientMutationId: None,
              issueId: issue.id,
            },
          },
          (),
        )
      }->ignore
    })
  }, (issue, reopenIssue, closeIssue))

  <form className="issue-actions" onSubmit>
    <textarea
      className="issue-actions-text" onChange value={commentText} placeholder="Leave a comment"
    />
    <button className="issue-actions-button" type_="submit" disabled={isPending || isCommentEmpty}>
      {React.string("Comment")}
    </button>
    <button
      className="issue-actions-button" type_="button" onClick={onToggleOpen} disabled={isPending}>
      {React.string(issue.closed ? "Reopen" : "Close")}
    </button>
  </form>
}
