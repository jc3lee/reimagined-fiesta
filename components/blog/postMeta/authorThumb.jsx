const AuthorThumbTiny = ({ author, authorPic }) => {
  return (
    <img src={authorPic} alt={author} className="w-20 h-20 object-cover object-center" />
  )
}

export {
  AuthorThumbTiny,
}