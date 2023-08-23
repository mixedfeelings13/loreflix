import NavbarItem from "./navbar-item"
import MobileMenu from "./mobile-menu"
import AccountMenu from "./account-menu"

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useCallback, useState } from "react"

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current)
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current)
  }, []);

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
          <NavbarItem label="My List"/>
          <NavbarItem label="Browse by language"/>
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-orange-900 text-sm">
            Browse
          </p>
          <BsChevronDown className={`text-orange-900 transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
          <MobileMenu  visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-orange-900 hover:text-orange-500 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-orange-900 hover:text-orange-500 cursor-pointer transition">
            <BsBell />
          </div>
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="Profile"/>
            </div>
            <BsChevronDown className={`text-orange-900 transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
            <AccountMenu visible={showAccountMenu}/>
          </div>
        </div>
      </div>
    </nav>
  )
} 

export default Navbar