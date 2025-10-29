// import { motion } from 'framer-motion';
// import CodeInput from './CodeInput';
// import Result from './Result';
// import SideBar from './SideBar';
// import Header from './Header';

// function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
//       <Header />

//       <div className="flex flex-1 overflow-hidden">
//         {/* Always Visible Sidebar */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-64 lg:w-72 bg-white shadow-xl z-40"
//         >
//           <SideBar />
//         </motion.div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex-1 flex flex-col overflow-hidden"
//         >
//           <main className="flex-1 overflow-y-auto">
//             <div className="container mx-auto p-4 lg:p-6 max-w-7xl">
//               <CodeInput />
//               <Result />
//             </div>
//           </main>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import CodeInput from './CodeInput';
// import Result from './Result';
// import SideBar from './SideBar';
// import Header from './Header';
// import { Menu, X, Code2, Sparkles } from 'lucide-react';

// function Home() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-slate-950 flex flex-col overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <Header />
      
//       <div className="flex flex-1 relative overflow-hidden">
//         {/* Mobile Menu Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="lg:hidden fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl shadow-blue-500/50"
//         >
//           <motion.div
//             animate={{ rotate: sidebarOpen ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </motion.div>
//         </motion.button>

//         {/* Overlay */}
//         <AnimatePresence>
//           {sidebarOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
//               onClick={() => setSidebarOpen(false)}
//             />
//           )}
//         </AnimatePresence>

//         {/* Sidebar */}
//         <motion.div
//           initial={false}
//           animate={{
//             x: sidebarOpen ? 0 : '-100%',
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 300,
//             damping: 30
//           }}
//           className="fixed lg:static inset-y-0 left-0 z-40 lg:translate-x-0"
//         >
//           <SideBar closeSidebar={() => setSidebarOpen(false)} />
//         </motion.div>

//         {/* Main Content - Split Screen */}
//         <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10">
//           {/* Left: Code Input */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex-1 overflow-y-auto border-r border-slate-800/50"
//           >
//             <CodeInput />
//           </motion.div>

//           {/* Right: Results */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex-1 overflow-y-auto"
//           >
//             <Result />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import CodeInput from './CodeInput';
// import Result from './Result';
// import SideBar from './SideBar';
// import Header from './Header';
// import {  ChevronLeft, ChevronRight } from 'lucide-react';

// function Home() {
//   const [sidebarOpen, setSidebarOpen] = useState(true); // Default open on all screens

//   return (
//     <div className="min-h-screen bg-slate-950 flex flex-col overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <Header />
      
//       <div className="flex flex-1 relative overflow-hidden">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="fixed top-20 left-2 z-50 p-2 bg-slate-800/90 backdrop-blur-xl border border-slate-700 text-white rounded-lg shadow-xl hover:bg-slate-700 transition-colors"
//           style={{ left: sidebarOpen ? '310px' : '10px' }}
//         >
//           <motion.div
//             animate={{ rotate: sidebarOpen ? 0 : 180 }}
//             transition={{ duration: 0.3 }}
//           >
//             {sidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
//           </motion.div>
//         </motion.button>
//         <AnimatePresence>
//           {sidebarOpen && (
//             <motion.div
//               initial={{ x: -320 }}
//               animate={{ x: 0 }}
//               exit={{ x: -320 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="z-40"
//             >
//               <SideBar closeSidebar={() => setSidebarOpen(false)} />
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Main Content - Split Screen */}
//         <motion.div
//           animate={{ marginLeft: sidebarOpen ? 0 : 0 }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           className="flex-1 flex flex-col lg:flex-row overflow-hidden relative z-10"
//         >
//           {/* Left: Code Input */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex-1 overflow-y-auto border-r border-slate-800/50"
//           >
//             <CodeInput />
//           </motion.div>

//           {/* Right: Results */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="flex-1 overflow-y-auto"
//           >
//             <Result />
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeInput from './CodeInput';
import Result from './Result';
import SideBar from './SideBar';
import Header from './Header';
import { Menu, X } from 'lucide-react';

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header - Fixed height */}
      <Header />
      
      {/* Main Container - Takes remaining height */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl shadow-blue-500/50"
        >
          <motion.div
            animate={{ rotate: sidebarOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Sidebar - Fixed width, full height with own scroll */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            fixed md:static h-full z-40
            transform transition-transform duration-300 ease-in-out md:transform-none
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <SideBar closeSidebar={() => setSidebarOpen(false)} />
        </motion.div>

        {/* Main Content - Split Screen with independent scrolls */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left: Code Input - Independent scroll */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 h-full overflow-hidden border-r border-slate-800/50"
          >
            <CodeInput />
          </motion.div>

          {/* Right: Results - Independent scroll */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 h-full overflow-hidden"
          >
            <Result />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;

