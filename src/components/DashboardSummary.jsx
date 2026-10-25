import React from 'react';

export default function DashboardSummary({ orders }) {
  const pesananBaru = orders.filter(o => o.status === 'Pesanan Baru').length;
  const sedangDicuci = orders.filter(o => o.status === 'Proses Cuci').length;
  const selesai = orders.filter(o => o.status === 'Selesai').length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ringkasan Operasional</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm">Pesanan Baru</h3>
          <p className="text-3xl font-bold">{pesananBaru}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm">Sedang Dicuci</h3>
          <p className="text-3xl font-bold">{sedangDicuci}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm">Siap Diambil</h3>
          <p className="text-3xl font-bold">{selesai}</p>
        </div>
      </div>
    </div>
  );
}