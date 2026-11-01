import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardSummary from './components/DashboardSummary';
import OrderTable from './components/OrderTable';
import OrderForm from './components/OrderForm';
import MemberList from './components/MemberList'; // Memanggil halaman baru

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const [orders, setOrders] = useState([
    { id: '#SBZ-001', name: 'Ahmad Fikri', service: 'Deep Cleaning', status: 'Proses Cuci' },
    { id: '#SBZ-002', name: 'Budi Santoso', service: 'Fast Cleaning', status: 'Selesai' }
  ]);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
    setCurrentPage('table');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="container mx-auto">
        {currentPage === 'dashboard' && <DashboardSummary orders={orders} />}
        {currentPage === 'table' && <OrderTable orders={orders} />}
        {currentPage === 'form' && <OrderForm onAddOrder={handleAddOrder} />}
        {currentPage === 'member' && <MemberList />}
      </main>
    </div>
  );
}