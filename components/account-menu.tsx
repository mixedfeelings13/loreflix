import { signOut } from 'next-auth/react'
import React from 'react'

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
  visible
}) => { 
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-orange-100 w-56 absolute top-14 right-0 py-5 flex-col border-2 border-orange-900 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img src='/images/default-blue.png' className="w-8 rounded-md" alt="Profile"/>
          <p className='text-orange-900 text-sm group-hover/item:underline'>
            Username
          </p>
        </div>
        <hr className="bg-orange-900 border-0 h-px my-4"/>
        <div onClick={() => signOut} className="text-orange-900 px-3 text-center text-sm hover:underline">
          Sign Out of Loreflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu