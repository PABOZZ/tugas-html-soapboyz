import React, { useState } from 'react';

export default function OrderForm({ onAddOrder }) {
  const [nama, setNama] = useState('');
  const [layanan, setLayanan] = useState('Fast Cleaning');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama) {
      alert("Nama Pelanggan tidak boleh kosong!");
      return;
    }
    // Membuat data pesanan baru
    const newOrder = {
      id: `#SBZ-${Math.floor(Math.random() * 1000)}`,
      name: nama,
      service: layanan,
      status: 'Pesanan Baru'
    };
    
    onAddOrder(newOrder); // Kirim ke App.jsx
    setNama(''); // Kosongkan form setelah submit
    alert("Pesanan berhasil ditambahkan!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Pesanan Baru</h2>
      <div className="bg-white p-6 rounded-lg shadow max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nama Pelanggan</label>
            <input 
              type="text" 
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Masukkan nama..." 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Pilih Layanan</label>
            <select 
              value={layanan}
              onChange={(e) => setLayanan(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Fast Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Unyellowing</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
            Simpan Pesanan
          </button>
        </form>
      </div>
    </div>
  );
}