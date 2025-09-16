import Header from "./Header";
import CodeInput from "./CodeInput";
import Result from "./Result";
import Sidebar from "./SideBar";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <Header/>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <CodeInput />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Home;