import { useContext } from 'react';
import { motion } from 'framer-motion';
import { InputContext } from '../context/InputContextProvider';
import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Zap, Play, RefreshCw } from "lucide-react";
import Editor from '@monaco-editor/react';

function CodeInput() {
    const { code, language, setCode, setLanguage, handleSubmit, format, tone, setTone, setFormat, loading } = useContext(InputContext);

    const formatOptions = [
        { value: 'brief', label: 'Brief', icon: '📝' },
        { value: 'bullets', label: 'Bullets', icon: '•' },
        { value: 'steps', label: 'Steps', icon: '→' },
        { value: 'code-first', label: 'Code', icon: '</>' }
    ];

    const handleRefresh = () => {
        if (code && !loading) {
            handleSubmit();
        }
    };

    return (
        <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-xl">
            {/* Header - Fixed height, no scroll */}
            <div className="flex-shrink-0 border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
                <div className="p-4 space-y-3">
                    {/* Title, Refresh & Language Selector */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"
                            >
                                <Code2 className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                                <h2 className="text-lg font-bold text-white">Code Editor</h2>
                                <p className="text-xs text-slate-400">Paste or write your code</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {/* Refresh Button in Header */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRefresh}
                                disabled={loading || !code}
                                className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 hover:border-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                title="Regenerate response"
                            >
                                <motion.div
                                    animate={loading ? { rotate: 360 } : {}}
                                    transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                                >
                                    <RefreshCw className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                </motion.div>
                            </motion.button>

                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="cpp">C++</option>
                                <option value="typescript">TypeScript</option>
                                <option value="go">Go</option>
                                <option value="rust">Rust</option>
                            </select>
                        </div>
                    </div>

                    {/* Format & Tone Controls - Compact */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400">Format:</span>
                        {formatOptions.map((f) => (
                            <motion.button
                                key={f.value}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFormat(f.value)}
                                className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                                    format === f.value
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                            >
                                {f.icon}
                            </motion.button>
                        ))}

                        <div className="ml-auto flex items-center gap-2">
                            <span className="text-xs font-semibold text-slate-400">Tone:</span>
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="concise">⚡ Concise</option>
                                <option value="detailed">📚 Detailed</option>
                                <option value="beginner">🎓 Beginner</option>
                                <option value="formal">💼 Formal</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Monaco Editor - Takes remaining space, has own scroll */}
            <div className="flex-1 min-h-0">
                <Editor
                    height="100%"
                    language={language}
                    value={code}
                    onChange={(value) => setCode(value || '')}
                    theme="vs-dark"
                    options={{
                        fontSize: 17,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        wordWrap: 'on',
                        lineNumbers: 'on',
                        renderLineHighlight: 'all',
                        cursorBlinking: 'smooth',
                        smoothScrolling: true,
                        padding: { top: 16, bottom: 16 },
                    }}
                />
            </div>

            {/* Analyze Button - Fixed at bottom */}
            <div className="flex-shrink-0 p-4 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                        onClick={handleSubmit}
                        disabled={loading || !code}
                        className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-2xl shadow-blue-500/50 group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                        <Play className="w-5 h-5 mr-2" />
                        Analyze Code
                        <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default CodeInput;
