const MyLi = (props) => {
  // console.log("li", props)
  const { children } = props
  return (
    <li className="text-base lg:text-lg">{children}</li>
  )
}

export default MyLi