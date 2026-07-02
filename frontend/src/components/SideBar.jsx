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


