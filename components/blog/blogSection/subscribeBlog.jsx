const SubscribeBlog = () => {

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   console.log("subscribe email", e.target.value)
  // }

  return (
    <div className="bg-primary-dark flex flex-col justify-center items-center text-center px-12 py-16 lg:px-6 lg:py-12 w-full font-bold ">
      <p className="text-2xl lg:text-3xl text-white">Subscribe to get my best posts in your inbox.</p>
      <a href="https://www.getrevue.co/profile/ljc_dev" rel="noopener" className="text-lg mt-8 py-1.5 px-6 bg-red-500 text-white uppercase">subscribe</a>
    </div>
  )
}

export default SubscribeBlog