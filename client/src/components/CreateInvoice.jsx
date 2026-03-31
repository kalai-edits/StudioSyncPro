import React from 'react';

export default function CreateInvoice({ onClose }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#111217] border border-gray-800 rounded-[2.5rem] w-full max-w-lg p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 bg-gray-900 rounded-full text-gray-400 hover:text-white flex items-center justify-center transition-all">✕</button>

        <h2 className="text-2xl font-bold text-white mb-2">Create New Invoice</h2>
        <p className="text-sm text-gray-500 mb-8">Generate a new bill for your client.</p>

        <div className="space-y-5">
          {/* Client / Project */}
          <div>
            <label className="text-xs text-gray-500 uppercase font-bold ml-1">Client / Project</label>
            <input type="text" placeholder="e.g. Rahul & Priya - Wedding" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"/>
          </div>

          {/* Amount & Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Amount ($)</label>
              <input type="number" placeholder="e.g. 1500" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all"/>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Invoice Date</label>
              <input type="date" className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-gray-400 transition-all"/>
            </div>
          </div>

          {/* Status & Method */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Status</label>
              <select className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all cursor-pointer">
                <option value="pending">⏳ Pending</option>
                <option value="paid">✅ Paid</option>
                <option value="failed">❌ Failed</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase font-bold ml-1">Payment Method</label>
              <select className="w-full mt-1 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3 outline-none focus:border-cyan-500/50 text-white transition-all cursor-pointer">
                <option value="paypal">PayPal</option>
                <option value="bank">Bank Transfer</option>
                <option value="stripe">Stripe</option>
                <option value="crypto">Crypto</option>
              </select>
            </div>
          </div>
        </div>

        <button 
          onClick={() => { alert("Invoice Created!"); onClose(); }}
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
        >
          + Create Invoice
        </button>
      </div>
    </div>
  );
}