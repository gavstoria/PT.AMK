import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, QrCode } from 'lucide-react';
import '../../components/SharedUI.css';

const dummyAssets = [
  { id: 'AST-001', name: 'USG Machine Voluson E8', category: 'Alat Medis', room: 'Ruang Radiologi 1', condition: 'Baik' },
  { id: 'AST-002', name: 'Patient Monitor B40', category: 'Alat Medis', room: 'IGD Bed 3', condition: 'Rusak' },
  { id: 'AST-003', name: 'Kursi Roda Standar', category: 'Non-Medis', room: 'Lobi Utama', condition: 'Baik' },
  { id: 'AST-004', name: 'Defibrillator Zoll', category: 'Alat Medis', room: 'Ruang Operasi 2', condition: 'Pemeliharaan' },
  { id: 'AST-005', name: 'Bed Pasien Elektrik', category: 'Fasilitas', room: 'Kamar Mawar 101', condition: 'Baik' },
];

const Assets = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Data Aset Medis</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/dashboard/assets/add?type=baru" className="btn-primary">
            <Plus size={18} /> Tambah Barang Baru
          </Link>
          <Link to="/dashboard/assets/add?type=lama" className="btn-outline" style={{ backgroundColor: 'white' }}>
            <Plus size={18} /> Tambah Barang Lama
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="table-controls">
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Cari nama aset atau ID..." 
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
                <th>ID Aset</th>
                <th>Nama Aset</th>
                <th>Kategori</th>
                <th>Ruangan/Lokasi</th>
                <th>Kondisi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyAssets.map(asset => (
                <tr key={asset.id}>
                  <td style={{ fontWeight: 500 }}>{asset.id}</td>
                  <td>{asset.name}</td>
                  <td>{asset.category}</td>
                  <td>{asset.room}</td>
                  <td>
                    <span className={`badge ${
                      asset.condition === 'Baik' ? 'badge-success' : 
                      asset.condition === 'Rusak' ? 'badge-danger' : 'badge-warning'
                    }`}>
                      {asset.condition}
                    </span>
                  </td>
                  <td>
                    <Link to={`/dashboard/assets/edit/${asset.id}`} className="action-btn" title="Edit"><Edit2 size={16} /></Link>
                    <button className="action-btn" title="Cetak QR"><QrCode size={16} /></button>
                    <button className="action-btn" title="Hapus"><Trash2 size={16} color="var(--danger)" /></button>
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

export default Assets;
