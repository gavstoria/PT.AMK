import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import '../../components/SharedUI.css';

const AddAsset = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/assets');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Tambah Aset</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nama Aset</label>
              <input type="text" className="form-control" placeholder="Masukkan nama aset" required />
            </div>
            <div className="form-group">
              <label>Nomor Seri / SN</label>
              <input type="text" className="form-control" placeholder="Masukkan nomor seri" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Kondisi Aset</label>
              <select className="form-control" required defaultValue="">
                <option value="" disabled>Pilih Kondisi</option>
                <option value="baru">Barang Baru</option>
                <option value="lama">Barang Lama</option>
              </select>
            </div>
            <div className="form-group">
              <label>Kategori Aset</label>
              <select className="form-control" required>
                <option value="">Pilih Kategori</option>
                <option value="medis">Alat Medis</option>
                <option value="non-medis">Non-Medis</option>
                <option value="fasilitas">Fasilitas / Furnitur</option>
                <option value="it">Perangkat IT</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Ruangan / Lokasi Awal</label>
              <select className="form-control" required>
                <option value="">Pilih Ruangan</option>
                <option value="igd">IGD</option>
                <option value="radiologi">Ruang Radiologi</option>
                <option value="operasi">Ruang Operasi</option>
                <option value="rawat-inap">Kamar Rawat Inap</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label>Deskripsi Tambahan</label>
            <textarea className="form-control" placeholder="Tuliskan spesifikasi atau catatan tambahan"></textarea>
          </div>

          <div className="form-actions">
            <Link to="/dashboard/assets" className="btn-outline">Batal</Link>
            <button type="submit" className="btn-primary">
              <Save size={18} /> Simpan Aset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
