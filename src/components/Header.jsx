import { Bug } from "lucide-react";
import { Settings } from 'lucide-react';
 
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {

  const navigate = useNavigate();

  return (

    <header className="bg-white shadow-sm border-b border-gray-200 col-span-3 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CodeReviewer</h1>
              <p className="text-sm text-gray-500">Intelligent Code Analysis</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <DropdownMenu>

                  <DropdownMenuTrigger>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>navigate('/Profile')}>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>navigate('/billing')}>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=>navigate('/subscription')}>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>

            </DropdownMenu>

            {/* <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Online</span>
            </div> */}
            
          </div>
        </div>
      </div>
      
    </header>

  )
}

export default Header
