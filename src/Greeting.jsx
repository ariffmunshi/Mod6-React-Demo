function Greeting({name, children}) {
  return (
    <>
      <h1>Hello {name ? name : "World"}</h1>
      {children}
    </>
  )
}
export default Greeting;