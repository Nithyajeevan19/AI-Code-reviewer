import { useContext} from 'react';
import { InputContext } from '../context/InputContextProvider';


function CodeInput() {
    const { code, language, setCode, setLanguage,handleSubmit,format,tone,setTone,setFormat} = useContext(InputContext);

    const handleClick=()=>{ 
        handleSubmit()
    }

    return (
    <>
<<<<<<< HEAD
        <div className="max-w-5xl mx-auto p-6 mt-5 w-full">
=======
        <div className="max-w-4xl mx-auto p-6 mt-5 w-full">
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6

                <div className="flex justify-between items-center border-b pb-4 border-gray-300">
                    <div className="flex items-center gap-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-600"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                        />
                        </svg>
                        <h1 className="text-lg font-bold">Code Input</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="cpp">C++</option>
                            <option value="typescript">TypeScript</option>
                            <option value="ruby">Ruby</option>
                            <option value="go">Go</option>
                            <option value="c">C</option>
                            <option value="perl">Perl</option>
                            <option value="rust">Rust</option>
                            <option value="dart">Dart</option>
                        </select>
                        </div>
                    </div>
                </div>
                
                {/* ===== Format & Tone controls (new, simple) ===== */}
                <div className="flex items-center gap-3 mt-5">
                    <div className="flex items-center gap-2 mr-8">
                        <span className="text-sm text-gray-600 mr-5">Format</span>
                        <div className="flex gap-1">
                            <button
                                type="button"
                                onClick={() => setFormat('brief')}
                                className={`px-2 py-1 rounded-full text-sm border ${format === 'brief' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                aria-pressed={format === 'brief'}
                            >
                                Brief
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormat('bullets')}
                                className={`px-2 py-1 rounded-full text-sm border ${format === 'bullets' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                aria-pressed={format === 'bullets'}
                            >
                                Bullets
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormat('steps')}
                                className={`px-2 py-1 rounded-full text-sm border ${format === 'steps' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                aria-pressed={format === 'steps'}
                            >
                                Step-by-step
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormat('code-first')}
                                className={`px-2 py-1 rounded-full text-sm border ${format === 'code-first' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                                aria-pressed={format === 'code-first'}
                            >
                                Code-first
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 ml-8">
                        <label className="text-sm text-gray-600 mr-5">Tone</label>
                        <select
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="border rounded px-2 py-1 text-sm focus:outline-none"
                        >
                        <option value="concise">Concise</option>
                        <option value="detailed">Detailed</option>
                        <option value="beginner">Beginner</option>
                        <option value="formal">Formal</option>
                        </select>
                    </div>
                </div>
                {/* ===== end Format & Tone controls ===== */}

            
                <div className="mt-6">
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-80 p-4 border rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Paste your code here for analysis..."
                    />
                </div>

                <button
                    className="mt-4 mb-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white px-4 py-2 rounded"
                    onClick={handleClick}
                >
                    Analyze Code
                </button>

        </div>
    </>
  )
}


export default CodeInput