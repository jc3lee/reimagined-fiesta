const SubscribeBlog = () => {

  function handleSubmit(e) {
    e.preventDefault()
    console.log("subscribe email", e.target.value)
  }

  return (
    <div className="bg-primary-dark flex flex-col justify-center items-center font-bold px-12 py-16 lg:px-4 lg:py-12 w-full">
      <p className="text-2xl text-white text-center">Subscribe for webdev tips straight to your inbox.</p>
      <form className="mt-6 flex flex-wrap w-full justify-center" onClick={handleSubmit}>
        <input required={true} className="flex-1 py-1 px-2 bg-gray-100 hover:bg-white focus:bg-white text-black focus:outline-none" style={{ maxWidth: "14rem", }} type="email" />
        <button className="py-1 px-2 bg-red-500 text-white capitalize">subscribe</button>
      </form>
    </div>
  )
}

export default SubscribeBlog