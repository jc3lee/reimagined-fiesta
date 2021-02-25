const MyInlineCode = (props) => {
  // console.log("inline code props", props)
  const { children } = props
  return (
    <code className="text-sm lg:text-base bg-red-100 dark:bg-transparent rounded-md px-1">{children}</code>
  )
}

export default MyInlineCode