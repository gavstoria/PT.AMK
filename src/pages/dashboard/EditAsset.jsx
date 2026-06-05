import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Save } from 'lucide-react';
import '../../components/SharedUI.css';

const EditAsset = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Dummy state to simulate fetching data based on id
  const [assetData, setAssetData] = useState({
    name: 'USG Machine Voluson E8',
    sn: 'SN-987654321',
    condition: 'lama',
    category: 'medis',
    room: 'radiologi',
    description: 'Kondisi masih baik, servis terakhir 2 bulan lalu.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/assets');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Edit Aset {id ? `(${id})` : ''}</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nama Aset</label>
              <input type="text" name="name" value={assetData.name} onChange={handleChange} className="form-control" placeholder="Masukkan nama aset" required />
            </div>
            <div className="form-group">
              <label>Nomor Seri / SN</label>
              <input type="text" name="sn" value={assetData.sn} onChange={handleChange} className="form-control" placeholder="Masukkan nomor seri" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Kondisi Aset</label>
              <select name="condition" value={assetData.condition} onChange={handleChange} className="form-control" required>
                <option value="" disabled>Pilih Kondisi</option>
                <option value="baru">Barang Baru</option>
                <option value="lama">Barang Lama</option>
              </select>
            </div>
            <div className="form-group">
              <label>Kategori Aset</label>
              <select name="category" value={assetData.category} onChange={handleChange} className="form-control" required>
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
              <select name="room" value={assetData.room} onChange={handleChange} className="form-control" required>
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
            <textarea name="description" value={assetData.description} onChange={handleChange} className="form-control" placeholder="Tuliskan spesifikasi atau catatan tambahan"></textarea>
          </div>

          <div className="form-actions">
            <Link to="/dashboard/assets" className="btn-outline">Batal</Link>
            <button type="submit" className="btn-primary">
              <Save size={18} /> Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAsset;
