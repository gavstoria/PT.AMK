import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Search, Eye, Check } from 'lucide-react';
import '../../components/SharedUI.css';

const dummyMutations = [
  { id: 'MUT-001', asset: 'AST-005 (Bed Pasien)', from: 'Kamar Mawar 101', to: 'Kamar Melati 202', date: '11 Mei 2026', pic: 'Ns. Ratna', status: 'Selesai' },
  { id: 'MUT-002', asset: 'AST-001 (USG Machine)', from: 'Radiologi 1', to: 'Radiologi 2', date: '12 Mei 2026', pic: 'Dr. Hendra', status: 'Menunggu Persetujuan' },
  { id: 'MUT-003', asset: 'AST-003 (Kursi Roda)', from: 'Lobi Utama', to: 'IGD', date: '12 Mei 2026', pic: 'Petugas Keamanan', status: 'Proses Pindah' },
];

const Mutation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Mutasi & Pemindahan Aset</h1>
        <Link to="/dashboard/mutation/add" className="btn-primary">
          <RefreshCw size={18} /> Ajukan Mutasi Baru
        </Link>
      </div>

      <div className="card">
        <div className="table-controls">
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Cari ID mutasi atau aset..." 
              style={{ paddingLeft: '2rem' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID Mutasi</th>
                <th>Aset Terkait</th>
                <th>Lokasi Asal</th>
                <th>Lokasi Tujuan</th>
                <th>Tanggal Pengajuan</th>
                <th>Penanggung Jawab</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyMutations.map(mut => (
                <tr key={mut.id}>
                  <td style={{ fontWeight: 500 }}>{mut.id}</td>
                  <td>{mut.asset}</td>
                  <td>{mut.from}</td>
                  <td>{mut.to}</td>
                  <td>{mut.date}</td>
                  <td>{mut.pic}</td>
                  <td>
                    <span className={`badge ${
                      mut.status === 'Selesai' ? 'badge-success' : 
                      mut.status === 'Proses Pindah' ? 'badge-primary' : 'badge-warning'
                    }`}>
                      {mut.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn" title="Detail Mutasi"><Eye size={16} /></button>
                    {mut.status === 'Menunggu Persetujuan' && (
                      <button className="action-btn" title="Setujui Mutasi"><Check size={16} color="var(--success)" /></button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mutation;
