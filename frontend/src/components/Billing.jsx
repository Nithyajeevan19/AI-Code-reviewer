import { CreditCard } from 'lucide-react';

function Billing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Billing
        </h1>
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-slate-200 p-12 text-center backdrop-blur-sm">
          <div className="inline-flex p-4 bg-blue-50 border border-blue-200 rounded-full mb-4">
            <CreditCard className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">Billing Management</h2>
          <p className="text-slate-500 text-base">Your billing information will appear here</p>
        </div>
      </div>
    </div>
  );
}

export default Billing;
