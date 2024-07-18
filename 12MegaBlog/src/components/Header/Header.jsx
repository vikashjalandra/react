import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-white shadow drop-shadow-md z-10">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
      <div className="inline-flex items-center space-x-2">
       <Link to='/'>
       <Logo /> 
       </Link> 
      </div>
      <div className="hidden grow items-start lg:flex">
        <ul className="ml-12 inline-flex space-x-8">
          {navItems.map((item) => item.active ? (
            <li key={item.name}>
              <Link
                to={item.slug}
                className="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </li>
          ):null)}
        </ul>
      </div>
      {authStatus && (
         <div className="hidden lg:block">
                <LogoutBtn />
                </div>
            )}
      <div className="lg:hidden">
        <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2">
                  <Logo/>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  {navItems.map((item) => item.active? (
                    <Link
                      key={item.name}
                      to={item.slug}
                      className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ):null)}
                </nav>
              </div>
              {authStatus && (
                <div className='mt-2'>         
                <LogoutBtn />
              </div>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Header


