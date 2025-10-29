// import { useContext } from "react";
// import { InputContext } from "../context/InputContextProvider";
// import { Spinner } from '@/components/ui/shadcn-io/spinner';
// import { Skeleton } from "@/components/ui/skeleton";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode } from "lucide-react";

// function Result() {
//   const { data, loading, responseTime, setResponseTime } = useContext(InputContext);

//   const iconMap = {
//     summary: { icon: ListTree, color: "text-blue-600", bg: "bg-blue-50" },
//     issues: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50" },
//     suggestions: { icon: Lightbulb, color: "text-amber-600", bg: "bg-amber-50" },
//     fixes: { icon: Code2, color: "text-emerald-600", bg: "bg-emerald-50" },
//     best_practices: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
//     complexity_analysis: { icon: ListTree, color: "text-purple-600", bg: "bg-purple-50" },
//     security_concerns: { icon: Shield, color: "text-orange-600", bg: "bg-orange-50" },
//     optimization_opportunities: { icon: Zap, color: "text-cyan-600", bg: "bg-cyan-50" },
//     code_style: { icon: FileCode, color: "text-indigo-600", bg: "bg-indigo-50" },
//   };


//   return (
//     <div className="max-w-6xl mx-auto p-6 mt-6 w-full">
//       <div className="flex flex-row justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-foreground">AI Analysis Results</h2>
//         {loading && <Spinner className="text-primary" size={30} />}
//       </div>

//       <div className="bg-card rounded-2xl shadow-lg border border-border/50 p-6 space-y-6">
//         {!loading && responseTime && (
//           <div className="flex justify-end">
//             <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
//               Response generated in {responseTime}
//             </span>
//           </div>
//         )}

//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-12 space-y-4 max-w-2xl mx-auto">
//             <Skeleton className="h-12 w-full" />
//             <Skeleton className="h-12 w-full" />
//             <Skeleton className="h-12 w-3/4" />
//           </div>

//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Summary */}
//             {data.summary && data.summary.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.summary.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <ListTree className={`w-5 h-5 ${iconMap.summary.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Summary</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.summary.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
             
//             )}

//             {/* Issues */}
//             {data.issues && data.issues.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.issues.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <AlertCircle className={`w-5 h-5 ${iconMap.issues.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Issues</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.issues.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>

//             )}

//             {/* Suggestions */}
//             {data.suggestions && data.suggestions.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.suggestions.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <Lightbulb className={`w-5 h-5 ${iconMap.suggestions.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Suggestions</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.suggestions.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Fixes */}
//             {data.fixes && data.fixes.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden md:col-span-2">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.fixes.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <Code2 className={`w-5 h-5 ${iconMap.fixes.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Fixes</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-4">
//                     {data.fixes.map((fix, i) => (
//                       <li key={i}>
//                         <p className="font-medium text-card-foreground mb-2">{fix.description}</p>
//                         <pre className="bg-slate-950 text-slate-100 text-sm rounded-lg p-4 overflow-x-auto border border-slate-800">
//                           <code>{fix.code}</code>
//                         </pre>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Best Practices */}
//             {data.best_practices && data.best_practices.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.best_practices.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <CheckCircle className={`w-5 h-5 ${iconMap.best_practices.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Best Practices</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.best_practices.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Complexity */}
//             {data.complexity_analysis && data.complexity_analysis.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.complexity_analysis.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <ListTree className={`w-5 h-5 ${iconMap.complexity_analysis.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Complexity</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.complexity_analysis.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Security Concerns */}
//             {data.security_concerns && data.security_concerns.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.security_concerns.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <Shield className={`w-5 h-5 ${iconMap.security_concerns.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Security Concerns</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.security_concerns.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Optimization */}
//             {data.optimization_opportunities && data.optimization_opportunities.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.optimization_opportunities.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <Zap className={`w-5 h-5 ${iconMap.optimization_opportunities.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Optimization</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.optimization_opportunities.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Code Style */}
//             {data.code_style && data.code_style.length > 0 && (
//               <Card className="shadow-md border border-border/50 hover:shadow-lg transition-smooth overflow-hidden">
//                 <CardHeader className={`flex flex-row items-center gap-3 ${iconMap.code_style.bg} border-b border-border/50`}>
//                   <div className={`p-2 rounded-lg bg-white shadow-sm`}>
//                     <FileCode className={`w-5 h-5 ${iconMap.code_style.color}`} />
//                   </div>
//                   <CardTitle className="text-lg font-semibold">Code Style</CardTitle>
//                 </CardHeader>
//                 <CardContent className="pt-4">
//                   <ul className="space-y-2 text-sm text-card-foreground">
//                     {data.code_style.map((item, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-muted-foreground mt-0.5">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// export default Result;

// import { useContext } from "react";
// import { InputContext } from "../context/InputContextProvider";
// import { Spinner } from '@/components/ui/shadcn-io/spinner';
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode, TrendingUp } from "lucide-react";

// function Result() {
//   const { data, loading, responseTime } = useContext(InputContext);

//   const iconMap = {
//     summary: { icon: ListTree, color: "text-blue-600", bg: "bg-blue-50", gradient: "from-blue-500 to-cyan-500" },
//     issues: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", gradient: "from-red-500 to-rose-500" },
//     suggestions: { icon: Lightbulb, color: "text-amber-600", bg: "bg-amber-50", gradient: "from-amber-500 to-yellow-500" },
//     fixes: { icon: Code2, color: "text-emerald-600", bg: "bg-emerald-50", gradient: "from-emerald-500 to-green-500" },
//     best_practices: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", gradient: "from-green-500 to-emerald-500" },
//     complexity_analysis: { icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50", gradient: "from-purple-500 to-pink-500" },
//     security_concerns: { icon: Shield, color: "text-orange-600", bg: "bg-orange-50", gradient: "from-orange-500 to-red-500" },
//     optimization_opportunities: { icon: Zap, color: "text-cyan-600", bg: "bg-cyan-50", gradient: "from-cyan-500 to-blue-500" },
//     code_style: { icon: FileCode, color: "text-indigo-600", bg: "bg-indigo-50", gradient: "from-indigo-500 to-purple-500" },
//   };

//   return (
//     <div className="w-full">
//       {/* Header with Loading State */}
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
//         <div className="flex items-center gap-3">
//           <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl">
//             <ListTree className="w-6 h-6 text-white" />
//           </div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             AI Analysis Results
//           </h2>
//         </div>
//         {loading && (
//           <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
//             <Spinner className="text-blue-600" size={20} />
//             <span className="text-sm font-medium text-blue-600">Analyzing...</span>
//           </div>
//         )}
//       </div>

//       <div className="bg-white rounded-3xl shadow-xl border border-slate-200/60 p-6 lg:p-8">
//         {!loading && responseTime && (
//           <div className="flex justify-end mb-6">
//             <span className="text-sm font-semibold text-slate-600 bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 rounded-full border border-green-200 shadow-sm">
//               ⚡ Generated in {responseTime}
//             </span>
//           </div>
//         )}

//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-16 space-y-4 max-w-2xl mx-auto">
//             <Skeleton className="h-16 w-full rounded-2xl" />
//             <Skeleton className="h-16 w-full rounded-2xl" />
//             <Skeleton className="h-16 w-3/4 rounded-2xl" />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {/* Summary */}
//             {data.summary && data.summary.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.summary.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-blue-500 to-cyan-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.summary.gradient} shadow-lg`}>
//                       <ListTree className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Summary</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.summary.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3 group/item">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold mt-0.5">
//                           {i + 1}
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Issues */}
//             {data.issues && data.issues.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-red-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.issues.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-red-500 to-rose-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.issues.gradient} shadow-lg`}>
//                       <AlertCircle className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Issues</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.issues.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold mt-0.5">
//                           !
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Suggestions */}
//             {data.suggestions && data.suggestions.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-amber-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.suggestions.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-amber-500 to-yellow-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.suggestions.gradient} shadow-lg`}>
//                       <Lightbulb className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Suggestions</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.suggestions.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 text-xs font-bold mt-0.5">
//                           💡
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Fixes */}
//             {data.fixes && data.fixes.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-emerald-300 rounded-2xl overflow-hidden lg:col-span-2">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.fixes.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-emerald-500 to-green-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.fixes.gradient} shadow-lg`}>
//                       <Code2 className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Code Fixes</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-6">
//                     {data.fixes.map((fix, i) => (
//                       <li key={i} className="space-y-3">
//                         <div className="flex items-start gap-2">
//                           <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mt-0.5">
//                             {i + 1}
//                           </span>
//                           <p className="font-semibold text-slate-800">{fix.description}</p>
//                         </div>
//                         <div className="relative group/code">
//                           <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl opacity-20 group-hover/code:opacity-30 blur transition-opacity"></div>
//                           <pre className="relative bg-slate-950 text-slate-100 text-sm rounded-xl p-5 overflow-x-auto border-2 border-slate-800 shadow-xl">
//                             <code>{fix.code}</code>
//                           </pre>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Best Practices */}
//             {data.best_practices && data.best_practices.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-green-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.best_practices.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-green-500 to-emerald-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.best_practices.gradient} shadow-lg`}>
//                       <CheckCircle className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Best Practices</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.best_practices.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold mt-0.5">
//                           ✓
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Complexity Analysis */}
//             {data.complexity_analysis && data.complexity_analysis.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-purple-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.complexity_analysis.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-purple-500 to-pink-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.complexity_analysis.gradient} shadow-lg`}>
//                       <TrendingUp className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Complexity</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.complexity_analysis.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xs font-bold mt-0.5">
//                           📊
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Security Concerns */}
//             {data.security_concerns && data.security_concerns.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-orange-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.security_concerns.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-orange-500 to-red-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.security_concerns.gradient} shadow-lg`}>
//                       <Shield className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Security</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.security_concerns.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xs font-bold mt-0.5">
//                           🛡️
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Optimization */}
//             {data.optimization_opportunities && data.optimization_opportunities.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-cyan-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.optimization_opportunities.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-cyan-500 to-blue-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.optimization_opportunities.gradient} shadow-lg`}>
//                       <Zap className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Optimization</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.optimization_opportunities.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 text-xs font-bold mt-0.5">
//                           ⚡
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}

//             {/* Code Style */}
//             {data.code_style && data.code_style.length > 0 && (
//               <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-indigo-300 rounded-2xl overflow-hidden">
//                 <CardHeader className={`relative overflow-hidden ${iconMap.code_style.bg} border-b-2 border-slate-200`}>
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-10 from-indigo-500 to-purple-500"></div>
//                   <div className="relative flex items-center gap-3">
//                     <div className={`p-3 rounded-xl bg-gradient-to-br ${iconMap.code_style.gradient} shadow-lg`}>
//                       <FileCode className="w-5 h-5 text-white" />
//                     </div>
//                     <CardTitle className="text-lg font-bold text-slate-800">Code Style</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-6">
//                   <ul className="space-y-3">
//                     {data.code_style.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold mt-0.5">
//                           ✨
//                         </span>
//                         <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Result;

// import { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { InputContext } from "../context/InputContextProvider";
// import { Spinner } from '@/components/ui/shadcn-io/spinner';
// import { Skeleton } from "@/components/ui/skeleton";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import CodeEditor from '@uiw/react-textarea-code-editor';
// import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode, TrendingUp } from "lucide-react";

// function Result() {
//   const { data, loading, responseTime } = useContext(InputContext);

//   const iconMap = {
//     summary: { icon: ListTree, color: "text-blue-600", bg: "bg-blue-50", gradient: "from-blue-500 to-cyan-500" },
//     issues: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-50", gradient: "from-red-500 to-rose-500" },
//     suggestions: { icon: Lightbulb, color: "text-amber-600", bg: "bg-amber-50", gradient: "from-amber-500 to-yellow-500" },
//     fixes: { icon: Code2, color: "text-emerald-600", bg: "bg-emerald-50", gradient: "from-emerald-500 to-green-500" },
//     best_practices: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", gradient: "from-green-500 to-emerald-500" },
//     complexity_analysis: { icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50", gradient: "from-purple-500 to-pink-500" },
//     security_concerns: { icon: Shield, color: "text-orange-600", bg: "bg-orange-50", gradient: "from-orange-500 to-red-500" },
//     optimization_opportunities: { icon: Zap, color: "text-cyan-600", bg: "bg-cyan-50", gradient: "from-cyan-500 to-blue-500" },
//     code_style: { icon: FileCode, color: "text-indigo-600", bg: "bg-indigo-50", gradient: "from-indigo-500 to-purple-500" },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="w-full"
//     >
//       {/* Animated Header */}
//       <motion.div
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4"
//       >
//         <div className="flex items-center gap-3">
//           <motion.div
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6 }}
//             className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl"
//           >
//             <ListTree className="w-6 h-6 text-white" />
//           </motion.div>
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             AI Analysis Results
//           </h2>
//         </div>
        
//         <AnimatePresence>
//           {loading && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200"
//             >
//               <Spinner className="text-blue-600" size={20} />
//               <span className="text-sm font-medium text-blue-600">Analyzing...</span>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2 }}
//         className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 p-6 lg:p-8"
//       >
//         {!loading && responseTime && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex justify-end mb-6"
//           >
//             <span className="text-sm font-semibold text-slate-600 bg-gradient-to-r from-green-50 to-emerald-50 px-5 py-2.5 rounded-full border border-green-200 shadow-sm">
//               ⚡ Generated in {responseTime}
//             </span>
//           </motion.div>
//         )}

//         {loading ? (
//           <div className="flex flex-col items-center justify-center py-16 space-y-4 max-w-2xl mx-auto">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
//             />
//             <Skeleton className="h-16 w-full rounded-2xl" />
//             <Skeleton className="h-16 w-full rounded-2xl" />
//             <Skeleton className="h-16 w-3/4 rounded-2xl" />
//           </div>
//         ) : (
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 lg:grid-cols-2 gap-6"
//           >
//             {/* Render all sections with animations */}
//             {Object.entries(data).map(([key, items]) => {
//               if (!items || items.length === 0) return null;
              
//               const config = iconMap[key];
//               if (!config) return null;

//               const IconComponent = config.icon;

//               return (
//                 <motion.div
//                   key={key}
//                   variants={cardVariants}
//                   className={key === 'fixes' ? 'lg:col-span-2' : ''}
//                 >
//                   <Card className="group hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden">
//                     <CardHeader className={`relative overflow-hidden ${config.bg} border-b-2 border-slate-200`}>
//                       <div className={`absolute inset-0 bg-gradient-to-r opacity-10 ${config.gradient}`}></div>
//                       <div className="relative flex items-center gap-3">
//                         <motion.div
//                           whileHover={{ rotate: 12, scale: 1.1 }}
//                           className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient} shadow-lg`}
//                         >
//                           <IconComponent className="w-5 h-5 text-white" />
//                         </motion.div>
//                         <CardTitle className="text-lg font-bold text-slate-800 capitalize">
//                           {key.replace('_', ' ')}
//                         </CardTitle>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-6">
//                       {key === 'fixes' ? (
//                         <ul className="space-y-6">
//                           {items.map((fix, i) => (
//                             <motion.li
//                               key={i}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: i * 0.1 }}
//                               className="space-y-3"
//                             >
//                               <div className="flex items-start gap-2">
//                                 <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold mt-0.5">
//                                   {i + 1}
//                                 </span>
//                                 <p className="font-semibold text-slate-800">{fix.description}</p>
//                               </div>
//                               <motion.div
//                                 whileHover={{ scale: 1.02 }}
//                                 className="relative group/code"
//                               >
//                                 <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl opacity-20 group-hover/code:opacity-30 blur transition-opacity"></div>
//                                 <CodeEditor
//                                   value={fix.code}
//                                   language="javascript"
//                                   readOnly
//                                   style={{
//                                     fontSize: 13,
//                                     backgroundColor: '#0f172a',
//                                     fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
//                                     borderRadius: '0.75rem',
//                                     border: '2px solid rgba(71, 85, 105, 0.8)',
//                                   }}
//                                 />
//                               </motion.div>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       ) : (
//                         <ul className="space-y-3">
//                           {items.map((item, i) => (
//                             <motion.li
//                               key={i}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: i * 0.05 }}
//                               className="flex items-start gap-3"
//                             >
//                               <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full ${config.bg} ${config.color} text-xs font-bold mt-0.5`}>
//                                 {i + 1}
//                               </span>
//                               <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Result;

// import { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { InputContext } from "../context/InputContextProvider";
// import { Spinner } from '@/components/ui/shadcn-io/spinner';
// import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode, TrendingUp, AlertTriangle } from "lucide-react";
// import {Sparkles} from 'lucide-react'

// function Result() {
//   const { data, loading, responseTime } = useContext(InputContext);

//   const iconMap = {
//     summary: { icon: ListTree, gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-500/10", border: "border-blue-500/30" },
//     issues: { icon: AlertCircle, gradient: "from-red-500 to-rose-500", bg: "bg-red-500/10", border: "border-red-500/30" },
//     suggestions: { icon: Lightbulb, gradient: "from-amber-500 to-yellow-500", bg: "bg-amber-500/10", border: "border-amber-500/30" },
//     fixes: { icon: Code2, gradient: "from-emerald-500 to-green-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
//     best_practices: { icon: CheckCircle, gradient: "from-green-500 to-emerald-500", bg: "bg-green-500/10", border: "border-green-500/30" },
//     complexity_analysis: { icon: TrendingUp, gradient: "from-purple-500 to-pink-500", bg: "bg-purple-500/10", border: "border-purple-500/30" },
//     security_concerns: { icon: Shield, gradient: "from-orange-500 to-red-500", bg: "bg-orange-500/10", border: "border-orange-500/30" },
//     optimization_opportunities: { icon: Zap, gradient: "from-cyan-500 to-blue-500", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
//     code_style: { icon: FileCode, gradient: "from-indigo-500 to-purple-500", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { type: "spring", stiffness: 100, damping: 15 }
//     }
//   };

//   return (
//     <div className="h-full flex flex-col bg-slate-900/30 backdrop-blur-xl">
//       {/* Header */}
//       <div className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-xl p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <motion.div
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.5 }}
//               className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg"
//             >
//               <Sparkles className="w-5 h-5 text-white" />
//             </motion.div>
//             <div>
//               <h2 className="text-lg font-bold text-white">AI Analysis</h2>
//               <p className="text-xs text-slate-400">Review results</p>
//             </div>
//           </div>

//           <AnimatePresence>
//             {loading && (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full"
//               >
//                 <Spinner size={16} className="text-blue-400" />
//                 <span className="text-xs font-medium text-blue-300">Analyzing...</span>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {!loading && responseTime && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-3 text-xs text-green-400 flex items-center gap-2"
//           >
//             <Zap className="w-3 h-3" />
//             Generated in {responseTime}
//           </motion.div>
//         )}
//       </div>

//       {/* Results */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//               className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mb-4"
//             />
//             <p className="text-slate-400 text-sm">Analyzing your code...</p>
//           </div>
//         ) : (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
//             className="space-y-4"
//           >
//             {Object.entries(data).map(([key, items]) => {
//               if (!items || items.length === 0) return null;
              
//               const config = iconMap[key];
//               if (!config) return null;

//               const IconComponent = config.icon;

//               return (
//                 <motion.div key={key} variants={cardVariants}>
//                   <div className={`${config.bg} ${config.border} border backdrop-blur-xl rounded-2xl overflow-hidden`}>
//                     {/* Card Header */}
//                     <div className="p-4 border-b border-slate-700/50">
//                       <div className="flex items-center gap-3">
//                         <div className={`p-2 bg-gradient-to-br ${config.gradient} rounded-lg shadow-lg`}>
//                           <IconComponent className="w-4 h-4 text-white" />
//                         </div>
//                         <h3 className="font-bold text-white capitalize text-sm">
//                           {key.replace('_', ' ')}
//                         </h3>
//                         <span className="ml-auto text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
//                           {items.length}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Card Content */}
//                     <div className="p-4">
//                       {key === 'fixes' ? (
//                         <div className="space-y-4">
//                           {items.map((fix, i) => (
//                             <div key={i} className="space-y-2">
//                               <p className="text-sm font-medium text-slate-200">{fix.description}</p>
//                               <pre className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 overflow-x-auto">
//                                 <code className="text-xs text-green-400 font-mono">{fix.code}</code>
//                               </pre>
//                             </div>
//                           ))}
//                         </div>
//                       ) : (
//                         <ul className="space-y-2">
//                           {items.map((item, i) => (
//                             <motion.li
//                               key={i}
//                               initial={{ opacity: 0, x: -10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: i * 0.05 }}
//                               className="flex items-start gap-3 text-sm text-slate-300"
//                             >
//                               <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center text-[10px] font-bold text-white mt-0.5`}>
//                                 {i + 1}
//                               </span>
//                               <span className="leading-relaxed">{item}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Result;


import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InputContext } from "../context/InputContextProvider";
import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree, Zap, FileCode, TrendingUp, Sparkles } from "lucide-react";

function Result() {
  const { data, loading, responseTime } = useContext(InputContext);

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
            className="mt-3 text-xs text-green-400 flex items-center gap-2"
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

