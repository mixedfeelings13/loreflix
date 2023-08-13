import NavbarItem from "./navbar-item"

import { BsChevronDown } from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className="w-full fixed z-40">
      <div 
        className="
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-orange-100
          bg-opacity-90      
        "
      >
        <img className="h-20 lg:h-25" src="/images/logo.png" alt="Logo"/>
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
          "        
        >
          <NavbarItem label="Home"/>
          <NavbarItem label="Series"/>
          <NavbarItem label="Movies"/>
          <NavbarItem label="New & Popular"/>
          <NavbarItem label="Browse by language"/>
        </div>
        <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-orange-900 text-sm">
            Browse
          </p>
          <BsChevronDown className="text-orange-900 transition"/>
        </div>
      </div>
    </nav>
  )
} 

export default Navbar