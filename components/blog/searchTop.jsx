const SearchTop = ({ text }) => {
  return (
    <div className="py-6 px-12 text-center border-t border-b border-black dark:border-white">
      <p className="font-bold text-3xl uppercase">category: {text}</p>
    </div>
  )
}

export default SearchTop