import React, { useState, useEffect } from 'react';

export default function MemberList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setMembers(data.slice(0, 6)); // Ambil 6 data member saja
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Daftar Member Loyal (Data API)</h2>
      
      {loading && (
        <div className="bg-blue-100 text-blue-800 p-4 rounded text-center animate-pulse shadow">
          Sedang memuat data member...
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 p-6 rounded text-center shadow border-l-4 border-red-500">
          <p className="font-bold text-lg mb-2">Gagal mengambil data</p>
          <p className="mb-4 text-sm">{error}</p>
          <button 
            onClick={fetchMembers}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && members.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map(member => (
            <div key={member.id} className="bg-white p-4 rounded shadow border-t-4 border-blue-500 hover:shadow-md transition">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">📧 {member.email}</p>
              <p className="text-gray-600 text-sm">📍 {member.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}