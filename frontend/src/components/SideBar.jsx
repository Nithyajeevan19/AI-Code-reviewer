// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { InputContext } from '../context/InputContextProvider';
// import { History, Clock, Plus, LogOut, User, Trash2 } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// function SideBar() {
//   const {
//     history,
//     setCode,
//     setData,
//     handleLogout,
//     isAuthenticated
//   } = useContext(InputContext);

//   const navigate = useNavigate();

//   function loadHistoryItem(item) {
//     setCode(item.code);
//     setData(item.analysisResult);
//   }

//   function startNewChat() {
//     setCode("");
//     setData({
//       summary: [],
//       issues: [],
//       suggestions: [],
//       fixes: [],
//       best_practices: [],
//       complexity_analysis: [],
//       security_concerns: [],
//       optimization_opportunities: [],
//       code_style: [],
//     });
//   }

//   const onLogout = () => {
//     handleLogout();
//     navigate('/login');
//   };

//   return (
//     <div className="w-80 bg-sidebar text-sidebar-foreground border-r border-sidebar-border shadow-xl flex flex-col h-full">
//       {/* Header */}
//       <div className="p-6 border-b border-sidebar-border bg-gradient-to-b from-sidebar-primary/10 to-transparent">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-sidebar-primary/20 rounded-lg">
//               <History className="w-6 h-6 text-sidebar-primary" />
//             </div>
//             <h2 className="text-xl font-bold">History</h2>
//           </div>

//           {/* New Chat button */}
//           <button
//             onClick={startNewChat}
//             className="p-2 bg-sidebar-primary/20 rounded-lg hover:bg-sidebar-primary/30 transition"
//             title="Start new chat"
//           >
//             <Plus className="w-5 h-5 text-sidebar-primary" />
//           </button>
//         </div>
//       </div>

//       {/* History List */}
//       <div className="p-4 space-y-2 overflow-y-auto flex-1">
//         {!isAuthenticated ? (
//           <div className="text-center py-12">
//             <User className="w-12 h-12 text-sidebar-foreground/30 mx-auto mb-3" />
//             <p className="text-sidebar-foreground/60 text-sm">Please log in</p>
//             <p className="text-sidebar-foreground/40 text-xs mt-1">to view your analysis history</p>
//             <Button
//               onClick={() => navigate('/login')}
//               className="mt-4 text-xs"
//               variant="outline"
//             >
//               Go to Login
//             </Button>
//           </div>
//         ) : history.length === 0 ? (
//           <div className="text-center py-12">
//             <Clock className="w-12 h-12 text-sidebar-foreground/30 mx-auto mb-3" />
//             <p className="text-sidebar-foreground/60 text-sm">No history yet</p>
//             <p className="text-sidebar-foreground/40 text-xs mt-1">Your analyzed code will appear here</p>
//           </div>
//         ) : (
//           history.map((item) => (
//             <div
//               key={item._id}
//               className="p-4 rounded-lg border border-sidebar-border bg-sidebar-accent/50 hover:bg-sidebar-accent cursor-pointer transition-smooth group"
//               onClick={() => loadHistoryItem(item)}
//             >
//               <h3 className="font-semibold text-sidebar-foreground group-hover:text-sidebar-primary transition-colors line-clamp-2">
//                 {item.title || 'Untitled Analysis'}
//               </h3>

//               <div className="flex items-center justify-between mt-2">
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-3 h-3 text-sidebar-foreground/50" />
//                   <p className="text-sidebar-foreground/60 text-xs">
//                     {new Date(item.createdAt).toLocaleDateString()}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-1">
//                   <span className="text-xs bg-sidebar-primary/20 text-sidebar-primary px-2 py-1 rounded">
//                     {item.language || 'JS'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>


//     </div>
//   );
// }

// export default SideBar;

// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { InputContext } from '../context/InputContextProvider';
// import { History, Clock, Plus, User, X } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// function SideBar({ closeSidebar }) {
//   const {
//     history,
//     setCode,
//     setData,
//     handleLogout,
//     isAuthenticated
//   } = useContext(InputContext);

//   const navigate = useNavigate();

//   function loadHistoryItem(item) {
//     setCode(item.code);
//     setData(item.analysisResult);
//     closeSidebar?.(); // Close sidebar on mobile after selection
//   }

//   function startNewChat() {
//     setCode("");
//     setData({
//       summary: [],
//       issues: [],
//       suggestions: [],
//       fixes: [],
//       best_practices: [],
//       complexity_analysis: [],
//       security_concerns: [],
//       optimization_opportunities: [],
//       code_style: [],
//     });
//     closeSidebar?.(); // Close sidebar on mobile
//   }

//   return (
//     <div className="w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-r border-slate-700 shadow-2xl flex flex-col h-screen">
//       {/* Header */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
//         <div className="relative p-6 border-b border-slate-700/50">
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="p-2.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg">
//                 <History className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-xl font-bold">History</h2>
//             </div>

//             {/* Close button for mobile */}
//             <button
//               onClick={closeSidebar}
//               className="lg:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* New Chat Button */}
//           <button
//             onClick={startNewChat}
//             className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
//           >
//             <Plus className="w-5 h-5" />
//             New Analysis
//           </button>
//         </div>
//       </div>

//       {/* History List */}
//       <div className="p-4 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
//         {!isAuthenticated ? (
//           <div className="text-center py-16 px-4">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center">
//               <User className="w-8 h-8 text-slate-400" />
//             </div>
//             <p className="text-slate-300 text-sm font-semibold mb-2">Please log in</p>
//             <p className="text-slate-500 text-xs mb-4">to view your analysis history</p>
//             <Button
//               onClick={() => {
//                 navigate('/login');
//                 closeSidebar?.();
//               }}
//               className="text-sm bg-blue-600 hover:bg-blue-700"
//             >
//               Go to Login
//             </Button>
//           </div>
//         ) : history.length === 0 ? (
//           <div className="text-center py-16 px-4">
//             <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center">
//               <Clock className="w-8 h-8 text-slate-400" />
//             </div>
//             <p className="text-slate-300 text-sm font-semibold mb-2">No history yet</p>
//             <p className="text-slate-500 text-xs">Your analyzed code will appear here</p>
//           </div>
//         ) : (
//           history.map((item) => (
//             <div
//               key={item._id}
//               className="group relative p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700/70 cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
//               onClick={() => loadHistoryItem(item)}
//             >
//               {/* Hover gradient effect */}
//               <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-200"></div>
              
//               <div className="relative">
//                 <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-2 mb-3">
//                   {item.title || 'Untitled Analysis'}
//                 </h3>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-3.5 h-3.5 text-slate-400" />
//                     <p className="text-slate-400 text-xs">
//                       {new Date(item.createdAt).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>

//                   <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full">
//                     {item.language || 'JS'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default SideBar;


import { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { InputContext } from '../context/InputContextProvider';
import { History, Clock, Plus, User, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

function SideBar({ closeSidebar }) {
  const { history, setCode, setData, isAuthenticated } = useContext(InputContext);
  const navigate = useNavigate();

  function loadHistoryItem(item) {
    setCode(item.code);
    setData(item.analysisResult);
    closeSidebar?.();
  }

  function startNewChat() {
    setCode("");
    setData({
      summary: [], issues: [], suggestions: [], fixes: [],
      best_practices: [], complexity_analysis: [], security_concerns: [],
      optimization_opportunities: [], code_style: [],
    });
    closeSidebar?.();
  }

  return (
    <div className="w-80 h-screen bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
              <History className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-bold text-white">History</h2>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={startNewChat}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl font-semibold text-white text-sm shadow-lg"
        >
          <Plus className="w-4 h-4" />
          New Analysis
        </motion.button>
      </div>

      {/* History List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {!isAuthenticated ? (
          <div className="text-center py-16">
            <User className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm mb-4">Please log in to view history</p>
            <Button onClick={() => navigate('/login')} size="sm" className="bg-blue-600">
              Login
            </Button>
          </div>
        ) : history.length === 0 ? (
          <div className="text-center py-16">
            <Clock className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">No history yet</p>
          </div>
        ) : (
          history.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, x: 4 }}
              onClick={() => loadHistoryItem(item)}
              className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 cursor-pointer transition-all group"
            >
              <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                {item.title || 'Untitled'}
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded font-medium">
                  {item.language || 'JS'}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default SideBar;


