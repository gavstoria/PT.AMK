import React from 'react';
import { Link } from 'react-router-dom';
import { Package, AlertTriangle, ClipboardList, RefreshCw, Clock } from 'lucide-react';
import './DashboardHome.css';

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h2>Selamat Datang, Admin</h2>
          <p>Kelola dan pantau seluruh aset rumah sakit secara efektif, cepat, dan terintegrasi.</p>
          <button className="btn-secondary">Lihat Laporan Bulanan</button>
        </div>
        <img src="/doctor-hero.png" alt="Doctor" className="hero-image" />
      </section>

      {/* Summary Cards */}
      <section className="summary-cards">
        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#e0e7ff', color: '#4f46e5' }}>
            <Package size={24} />
          </div>
          <div className="summary-info">
            <span className="summary-label">Total Aset</span>
            <span className="summary-value">1,248</span>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>
            <AlertTriangle size={24} />
          </div>
          <div className="summary-info">
            <span className="summary-label">Perbaikan Aktif</span>
            <span className="summary-value">12</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#fef3c7', color: '#f59e0b' }}>
            <ClipboardList size={24} />
          </div>
          <div className="summary-info">
            <span className="summary-label">Permintaan Tertunda</span>
            <span className="summary-value">5</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon" style={{ background: '#d1fae5', color: '#10b981' }}>
            <RefreshCw size={24} />
          </div>
          <div className="summary-info">
            <span className="summary-label">Mutasi Bulan Ini</span>
            <span className="summary-value">34</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="dashboard-main-grid">
        {/* Aktivitas Terbaru */}
        <div className="content-card">
          <div className="card-title">
            <span>Aktivitas Terbaru</span>
            <Link to="/dashboard/mutation" className="view-all">Lihat Semua</Link>
          </div>
          
          <div className="activity-list">
            <div className="activity-item">
              <RefreshCw className="activity-icon" size={20} />
              <div className="activity-details">
                <h4>Mutasi Aset: Bed Pasien</h4>
                <p>Dipindahkan dari Kamar Mawar 101 ke Kamar Melati 202 oleh Ns. Ratna.</p>
                <span className="activity-time"><Clock size={12} style={{display:'inline', marginRight:'4px'}}/> Hari ini, 09:30 WIB</span>
              </div>
            </div>

            <div className="activity-item">
              <AlertTriangle className="activity-icon" size={20} style={{ color: '#ef4444' }} />
              <div className="activity-details">
                <h4>Laporan Kerusakan: Patient Monitor B40</h4>
                <p>Dilaporkan oleh Ns. Siti. Masalah: Layar bergaris saat dinyalakan.</p>
                <span className="activity-time"><Clock size={12} style={{display:'inline', marginRight:'4px'}}/> Kemarin, 14:15 WIB</span>
              </div>
            </div>

            <div className="activity-item">
              <ClipboardList className="activity-icon" size={20} style={{ color: '#f59e0b' }} />
              <div className="activity-details">
                <h4>Pengajuan Baru: Kursi Roda Bariatrik</h4>
                <p>Diajukan oleh unit IGD sejumlah 2 unit.</p>
                <span className="activity-time"><Clock size={12} style={{display:'inline', marginRight:'4px'}}/> 10 Mei 2026, 08:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Perbaikan Prioritas */}
        <div className="content-card">
          <div className="card-title">
            <span>Perbaikan Prioritas</span>
            <Link to="/dashboard/repairs" className="view-all">Kelola</Link>
          </div>
          
          <div className="activity-list">
             <div className="activity-item" style={{ background: '#fef2f2', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #fecaca' }}>
              <div className="activity-details">
                <h4 style={{ color: '#b91c1c' }}>Defibrillator Zoll</h4>
                <p style={{ color: '#991b1b', fontWeight: 500 }}>ID: AST-004 (Ruang Operasi 2)</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Status: Menunggu Teknisi (Cito)</p>
              </div>
            </div>

            <div className="activity-item" style={{ background: '#fffbeb', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #fde68a' }}>
              <div className="activity-details">
                <h4 style={{ color: '#b45309' }}>USG Machine Voluson</h4>
                <p style={{ color: '#92400e', fontWeight: 500 }}>ID: AST-001 (Radiologi)</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Status: Pengecekan Rutin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
