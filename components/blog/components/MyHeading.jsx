const MyH1 = (props) => {
  // console.log("h1 props", props)
  const { children } = props
  return (
    <h1 className="tracking-tight text-3xl lg:text-4xl mt-8 mb-5 font-bold">{children}</h1>
  )
}

const MyH2 = (props) => {
  // console.log("h2 props", props)
  const { children } = props
  return (
    <h2 className="tracking-tight text-2xl lg:text-3xl my-5 font-bold">{children}</h2>
  )
}

const MyH3 = (props) => {
  // console.log("h3 props", props)
  const { children } = props
  return (
    <h3 className="tracking-tight text-xl lg:text-2xl my-5 font-bold">{children}</h3>
  )
}

export { MyH1, MyH2, MyH3, }