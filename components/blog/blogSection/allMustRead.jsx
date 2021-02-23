import MustReadBlog from "./mustReadBlog"
import { allMetas } from "../../../pages/allMetas.json"

function getAllMustReads(metas) {
  const mustReadsMetas = metas.filter(m => m.mustRead)
  return mustReadsMetas
}

const AllMustRead = () => {
  const mustReadsMetas = getAllMustReads(allMetas)
  return (
    <div className="flex sm:space-x-6 lg:space-x-0 flex-col sm:flex-row lg:flex-col">
      {
        mustReadsMetas.map(m => (
          <MustReadBlog meta={m} key={m.title} />
        ))
      }
    </div>
  )
}

export default AllMustRead