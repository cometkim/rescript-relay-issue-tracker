module IssueFragment = %relay(`
  fragment IssuesListItem_issue on Issue {
    id
    title
  }
`)

@react.component
let make = (~issue) => {
  let issue = IssueFragment.use(issue)

  <RelayRouter.Link to_={Routes.Root.IssueDetailRoot.Route.makeLink(~id=issue.id)}>
    {React.string(issue.title)}
  </RelayRouter.Link>
}
