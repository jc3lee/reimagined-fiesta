const MyBlockquote = (props) => {
  // console.log("blockquote props", props)
  const { children } = props
  return (
    <blockquote className="border-l-4 border-gray-300 pl-4">{children}</blockquote>
  )
}

export default MyBlockquote