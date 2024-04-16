import { Link } from "react-router-dom"
import NavBar from "../../NavBar"
import './PageNotFoundStyle.css'

const PageNotFound = () => {
  return (
    <>
    <NavBar/>
    <>
    <div>
    <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white mt-16  shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h1 className="text-6xl font-medium py-8">Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">The page you are looking for does not exist. It might have been moved or deleted.</p>
            <Link to="/" className="bg-gradient-to-r from-black to-black hover:from-blue-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
              HOME
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-black to-black hover:from-blue-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-md">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    </>
  )
}

export default PageNotFound
