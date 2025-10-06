import { Bug } from "lucide-react";
import { Settings } from 'lucide-react';
<<<<<<< HEAD
import { User } from 'lucide-react';   // Better icon for profile
=======
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6
 
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<<<<<<< HEAD
// function Header() {
//   const navigate = useNavigate();

//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex items-center space-x-3">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
//               <Bug className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">CodeReviewer</h1>
//               <p className="text-sm text-gray-500">Intelligent Code Analysis</p>
//             </div>
//           </div>
          
//           {/* Profile Section */}
//           <div className="flex items-center">
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   fill="none" 
//                   viewBox="0 0 24 24" 
//                   strokeWidth={1.5} 
//                   stroke="currentColor" 
//                   className="w-6 h-6 text-gray-700"
//                 >
//                   <path 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round" 
//                     d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
//                   />
//                 </svg>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => navigate('/Profile')}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => navigate('/billing')}>
//                   Billing
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   Team
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => navigate('/subscription')}>
//                   Subscription
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
//export default Header


function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 w-full">
        {/* Left side: Logo and Title */}
        <div className="flex items-center flex-1 min-w-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3">
            <Bug className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">CodeReviewer</h1>
            <p className="text-sm text-gray-500 whitespace-nowrap">Intelligent Code Analysis</p>
          </div>
        </div>
        
        {/* Right side: Profile */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/Profile')}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/billing')}>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/subscription')}>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;

=======

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
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6
