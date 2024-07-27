import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>  
        <header className="bg-blue-600 text-white shadow-lg">
            <nav className="container mx-auto p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:text-blue-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-300">About</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="hover:text-blue-300">Blog</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-blue-300">Cart</Link>
                    </li>
                    <li>
                        <Link to="/user" className="hover:text-blue-300">User</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header