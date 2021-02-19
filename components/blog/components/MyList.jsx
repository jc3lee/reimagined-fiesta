const MyUl = (props) => {
  // console.log("ul props", props)
  const { children, } = props
  return (
    <ul className="list-disc pl-6 mb-5">
      {children}
    </ul>
  )
}

const MyOl = (props) => {
  // console.log("ol props", props)
  const { children, } = props
  return (
    <ol className="list-decimal pl-6 mb-5">
      {children}
    </ol>
  )
}

export { MyUl, MyOl, }