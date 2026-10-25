import React from 'react';

export default function OrderItem({ order }) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">{order.id}</td>
      <td className="p-4">{order.name}</td>
      <td className="p-4">{order.service}</td>
      <td className="p-4">
        <span className={`py-1 px-3 rounded-full text-xs ${
          order.status === 'Selesai' ? 'bg-green-200 text-green-800' :
          order.status === 'Proses Cuci' ? 'bg-yellow-200 text-yellow-800' :
          'bg-blue-200 text-blue-800'
        }`}>
          {order.status}
        </span>
      </td>
    </tr>
  );
}