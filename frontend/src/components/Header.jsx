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
