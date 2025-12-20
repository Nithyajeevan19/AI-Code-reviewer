import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InputContext } from "../context/InputContextProvider";
import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode, TrendingUp, Sparkles } from "lucide-react";

function Result() {
  const { data, loading, responseTime } = useContext(InputContext);
  console.log("Result component data:", data);

  const iconMap = {
    summary: { icon: ListTree, gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    issues: { icon: AlertCircle, gradient: "from-red-500 to-rose-500", bg: "bg-red-500/10", border: "border-red-500/30" },
    suggestions: { icon: Lightbulb, gradient: "from-amber-500 to-yellow-500", bg: "bg-amber-500/10", border: "border-amber-500/30" },
    fixes: { icon: Code2, gradient: "from-emerald-500 to-green-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
    best_practices: { icon: CheckCircle, gradient: "from-green-500 to-emerald-500", bg: "bg-green-500/10", border: "border-green-500/30" },
    complexity_analysis: { icon: TrendingUp, gradient: "from-purple-500 to-pink-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
    security_concerns: { icon: Shield, gradient: "from-orange-500 to-red-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
    optimization_opportunities: { icon: Zap, gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
    code_style: { icon: FileCode, gradient: "from-indigo-500 to-purple-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-900/30 backdrop-blur-xl">
      {/* Header - Fixed, no scroll */}
      <div className="flex-shrink-0 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <h2 className="text-lg font-bold text-white">AI Analysis</h2>
              <p className="text-xs text-slate-400">Review results</p>
            </div>
          </div>

          <AnimatePresence>
            {loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full"
              >
                <Spinner size={16} className="text-blue-400" />
                <span className="text-xs font-medium text-blue-300">Analyzing...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!loading && responseTime && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 text-lg text-green-400 flex items-center gap-2"
          >
            <Zap className="w-3 h-3" />
            Generated in {responseTime}
          </motion.div>
        )}
      </div>

      {/* Results - Scrollable area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mb-4"
              />
              <p className="text-slate-400 text-sm">Analyzing your code...</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-4"
            >
              {Object.entries(data).map(([key, items]) => {
                if (!items || items.length === 0) return null;
                
                const config = iconMap[key];
                if (!config) return null;

                const IconComponent = config.icon;

                return (
                  <motion.div key={key} variants={cardVariants}>
                    <div className={`${config.bg} ${config.border} border backdrop-blur-xl rounded-xl overflow-hidden`}>
                      {/* Card Header */}
                      <div className="p-3 border-b border-slate-700/50">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 bg-gradient-to-br ${config.gradient} rounded-lg shadow-lg`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-white capitalize text-sm flex-1">
                            {key.replace('_', ' ')}
                          </h3>
                          <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
                            {items.length}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4">
                        {key === 'fixes' ? (
                          <div className="space-y-3">
                            {items.map((fix, i) => (
                              <div key={i} className="space-y-2">
                                <p className="text-sm font-medium text-slate-200">{fix.description}</p>
                                <pre className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 overflow-x-auto text-xs">
                                  <code className="text-green-400 font-mono">{fix.code}</code>
                                </pre>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-2">
                            {items.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-2 text-sm text-slate-300"
                              >
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-[10px] font-bold text-white mt-0.5`}>
                                  {i + 1}
                                </span>
                                <span className="leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;

