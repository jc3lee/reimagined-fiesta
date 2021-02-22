const PostCover = ({ src, alt }) => {
  return (
    <img className="block object-cover object-center" src={src} alt={alt} style={{ height: "auto", minWidth: "100%", maxWidth: "100%", maxHeight: "calc(75vh + 180px)" }} />
  )
}

const PostCoverCard = ({ src, alt }) => {
  return (
    <img className="block object-cover object-center" src={src} alt={alt} style={{ height: "auto", maxWidth: "100%", minWidth: "100%", maxHeight: "calc(50vh + 100px)", }} />
  )
}

export {
  PostCover, PostCoverCard,
}