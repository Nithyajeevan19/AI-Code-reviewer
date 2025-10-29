// import { useContext } from 'react';
// import { InputContext } from '../context/InputContextProvider';
// import { Button } from "@/components/ui/button";
// import { Code2, Sparkles } from "lucide-react";

// function CodeInput() {
//     const { code, language, setCode, setLanguage, handleSubmit, format, tone, setTone, setFormat } = useContext(InputContext);

//     const handleClick = () => {
//         handleSubmit()
//     }

//     return (
//         <div className="max-w-6xl mx-auto p-6 mt-5 w-full">
//             <div className="bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden">
//                 {/* Header */}
//                 <div className="flex justify-between items-center p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-primary/10 rounded-lg">
//                             <Code2 className="w-6 h-6 text-primary" />
//                         </div>
//                         <h1 className="text-xl font-bold text-foreground">Code Analysis</h1>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <select
//                             value={language}
//                             onChange={(e) => setLanguage(e.target.value)}
//                             className="border border-border rounded-lg px-4 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
//                         >
//                             <option value="javascript">JavaScript</option>
//                             <option value="python">Python</option>
//                             <option value="java">Java</option>
//                             <option value="cpp">C++</option>
//                             <option value="typescript">TypeScript</option>
//                             <option value="ruby">Ruby</option>
//                             <option value="go">Go</option>
//                             <option value="c">C</option>
//                             <option value="perl">Perl</option>
//                             <option value="rust">Rust</option>
//                             <option value="dart">Dart</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Format & Tone controls */}
//                 <div className="flex items-center gap-6 px-6 py-4 bg-muted/30">
//                     <div className="flex items-center gap-4">
//                         <span className="text-sm font-semibold text-muted-foreground">Format:</span>
//                         <div className="flex gap-2">
//                             {['brief', 'bullets', 'steps', 'code-first'].map((f) => (
//                                 <button
//                                     key={f}
//                                     type="button"
//                                     onClick={() => setFormat(f)}
//                                     className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-smooth ${format === f
//                                             ? 'bg-primary text-primary-foreground shadow-sm'
//                                             : 'bg-background text-foreground hover:bg-muted border border-border'
//                                         }`}
//                                     aria-pressed={format === f}
//                                 >
//                                     {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-4 ml-auto">
//                         <label className="text-sm font-semibold text-muted-foreground">Tone:</label>
//                         <select
//                             value={tone}
//                             onChange={(e) => setTone(e.target.value)}
//                             className="border border-border rounded-lg px-3 py-1.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
//                         >
//                             <option value="concise">Concise</option>
//                             <option value="detailed">Detailed</option>
//                             <option value="beginner">Beginner</option>
//                             <option value="formal">Formal</option>
//                         </select>
//                     </div>
//                 </div>

//                 <textarea
//                     value={code}
//                     onChange={(e) => setCode(e.target.value)}
//                     className="w-full h-96 p-4 rounded-xl font-mono text-sm bg-slate-900/90 text-slate-100 
//                                 border border-slate-700 focus:ring-2 focus:ring-indigo-500 resize-none transition-smooth"
//                     placeholder="// Paste your code here..."
//                     />
//                     <Button
//                     className="w-full mt-4 h-12 gradient-primary font-semibold hover:scale-[1.02] transition-transform"
//                     onClick={handleClick}
//                     >
//                     <Sparkles className="w-5 h-5 mr-2" />
//                     Analyze Code
//                     </Button>
//             </div>
//         </div>
//     )
// }

// export default CodeInput


// import { useContext } from 'react';
// import { InputContext } from '../context/InputContextProvider';
// import { Button } from "@/components/ui/button";
// import { Code2, Sparkles, Upload } from "lucide-react";

// function CodeInput() {
//     const { code, language, setCode, setLanguage, handleSubmit, format, tone, setTone, setFormat } = useContext(InputContext);

//     const handleClick = () => {
//         handleSubmit();
//     };

//     const formatOptions = [
//         { value: 'brief', label: 'Brief', icon: '📝' },
//         { value: 'bullets', label: 'Bullets', icon: '•' },
//         { value: 'steps', label: 'Steps', icon: '1→' },
//         { value: 'code-first', label: 'Code First', icon: '</>' }
//     ];

//     return (
//         <div className="w-full mb-8">
//             <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden backdrop-blur-sm">
//                 <div className="relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-10"></div>
//                     <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 gap-4 border-b border-slate-200">
//                         <div className="flex items-center gap-3">
//                             <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30">
//                                 <Code2 className="w-6 h-6 text-white" />
//                             </div>
//                             <div>
//                                 <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                                     Code Analysis
//                                 </h1>
//                                 <p className="text-sm text-slate-500">Paste your code for AI-powered review</p>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <select
//                                 value={language}
//                                 onChange={(e) => setLanguage(e.target.value)}
//                                 className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100 cursor-pointer"
//                             >
//                                 <option value="javascript">JavaScript</option>
//                                 <option value="python">Python</option>
//                                 <option value="java">Java</option>
//                                 <option value="cpp">C++</option>
//                                 <option value="typescript">TypeScript</option>
//                                 <option value="ruby">Ruby</option>
//                                 <option value="go">Go</option>
//                                 <option value="c">C</option>
//                                 <option value="perl">Perl</option>
//                                 <option value="rust">Rust</option>
//                                 <option value="dart">Dart</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Format & Tone Controls */}
//                 <div className="flex flex-col lg:flex-row lg:items-center gap-6 px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50/30 border-b border-slate-200">
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
//                         <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Format:</span>
//                         <div className="flex flex-wrap gap-2">
//                             {formatOptions.map((f) => (
//                                 <button
//                                     key={f.value}
//                                     type="button"
//                                     onClick={() => setFormat(f.value)}
//                                     className={`
//                                         group relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
//                                         ${format === f.value
//                                             ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 scale-105'
//                                             : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md'
//                                         }
//                                     `}
//                                 >
//                                     <span className="mr-2">{f.icon}</span>
//                                     {f.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                         <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Tone:</label>
//                         <select
//                             value={tone}
//                             onChange={(e) => setTone(e.target.value)}
//                             className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-50 cursor-pointer"
//                         >
//                             <option value="concise">⚡ Concise</option>
//                             <option value="detailed">📚 Detailed</option>
//                             <option value="beginner">🎓 Beginner</option>
//                             <option value="formal">💼 Formal</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Code Editor */}
//                 <div className="p-6">
//                     <div className="relative group">
//                         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition-opacity duration-300"></div>
//                         <textarea
//                             value={code}
//                             onChange={(e) => setCode(e.target.value)}
//                             className="relative w-full h-[450px] p-5 rounded-2xl font-mono text-sm
//                                 bg-slate-900 text-slate-100 
//                                 border-2 border-slate-700/50
//                                 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20
//                                 placeholder:text-slate-500
//                                 resize-none transition-all duration-200
//                                 shadow-2xl shadow-slate-900/50"
//                             placeholder="// Paste your code here for AI-powered analysis...
// // Example:
// function calculateSum(a, b) {
//     return a + b;
// }"
//                             spellCheck="false"
//                         />
//                     </div>


//                     <Button
//                         className="w-50px mt-6 h-14 text-base font-bold
//                             bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
//                             hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
//                             text-white rounded-2xl
//                             shadow-2xl shadow-blue-500/40
//                             hover:shadow-blue-500/60 hover:scale-[1.02]
//                             active:scale-[0.98]
//                             transition-all duration-200
//                             group" onClick={handleClick}>
//                         <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
//                         Analyze Code with AI
//                         <Sparkles className="w-5 h-5 ml-2 group-hover:-rotate-12 transition-transform duration-200" />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CodeInput;


// import { useContext, useState } from 'react';
// import { motion } from 'framer-motion';
// import { InputContext } from '../context/InputContextProvider';
// import { Button } from "@/components/ui/button";
// import { Code2, Sparkles, Upload, Zap, Eye, Edit3 } from "lucide-react";
// import CodeEditor from '@uiw/react-textarea-code-editor';

// function CodeInput() {
//     const { code, language, setCode, setLanguage, handleSubmit, format, tone, setTone, setFormat } = useContext(InputContext);
//     const [showPreview, setShowPreview] = useState(false);

//     const handleClick = () => {
//         handleSubmit();
//     };

//     const formatOptions = [
//         { value: 'brief', label: 'Brief', icon: '📝', color: 'from-blue-500 to-cyan-500' },
//         { value: 'bullets', label: 'Bullets', icon: '•', color: 'from-purple-500 to-pink-500' },
//         { value: 'steps', label: 'Steps', icon: '1→', color: 'from-green-500 to-emerald-500' },
//         { value: 'code-first', label: 'Code First', icon: '</>', color: 'from-orange-500 to-red-500' }
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0, y: 30 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0 }
//     };

//     return (
//         <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="w-full mb-8"
//         >
//             <motion.div
//                 variants={itemVariants}
//                 whileHover={{ y: -5 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden"
//             >
//                 {/* Animated Header */}
//                 <div className="relative overflow-hidden">
//                     <motion.div
//                         animate={{
//                             background: [
//                                 'linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.1) 100%)',
//                                 'linear-gradient(90deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)',
//                                 'linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.1) 100%)',
//                             ]
//                         }}
//                         transition={{ duration: 5, repeat: Infinity }}
//                         className="absolute inset-0"
//                     />
//                     <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 gap-4 border-b border-slate-200">
//                         <div className="flex items-center gap-3">
//                             <motion.div
//                                 whileHover={{ rotate: 360, scale: 1.1 }}
//                                 transition={{ duration: 0.6 }}
//                                 className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg shadow-blue-500/30"
//                             >
//                                 <Code2 className="w-6 h-6 text-white" />
//                             </motion.div>
//                             <div>
//                                 <motion.h1
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
//                                 >
//                                     Code Analysis
//                                 </motion.h1>
//                                 <p className="text-sm text-slate-500">Paste your code for AI-powered review</p>
//                             </div>
//                         </div>
//                         <motion.select
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             value={language}
//                             onChange={(e) => setLanguage(e.target.value)}
//                             className="px-4 py-2.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-100 cursor-pointer"
//                         >
//                             <option value="javascript">JavaScript</option>
//                             <option value="python">Python</option>
//                             <option value="java">Java</option>
//                             <option value="cpp">C++</option>
//                             <option value="typescript">TypeScript</option>
//                             <option value="ruby">Ruby</option>
//                             <option value="go">Go</option>
//                             <option value="c">C</option>
//                             <option value="rust">Rust</option>
//                             <option value="dart">Dart</option>
//                         </motion.select>
//                     </div>
//                 </div>

//                 {/* Format & Tone Controls */}
//                 <motion.div
//                     variants={itemVariants}
//                     className="flex flex-col lg:flex-row lg:items-center gap-6 px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50/30 border-b border-slate-200"
//                 >
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
//                         <span className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
//                             <Zap className="w-4 h-4 text-blue-600" />
//                             Format:
//                         </span>
//                         <div className="flex flex-wrap gap-2">
//                             {formatOptions.map((f, idx) => (
//                                 <motion.button
//                                     key={f.value}
//                                     initial={{ opacity: 0, scale: 0.8 }}
//                                     animate={{ opacity: 1, scale: 1 }}
//                                     transition={{ delay: idx * 0.1 }}
//                                     whileHover={{ scale: 1.05, y: -2 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     type="button"
//                                     onClick={() => setFormat(f.value)}
//                                     className={`
//                                         group relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300
//                                         ${format === f.value
//                                             ? `bg-gradient-to-r ${f.color} text-white shadow-lg`
//                                             : 'bg-white text-slate-600 hover:bg-slate-50 border-2 border-slate-200 hover:border-blue-300 hover:shadow-md'
//                                         }
//                                     `}
//                                 >
//                                     {format === f.value && (
//                                         <motion.div
//                                             layoutId="activeFormat"
//                                             className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl -z-10"
//                                             transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                                         />
//                                     )}
//                                     <span className="mr-2">{f.icon}</span>
//                                     {f.label}
//                                 </motion.button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//                         <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Tone:</label>
//                         <motion.select
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             value={tone}
//                             onChange={(e) => setTone(e.target.value)}
//                             className="px-4 py-2.5 bg-white border-2 border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-slate-50 cursor-pointer"
//                         >
//                             <option value="concise">⚡ Concise</option>
//                             <option value="detailed">📚 Detailed</option>
//                             <option value="beginner">🎓 Beginner</option>
//                             <option value="formal">💼 Formal</option>
//                         </motion.select>
//                     </div>
//                 </motion.div>

//                 {/* Code Editor */}
//                 <motion.div variants={itemVariants} className="p-6">
//                     <div className="flex justify-between items-center mb-4">
//                         <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
//                             <Code2 className="w-4 h-4" />
//                             Code Editor
//                         </h3>
//                         <motion.button
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             onClick={() => setShowPreview(!showPreview)}
//                             className="flex items-center gap-2 text-xs px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium text-slate-700 transition-colors"
//                         >
//                             {showPreview ? <Edit3 className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
//                             {showPreview ? 'Edit' : 'Preview'}
//                         </motion.button>
//                     </div>

//                     <motion.div
//                         className="relative group"
//                         whileHover={{ scale: 1.01 }}
//                         transition={{ duration: 0.2 }}
//                     >
//                         <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity duration-300"></div>

//                         {showPreview && code ? (
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 className="relative"
//                             >
//                                 <CodeEditor
//                                     value={code}
//                                     language={language}
//                                     readOnly
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: '#0f172a',
//                                         fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
//                                         borderRadius: '1rem',
//                                         border: '2px solid rgba(71, 85, 105, 0.5)',
//                                         minHeight: '450px'
//                                     }}
//                                 />
//                             </motion.div>
//                         ) : (
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 className="relative"
//                             >
//                                 <CodeEditor
//                                     value={code}
//                                     language={language}
//                                     placeholder="// Paste your code here for AI-powered analysis...
// // Example:
// function calculateSum(a, b) {
//     return a + b;
// }"
//                                     onChange={(evn) => setCode(evn.target.value)}
//                                     style={{
//                                         fontSize: 14,
//                                         backgroundColor: '#0f172a',
//                                         fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
//                                         borderRadius: '1rem',
//                                         border: '2px solid rgba(71, 85, 105, 0.5)',
//                                         minHeight: '450px'
//                                     }}
//                                 />
//                             </motion.div>
//                         )}
//                     </motion.div>

//                     {/* Animated Analyze Button */}
//                     <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                     >
//                         <Button
//                             className="w-100px mt-6 h-14 text-base font-bold
//                                 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
//                                 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
//                                 text-white rounded-2xl
//                                 shadow-2xl shadow-blue-500/40
//                                 hover:shadow-blue-500/60
//                                 transition-all duration-200
//                                 group relative overflow-hidden"
//                             onClick={handleClick}
//                         >
//                             <motion.div
//                                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                                 animate={{
//                                     x: ['-100%', '100%']
//                                 }}
//                                 transition={{
//                                     duration: 2,
//                                     repeat: Infinity,
//                                     repeatDelay: 1
//                                 }}
//                             />
//                             <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
//                             Analyze Code with AI
//                             <Sparkles className="w-5 h-5 ml-2 group-hover:-rotate-12 transition-transform duration-200" />
//                         </Button>
//                     </motion.div>
//                 </motion.div>
//             </motion.div>
//         </motion.div>
//     );
// }

// export default CodeInput;



// import { useContext, useState } from 'react';
// import { motion } from 'framer-motion';
// import { InputContext } from '../context/InputContextProvider';
// import { Button } from "@/components/ui/button";
// import { Code2, Sparkles, Zap, Play, Settings2 } from "lucide-react";
// import Editor from '@monaco-editor/react';

// function CodeInput() {
//     const { code, language, setCode, setLanguage, handleSubmit, format, tone, setTone, setFormat } = useContext(InputContext);

//     const formatOptions = [
//         { value: 'brief', label: 'Brief', icon: '📝' },
//         { value: 'bullets', label: 'Bullets', icon: '•' },
//         { value: 'steps', label: 'Steps', icon: '→' },
//         { value: 'code-first', label: 'Code', icon: '</>' }
//     ];

//     return (
//         <div className="h-full flex flex-col bg-slate-900/50 backdrop-blur-xl">
//             {/* Header */}
//             <div className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
//                 <div className="p-4">
//                     <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center gap-3">
//                             <motion.div
//                                 whileHover={{ rotate: 360 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"
//                             >
//                                 <Code2 className="w-5 h-5 text-white" />
//                             </motion.div>
//                             <div>
//                                 <h2 className="text-lg font-bold text-white">Code Editor</h2>
//                                 <p className="text-xs text-slate-400">Paste or write your code</p>
//                             </div>
//                         </div>

//                         <select
//                             value={language}
//                             onChange={(e) => setLanguage(e.target.value)}
//                             className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="javascript">JavaScript</option>
//                             <option value="python">Python</option>
//                             <option value="java">Java</option>
//                             <option value="cpp">C++</option>
//                             <option value="typescript">TypeScript</option>
//                             <option value="go">Go</option>
//                             <option value="rust">Rust</option>
//                         </select>
//                     </div>

//                     {/* Controls */}
//                     <div className="flex flex-wrap gap-2 mb-3">
//                         <div className="flex items-center gap-2">
//                             <span className="text-xs font-semibold text-slate-400 uppercase">Format:</span>
//                             {formatOptions.map((f) => (
//                                 <motion.button
//                                     key={f.value}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={() => setFormat(f.value)}
//                                     className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
//                                         format === f.value
//                                             ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
//                                             : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
//                                     }`}
//                                 >
//                                     {f.icon} {f.label}
//                                 </motion.button>
//                             ))}
//                         </div>

//                         <select
//                             value={tone}
//                             onChange={(e) => setTone(e.target.value)}
//                             className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="concise">⚡ Concise</option>
//                             <option value="detailed">📚 Detailed</option>
//                             <option value="beginner">🎓 Beginner</option>
//                             <option value="formal">💼 Formal</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             {/* Monaco Editor */}
//             <div className="flex-1 relative">
//                 <Editor
//                     height="100%"
//                     language={language}
//                     value={code}
//                     onChange={(value) => setCode(value || '')}
//                     theme="vs-dark"
//                     options={{
//                         fontSize: 14,
//                         minimap: { enabled: false },
//                         scrollBeyondLastLine: false,
//                         wordWrap: 'on',
//                         lineNumbers: 'on',
//                         renderLineHighlight: 'all',
//                         cursorBlinking: 'smooth',
//                         smoothScrolling: true,
//                     }}
//                 />
//             </div>

//             {/* Analyze Button */}
//             <div className="p-4 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
//                 <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Button
//                         onClick={handleSubmit}
//                         className="w-full h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-2xl shadow-blue-500/50 group relative overflow-hidden"
//                     >
//                         <motion.div
//                             className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//                             animate={{ x: ['-100%', '100%'] }}
//                             transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
//                         />
//                         <Play className="w-5 h-5 mr-2" />
//                         Analyze Code with AI
//                         <Sparkles className="w-5 h-5 ml-2" />
//                     </Button>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default CodeInput;


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
                        fontSize: 14,
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
