interface NavbarItemProps {
  label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label
}) => {
  return (
    <a
      className="
        text-orange-900
        cursor-pointer
        hover:text-orange-500
        transition
      "
    >
      {label}
    </a>
  )
}

export default NavbarItem