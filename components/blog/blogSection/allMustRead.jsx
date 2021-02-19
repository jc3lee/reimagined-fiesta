import MustReadBlog from "./mustReadBlog"

const AllMustRead = () => {
  return (
    <div className="flex sm:space-x-6 lg:space-x-0 flex-col sm:flex-row lg:flex-col">
      <MustReadBlog />
      <MustReadBlog />
    </div>
  )
}

export default AllMustRead