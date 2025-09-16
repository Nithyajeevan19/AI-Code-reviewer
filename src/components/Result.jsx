import { useContext } from "react";
import { InputContext } from "../context/InputContextProvider.jsx";
import { Spinner } from '@/components/ui/shadcn-io/spinner';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree } from "lucide-react";

function Result() {
const { data ,loading,responseTime,setResponseTime} = useContext(InputContext);

  return (
    <>
        <div className="max-w-5xl mx-auto p-6 mt-6  border-gray-300 w-250">

            <div className="flex flex-row justify-between">
                <h2 className="text-lg font-bold mb-4">AI Analysis</h2>
                {loading?<Spinner className="text-blue-500" size={30} />:null}
            </div>

            <div className="bg-white p-4 rounded shadow-sm border border-gray-200 space-y-4">

                <div className="flex flex-row justify-end">
                    {!loading?<p className="font-semibold text-gray-400">response generated in {responseTime}</p>:null}     
                </div>

               {loading?
                <div className="flex flex-row justify-center">
                        <Box sx={{ width: 600 }}>
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                        </Box>
                    </div>

                    :
                    
                    // <div>
                    //     {data &&data.summary.length>0? (  
                    //     <div>
                    //         <div className="border shadow-xl/10 p-4 rounded-lg m-3">
                    //             <h3 className="font-semibold text-blue-600">Summary</h3>
                    //             <p className="text-gray-700">{data.summary}</p>
                    //         </div>
                    //         <div className="border shadow-xl/10 p-4 rounded-lg m-3">
                    //             <h3 className="font-semibold text-red-600">Issues</h3>
                    //             <ul className="list-disc list-inside text-gray-700">
                    //                 {data.issues?.map((issue, i) => (
                    //                 <li key={i}>{issue}</li>
                    //                 ))}
                    //             </ul>
                    //         </div>
                    //         <div className="border shadow-xl/10 p-4 rounded-lg m-3">
                    //             <h3 className="font-semibold text-yellow-600">Suggestions</h3>
                    //             <ul className="list-disc list-inside text-gray-700">
                    //                 {data.suggestions?.map((sug, i) => (
                    //                 <li key={i}>{sug}</li>
                    //                 ))}
                    //             </ul>
                    //         </div>
                    //         <div className="border shadow-xl/10 p-4 rounded-lg m-3">
                    //             <h3 className="font-semibold text-green-600">Example Fixes</h3>
                    //             <ul className="list-disc list-inside text-gray-700">
                    //                 {data.fixes?.map((fix, i) => (
                    //                 <li key={i}>
                    //                     <p className="font-medium">{fix.description}</p>
                    //                     <p className="bg-gray-100 p-2 rounded text-sm font-mono">
                    //                     {fix.code}
                    //                     </p>
                    //                 </li>
                    //                 ))}
                    //             </ul>
                    //         </div>


                        
                    //         <div className="border shadow-xl/10 p-4 rounded-lg m-3">
                    //             <h3 className="text-green-800 text-lg ">Best Practises you can do:</h3>
                    //             <ul className="list-disc list-inside text-gray-900">
                    //                 {data.best_practices.map((each,i)=>{
                    //                     return <li key={i}>{each}</li>
                    //                 })}
                    //             </ul>
                    //         </div>
                    // </div>):(
                    //         <p className="text-gray-500">
                    //             No analysis available. Please input code and submit for analysis.
                    //         </p>
                    //         )
                    //     }
                    // </div>

                    <div className="grid grid-cols-2 gap-4">
                    {data.summary && data.summary.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <ListTree className="w-5 h-5 text-blue-600" />
                            <CardTitle className="text-lg">Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.summary.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Issues */}
                    {data.issues && data.issues.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <CardTitle className="text-lg">Issues</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.issues.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Suggestions */}
                    {data.suggestions && data.suggestions.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-600" />
                            <CardTitle className="text-lg">Suggestions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.suggestions.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Fixes */}
                    {data.fixes && data.fixes.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Code2 className="w-5 h-5 text-green-600" />
                            <CardTitle className="text-lg">Fixes</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                            {data.fixes.map((fix, i) => (
                                <li key={i}>
                                <p className="font-medium">{fix.description}</p>
                                <pre className="bg-gray-900 text-white text-sm rounded-lg p-3 mt-1 overflow-x-auto">
                                    <code>{fix.code}</code>
                                </pre>
                                </li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Best Practices */}
                    {data.best_practices && data.best_practices.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                            <CardTitle className="text-lg">Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.best_practices.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Complexity */}
                    {data.complexity_analysis && data.complexity_analysis.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <ListTree className="w-5 h-5 text-purple-600" />
                            <CardTitle className="text-lg">Complexity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.complexity_analysis.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Security Concerns */}
                    {data.security_concerns && data.security_concerns.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                        <CardHeader className="flex flex-row items-center gap-2">
                            <Shield className="w-5 h-5 text-orange-600" />
                            <CardTitle className="text-lg">Security Concerns</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {data.security_concerns.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                            </ul>
                        </CardContent>
                        </Card>
                    )}

                    {/* Optimization */}
                    {data.optimization_opportunities &&
                        data.optimization_opportunities.length > 0 && (
                        <Card className="shadow-md border border-gray-200">
                            <CardHeader className="flex flex-row items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-cyan-600" />
                            <CardTitle className="text-lg">Optimization</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {data.optimization_opportunities.map((item, i) => (
                                <li key={i}>{item}</li>
                                ))}
                            </ul>
                            </CardContent>
                        </Card>
                        )}

                        {/* Code Style */}
                        {data.code_style && data.code_style.length > 0 && (
                            <Card className="shadow-md border border-gray-200">
                            <CardHeader className="flex flex-row items-center gap-2">
                                <Code2 className="w-5 h-5 text-gray-700" />
                                <CardTitle className="text-lg">Code Style</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {data.code_style.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                </ul>
                            </CardContent>
                            </Card>
                        )}
                
                    </div>
                }

            </div>

        </div>
    </>
  );
}

export default Result


// import { useContext } from "react";
// import { InputContext } from "../context/InputContextProvider";
// import { Spinner } from "@/components/ui/shadcn-io/spinner";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { AlertCircle, CheckCircle, Lightbulb, Code2, Shield, ListTree } from "lucide-react";

// function Result() {
//   const { data, loading, responseTime } = useContext(InputContext);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center p-6">
//         <Spinner className="text-blue-500" size={40} />
//       </div>
//     );
//   }

//   if (!data || !data.summary?.length) {
//     return (
//       <div className="max-w-4xl mx-auto p-6 text-gray-500">
//         No analysis available. Please input code and submit.
//       </div>
//     );
//   }

//   const sections = [
//     { title: "Summary", key: "summary", icon: ListTree, color: "text-blue-600" },
//     { title: "Issues", key: "issues", icon: AlertCircle, color: "text-red-600" },
//     { title: "Suggestions", key: "suggestions", icon: Lightbulb, color: "text-yellow-600" },
//     { title: "Fixes", key: "fixes", icon: Code2, color: "text-green-600" },
//     { title: "Best Practices", key: "best_practices", icon: CheckCircle, color: "text-emerald-600" },
//     { title: "Complexity", key: "complexity_analysis", icon: ListTree, color: "text-purple-600" },
//     { title: "Security Concerns", key: "security_concerns", icon: Shield, color: "text-orange-600" },
//     { title: "Optimization", key: "optimization_opportunities", icon: Lightbulb, color: "text-cyan-600" },
//     { title: "Code Style", key: "code_style", icon: Code2, color: "text-gray-700" },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold text-gray-800">AI Analysis</h2>
//         <p className="text-sm text-gray-500">Generated in {responseTime}</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {sections.map(({ title, key, icon: Icon, color }) => {
//           const value = data[key];
//           if (!value || value.length === 0) return null;

//           return (
//             <Card key={key} className="shadow-md border border-gray-200">
//               <CardHeader className="flex flex-row items-center gap-2">
//                 <Icon className={`w-5 h-5 ${color}`} />
//                 <CardTitle className="text-lg">{title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {key === "fixes" ? (
//                   <ul className="space-y-4">
//                     {value.map((fix, i) => (
//                       <li key={i}>
//                         <p className="font-medium">{fix.description}</p>
//                         <pre className="bg-gray-900 text-white text-sm rounded-lg p-3 mt-1 overflow-x-auto">
//                           <code>{fix.code}</code>
//                         </pre>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <ul className="list-disc list-inside space-y-1 text-gray-700">
//                     {value.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 )}
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Result;

