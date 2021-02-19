const MyImg = (props) => {
  // console.log("img", props)
  const { src, alt } = props
  return (
    <img className="block rounded-md my-5" src={src} alt={alt} style={{ height: "auto", maxWidth: "100%", maxHeight: "calc(50vh + 180px)" }} />
  )
}

export default MyImg