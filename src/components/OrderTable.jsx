import React from 'react';
import OrderItem from './OrderItem';

export default function OrderTable({ orders }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Pesanan</h2>
      
      {/* Rubrik 5c: Conditional Rendering jika data kosong */}
      {orders.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500 italic">
          Belum ada data Pesanan
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-4">ID Pesanan</th>
                <th className="p-4">Pelanggan</th>
                <th className="p-4">Layanan</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Rubrik 5a: Render List menggunakan .map() dan key unik */}
              {orders.map((order) => (
                <OrderItem key={order.id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}