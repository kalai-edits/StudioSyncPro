import React, { useState } from 'react';
import MsgLayout from '../../layout/MsgLayout';
import CreateInvoice from '../../components/CreateInvoice';


const transactions = [
  { id: "#TRX001", client: "Rahul & Priya", project: "Wedding Teaser", date: "Mar 15, 2026", amount: "$1,200", status: "Paid", method: "PayPal" },
  { id: "#TRX002", client: "Zoho Corp", project: "Corporate Promo", date: "Mar 12, 2026", amount: "$2,500", status: "Pending", method: "Bank Transfer" },
  { id: "#TRX003", client: "Arjun Music", project: "Indie Album", date: "Mar 10, 2026", amount: "$800", status: "Paid", method: "Stripe" },
  { id: "#TRX004", client: "Luxury Homes", project: "Real Estate Tour", date: "Mar 05, 2026", amount: "$1,500", status: "Failed", method: "Credit Card" },
];

export default function Payments() {

  const [ createInv , setCreateInv ] = useState(false)
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-6 md:p-10 text-white">
       <MsgLayout/>

      {/* HEADER -  Mobile Screen Display flex Col */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 mt-10">
        <h1 className="text-3xl font-bold">Payments & Invoices</h1>
        <button onClick={ ()=>{setCreateInv(true)}} className="bg-green-500 hover:bg-green-400 text-black font-bold py-2.5 px-6 rounded-2xl transition-all flex items-center gap-2">
          <span>+</span> Create Invoice
        </button>
      </div>

      {/* PAYMENT STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-[2.5rem]">
          <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
          <h2 className="text-3xl font-bold text-green-400">$7,50,000</h2>
        </div>
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-[2.5rem]">
          <p className="text-gray-500 text-sm mb-1">Pending Invoices</p>
          <h2 className="text-3xl font-bold text-yellow-400">$1,00,100</h2>
        </div>
        <div className="bg-[#111217] border border-gray-800 p-6 rounded-[2.5rem]">
          <p className="text-gray-500 text-sm mb-1">Tax Estimated</p>
          <h2 className="text-3xl font-bold text-gray-300">$3,150.00</h2>
        </div>
      </div>

      {/* TRANSACTIONS TABLE */}
      <div className="bg-[#111217] border border-gray-800 rounded-[2.5rem] overflow-hidden">
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold mb-6">Recent Transactions</h3>
          
          {/*  Scrollable Div */}
          <div className="overflow-x-auto w-full pb-4">
           
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="text-gray-500 text-xs uppercase border-b border-gray-800">
                  <th className="pb-4 pr-4 whitespace-nowrap">Transaction ID</th>
                  <th className="pb-4 pr-4 whitespace-nowrap">Client / Project</th>
                  <th className="pb-4 pr-4 whitespace-nowrap">Date</th>
                  <th className="pb-4 pr-4 whitespace-nowrap">Amount</th>
                  <th className="pb-4 pr-4 whitespace-nowrap">Status</th>
                  <th className="pb-4 text-right whitespace-nowrap">Method</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {transactions.map((trx) => (
                  <tr key={trx.id} className="border-b border-gray-800/50 hover:bg-white/0.02 transition-all">
                    <td className="py-5 pr-4 text-sm font-mono text-cyan-400 whitespace-nowrap">{trx.id}</td>
                    <td className="py-5 pr-4 whitespace-nowrap">
                      <div className="text-sm font-bold">{trx.client}</div>
                      <div className="text-[10px] text-gray-500">{trx.project}</div>
                    </td>
                    <td className="py-5 pr-4 text-sm whitespace-nowrap">{trx.date}</td>
                    <td className="py-5 pr-4 text-sm font-bold text-white whitespace-nowrap">{trx.amount}</td>
                    <td className="py-5 pr-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                        trx.status === 'Paid' ? 'bg-green-500/10 text-green-500' : 
                        trx.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'
                      }`}>
                        {trx.status}
                      </span>
                    </td>
                    <td className="py-5 text-sm text-right text-gray-500 whitespace-nowrap">{trx.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
      { createInv &&  (
        
        <CreateInvoice onClose={()=>{setCreateInv(false)}}/>
      )}
    </div>
  );
}