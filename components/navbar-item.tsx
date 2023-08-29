import React from "react"
interface NavbarItemProps {
  label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label
}) => {
  return (
    <a
      className="
        text-white
        cursor-pointer
        hover:text-gray-300
        transition
      "
    >
      {label}
    </a>
  )
}

export default NavbarItem