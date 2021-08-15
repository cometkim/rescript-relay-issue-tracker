module RootQuery = %relay(`
  query RootQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      owner {
        __typename
        login
      }
      name
    }
  }
`)

@react.component
let make = (~queryRef, ~children) => {
  let data = RootQuery.usePreloaded(~queryRef, ())

  <div className="root">
    <header className="header">
      {switch data.repository {
      | None => React.string("No repositories found")
      | Some(repository) => React.string(`${repository.owner.login}/${repository.name}: Issues`)
      }}
    </header>
    <section className="content">
      <React.Suspense fallback={React.string("Loading...")}> {children} </React.Suspense>
    </section>
  </div>
}
