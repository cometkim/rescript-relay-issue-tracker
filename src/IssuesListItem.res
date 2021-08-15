module IssueFragment = %relay(`
  fragment IssuesListItem_issue on Issue {
    id
    title
  }
`)

@react.component
let make = (~issue) => {
  let issue = IssueFragment.use(issue)

  <RescriptRelayRouter.Link to_={`/issue/${issue.id}`} preloadOnHover=true>
    {React.string(issue.title)}
  </RescriptRelayRouter.Link>
}
