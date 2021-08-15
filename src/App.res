@module("./logo.svg") external logo: string = "default"

@react.component
let make = () => {
  <div className="App"> {React.string("Hi there")} </div>
}
