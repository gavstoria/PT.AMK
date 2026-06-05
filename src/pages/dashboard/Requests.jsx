import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Eye, Edit } from 'lucide-react';
import '../../components/SharedUI.css';

const dummyRequests = [
  { id: 'REQ-001', unit: 'IGD', item: 'Kursi Roda Bariatrik', qty: 2, reason: 'Penambahan kapasitas', status: 'Pending' },
  { id: 'REQ-002', unit: 'Radiologi', item: 'Lead Apron', qty: 5, reason: 'Penggantian rusak', status: 'Disetujui' },
  { id: 'REQ-003', unit: 'Farmasi', item: 'Kulkas Vaksin', qty: 1, reason: 'Kulkas lama rusak', status: 'Ditolak' },
];

const Requests = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Permintaan Aset Baru</h1>
        <Link to="/dashboard/requests/add" className="btn-primary">
          <Plus size={18} /> Buat Pengajuan Baru
        </Link>
      </div>

      <div className="card">
        <div className="table-controls">
          <div style={{ position: 'relative' }}>
            <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Cari ID pengajuan atau unit..." 
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
                <th>ID Pengajuan</th>
                <th>Unit Kerja</th>
                <th>Nama Barang</th>
                <th>Jumlah</th>
                <th>Alasan</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyRequests.map(req => (
                <tr key={req.id}>
                  <td style={{ fontWeight: 500 }}>{req.id}</td>
                  <td>{req.unit}</td>
                  <td>{req.item}</td>
                  <td>{req.qty}</td>
                  <td>{req.reason}</td>
                  <td>
                    <span className={`badge ${
                      req.status === 'Disetujui' ? 'badge-success' : 
                      req.status === 'Ditolak' ? 'badge-danger' : 'badge-warning'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn" title="Lihat Detail"><Eye size={16} /></button>
                    <button className="action-btn" title="Edit Pengajuan" style={{ color: 'var(--primary)' }}><Edit size={16} /></button>
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

export default Requests;
