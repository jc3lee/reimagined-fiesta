import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, title = "Welcome!" }) => {
  return (
    <div className="font-open transition-colors duration-150 bg-primary-acc dark:bg-primary-dark-acc text-black dark:text-white w-full">
      <Header title={title} />
      <div className="mt-12 w-full">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout