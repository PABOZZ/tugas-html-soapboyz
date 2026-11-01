import React, { useState } from 'react';

export default function Navbar({ currentPage, setPage }) {
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
          <li><button onClick={() => {setPage('member'); setIsOpen(false)}} className={`hover:text-blue-300 ${currentPage === 'member' ? 'font-bold' : ''}`}>Daftar Member</button></li>
        </ul>
      </div>
    </nav>
  );
}