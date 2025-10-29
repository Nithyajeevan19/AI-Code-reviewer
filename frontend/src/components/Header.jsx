// import { Bug, User, Settings, LogOut } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from 'react';
// import { InputContext } from '../context/InputContextProvider';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// function Header() {
//   const navigate = useNavigate();
//   const { isAuthenticated, handleLogout } = useContext(InputContext);

//   const onLogout = () => {
//     handleLogout();
//     navigate('/login');
//   };

//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200 w-full sticky top-0 z-50">
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 w-full">
//         {/* Left side: Logo and Title */}
//         <div className="flex items-center flex-1 min-w-0">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg mr-3 flex-shrink-0">
//             <Bug className="w-6 h-6 text-white" />
//           </div>
//           <div className="min-w-0 flex-1">
//             <h1 className="text-xl font-bold text-gray-900 truncate">CodeReviewer</h1>
//             <p className="text-sm text-gray-500 truncate">Intelligent Code Analysis</p>
//           </div>
//         </div>

//         {/* Right side: Profile Menu */}
//         <div className="flex items-center space-x-3 flex-shrink-0">
//           {isAuthenticated ? (
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                 <User className="w-5 h-5 text-gray-700" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => navigate('/profile')}>
//                   <User className="w-4 h-4 mr-2" />
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => navigate('/settings')}>
//                   <Settings className="w-4 h-4 mr-2" />
//                   Settings
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem
//                   onClick={onLogout}
//                   className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
//                 >
//                   <LogOut className="w-4 h-4 mr-2" />
//                   Logout
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           ) : (
//             <div className="flex items-center space-x-2">
//               <Button
//                 variant="ghost"
//                 onClick={() => navigate('/login')}
//                 className="text-sm"
//               >
//                 Login
//               </Button>
//               <Button
//                 onClick={() => navigate('/register')}
//                 className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
//               >
//                 Sign Up
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import { motion } from 'framer-motion';
import { Bug, User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { InputContext } from '../context/InputContextProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, handleLogout } = useContext(InputContext);

  return (
    <header className="bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl"
          >
            <Bug className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              CodeReviewer AI
            </h1>
            <p className="text-xs text-slate-500">Intelligent Code Analysis</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center hover:scale-110 transition-transform">
                <User className="w-5 h-5 text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-slate-900 border-slate-800">
                <DropdownMenuLabel className="text-slate-300">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-slate-800" />
                <DropdownMenuItem onClick={() => navigate('/profile')} className="text-slate-300 hover:bg-slate-800">
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')} className="text-slate-300 hover:bg-slate-800">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-slate-800" />
                <DropdownMenuItem
                  onClick={() => { handleLogout(); navigate('/login'); }}
                  className="text-red-400 hover:bg-red-900/20"
                >
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" onClick={() => navigate('/login')} className="text-white">
                Login
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-gradient-to-r from-blue-600 to-indigo-600">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
