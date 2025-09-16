// Sidebar.jsx
import { useContext } from "react";
import { InputContext } from "../context/InputContextProvider";

function Sidebar() {
  const { history,setCode,setData} = useContext(InputContext);
  return (
    <div className="w-70 bg-gray-400 text-white flex flex-col min-h-screen">
      <div className="p-4  border-gray-700 mt-8">
        <button
          className="w-full bg-indigo-500 px-3 py-2 rounded text-sm font-medium"

          onClick={() => {setCode('')}}

        >
          + New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {history.length === 0 ? (
          <p className="text-gray-400 text-sm">No history yet</p>
        ) : (
          history.map((item) => (
            <button
              key={item.id}
              className="w-150 text-left p-2 rounded hover:bg-gray-700 text-sm truncate"
              onClick={() => {
                setCode(item.orginalCode); 
                setData(item.data)
                }}
            >
              {item.title}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;