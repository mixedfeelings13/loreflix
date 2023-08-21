import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-orange-100 w-56 absolute top-9 left-0 py-5 flex-col border-2 border-orange-900 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-orange-900 hover:underline">
          Home
        </div>
        <div className="px-3 text-center text-orange-900 hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-orange-900 hover:underline">
          Movies
        </div>
        <div className="px-3 text-center text-orange-900 hover:underline">
          New & Popular
        </div>
        <div className="px-3 text-center text-orange-900 hover:underline">
          My List
        </div>
        <div className="px-3 text-center text-orange-900 hover:underline">
          Browse by language
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
