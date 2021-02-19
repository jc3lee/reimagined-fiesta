const MyP = (props) => {
  // console.log("p props", props)
  const { children } = props
  return (
    <p className="text-base lg:text-lg mb-5">{children}</p>
  )
}

export default MyP