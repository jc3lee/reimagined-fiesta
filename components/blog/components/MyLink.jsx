const MyLink = (props) => {
  // console.log("a props", props)
  const { href, children, title = "" } = props
  return (
    <a href={href} title={title} className="underline dark:text-blog-link-light text-blog-link-normal dark:hover:text-blog-link-normal">
      {children}
    </a>
  )
}

export default MyLink