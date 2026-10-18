import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Memanggil library jQuery

// ==========================================
// RUBRIK 2: JAVASCRIPT MURNI
// ==========================================

// 2a. Manipulasi variabel (Array of Object untuk Data Dummy)
const dummyOrders = [
  { id: '#SBZ-001', name: 'Ahmad Fikri', service: 'Deep Cleaning', status: 'Proses Cuci' },
  { id: '#SBZ-002', name: 'Budi Santoso', service: 'Fast Cleaning', status: 'Selesai' },
  { id: '#SBZ-003', name: 'Citra Kirana', service: 'Unyellowing', status: 'Pesanan Baru' },
  { id: '#SBZ-004', name: 'Deni Setiawan', service: 'Deep Cleaning', status: 'Pesanan Baru' }
];

// 2b. Function memproses data (Menghitung jumlah berdasarkan status)
const getCountByStatus = (status) => {
  return dummyOrders.filter(order => order.status === status).length;
};

// --- KOMPONEN NAVIGASI ---
const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Soapboyz Laundry</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:static bg-blue-800 w-full md:w-auto left-0 top-14 p-4 md:p-0 z-10`}>
          <li><button onClick={() => {setPage('dashboard'); setIsOpen(false)}} className={`hover:text-blue-300 ${currentPage === 'dashboard' ? 'font-bold' : ''}`}>Dashboard</button></li>
          <li><button onClick={() => {setPage('table'); setIsOpen(false)}} className={`hover:text-blue-300 ${currentPage === 'table' ? 'font-bold' : ''}`}>Daftar Pesanan</button></li>
          <li><button onClick={() => {setPage('form'); setIsOpen(false)}} className={`hover:text-blue-300 ${currentPage === 'form' ? 'font-bold' : ''}`}>Tambah Pesanan</button></li>
        </ul>
      </div>
    </nav>
  );
};

// --- HALAMAN 1: DASHBOARD ---
const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Ringkasan Operasional</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-gray-500 text-sm">Pesanan Baru</h3>
        {/* Implementasi Function JS menghitung data dummy otomatis */}
        <p className="text-3xl font-bold">{getCountByStatus('Pesanan Baru')}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-gray-500 text-sm">Sedang Dicuci</h3>
        <p className="text-3xl font-bold">{getCountByStatus('Proses Cuci')}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-gray-500 text-sm">Siap Diambil</h3>
        <p className="text-3xl font-bold">{getCountByStatus('Selesai')}</p>
      </div>
    </div>
  </div>
);

// --- HALAMAN 2: TABEL DATA ---
const OrderTable = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Daftar Pesanan</h2>
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
          {/* 2c. Struktur Kendali (Perulangan Map) merender data array secara dinamis */}
          {dummyOrders.map((order, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
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
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- HALAMAN 3: FORMULIR ---
const AddOrderForm = () => {

  // ==========================================
  // RUBRIK 3: JQUERY (Event Handling & Efek)
  // ==========================================
  useEffect(() => {
    // 3b: Event Handling click & 3a: Animasi slideToggle jQuery
    $('#btn-toggle-form').on('click', function() {
      $('#form-container').slideToggle('fast');
    });

    // 3b: Event Handling submit (Validasi Sederhana Form)
    $('#form-tambah').on('submit', function(e) {
      e.preventDefault(); // Mencegah reload halaman
      
      const namaVal = $('#input-nama').val();
      
      // Validasi field nama kosong
      if (namaVal === '') {
        // 3a: Efek animasi fadeIn/fadeOut jQuery untuk notifikasi
        $('#notif-error').fadeIn().delay(2000).fadeOut();
      } else {
        $('#notif-sukses').fadeIn().delay(2000).fadeOut();
        $('#input-nama').val(''); // Kosongkan inputan setelah sukses
      }
    });

    return () => {
      $('#btn-toggle-form').off('click');
      $('#form-tambah').off('submit');
    };
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4 max-w-lg">
        <h2 className="text-2xl font-bold">Tambah Pesanan</h2>
        <button id="btn-toggle-form" className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded hover:bg-gray-300 transition-colors">
          Tampil/Sembunyikan Form
        </button>
      </div>

      {/* Area Notifikasi jQuery */}
      <div id="notif-error" className="hidden bg-red-500 text-white p-3 rounded mb-4 max-w-lg shadow">
        Kolom Nama Pelanggan tidak boleh kosong!
      </div>
      <div id="notif-sukses" className="hidden bg-green-500 text-white p-3 rounded mb-4 max-w-lg shadow">
        Pesanan berhasil divalidasi (Data dummy disubmit)!
      </div>

      <div id="form-container" className="bg-white p-6 rounded-lg shadow max-w-lg">
        <form id="form-tambah">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nama Pelanggan</label>
            <input id="input-nama" type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan nama..." />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Merek Sepatu</label>
            <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Contoh: Nike, Adidas..." />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Pilih Layanan</label>
            <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Fast Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Unyellowing</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Kirim Pesanan</button>
        </form>
      </div>
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="container mx-auto">
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'table' && <OrderTable />}
        {currentPage === 'form' && <AddOrderForm />}
      </main>
    </div>
  );
}