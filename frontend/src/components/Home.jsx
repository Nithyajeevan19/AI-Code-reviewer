import { motion, AnimatePresence } from 'framer-motion';
import CodeInput from './CodeInput';
import Result from './Result';
import SideBar from './SideBar';
import Header from './Header';



function Home() {
  
  return (
    <div className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <Header />
      
      <div className="flex flex-1 overflow-hidden">

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl shadow-blue-500/50"
        >
          <motion.div
            animate={{ rotate:  180 }}
            transition={{ duration: 0.3 }}
          >
          </motion.div>
        </motion.button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
            />
        </AnimatePresence>

        {/* Sidebar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            fixed md:static h-full z-40
            transform transition-transform duration-300 ease-in-out md:transform-none
          `}
        >
          <SideBar />
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

