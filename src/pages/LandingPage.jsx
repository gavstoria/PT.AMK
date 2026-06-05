import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Database, AlertTriangle, RefreshCw, QrCode, ShieldPlus, ArrowRight } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      
      {/* Top Navbar */}
      <nav className="top-nav">
        <div className="nav-brand">
          <Activity size={28} />
          <span>AMK AssetSys</span>
        </div>
        
        <div className="nav-menu">
          <a href="#home" className="nav-link">Beranda</a>
          <a href="#features" className="nav-link">Fitur</a>
          <a href="#about" className="nav-link">Tentang Kami</a>
        </div>
        
        <Link to="/login" className="btn-contact">
          Login Dashboard
        </Link>
      </nav>

      {/* Hero Split Layout */}
      <main id="home" className="hero-split">
        <div className="hero-left">
          <h1>Transformasi<br />Manajemen Aset</h1>
          <p>
            Sistem Informasi terintegrasi untuk memantau, memelihara, dan melacak seluruh aset medis rumah sakit secara real-time demi operasional yang optimal.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn-solid">Mulai Sekarang</Link>
            <a href="#features" className="btn-light">Pelajari Fitur</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="flare"></div>
          <div className="hero-image-wrapper">
            <img src="/hero-device.png" alt="Medical Equipment" className="hero-image" />
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-subtitle">FITUR UTAMA</span>
          <h2>Solusi Komprehensif Manajemen Aset</h2>
          <p>Sistem kami dirancang khusus untuk memenuhi alur kerja operasional rumah sakit modern, dari pendataan hingga pemeliharaan.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Database size={28} /></div>
            <h3>Manajemen Data Terpusat</h3>
            <p>Pendataan aset medis secara digital, menampilkan riwayat lengkap, kategori, dan lokasi ruangan secara akurat.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ShieldPlus size={28} /></div>
            <h3>Permintaan Aset Baru</h3>
            <p>Modul pengajuan penggantian atau permintaan aset baru yang terstruktur untuk seluruh unit kerja rumah sakit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><AlertTriangle size={28} /></div>
            <h3>Laporan Kerusakan</h3>
            <p>Pelaporan kerusakan alat secara instan disertai foto bukti untuk penanganan prioritas oleh teknisi.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><RefreshCw size={28} /></div>
            <h3>Mutasi & Pemindahan</h3>
            <p>Lacak perpindahan aset antar unit dengan persetujuan digital, mencegah kehilangan instrumen penting.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><QrCode size={28} /></div>
            <h3>Identifikasi QR Code</h3>
            <p>Pindai stiker QR pada aset menggunakan kamera smartphone untuk melihat spesifikasi dan status pemeliharaan langsung.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Activity size={28} /></div>
            <h3>Dashboard Real-time</h3>
            <p>Pantau status ketersediaan, nilai aset, dan metrik perbaikan melalui dashboard ringkas yang mudah dipahami.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Meningkatkan Kualitas Pelayanan Melalui Manajemen Aset yang Presisi</h2>
          <p>
            Pengelolaan aset di rumah sakit merupakan aktivitas vital untuk memastikan ketersediaan alat medis yang mendukung pelayanan pasien. 
            Sistem Informasi Manajemen Aset berbasis web ini hadir sebagai solusi yang lebih fleksibel, mudah digunakan oleh end-user (perawat/teknisi), 
            serta mempercepat proses pelaporan dan pemantauan dibandingkan sistem manual tradisional.
          </p>
          <ul className="about-list">
            <li><Activity size={20} className="text-primary" /> Efisiensi waktu dalam pencarian aset darurat</li>
            <li><Activity size={20} className="text-primary" /> Transparansi data antar unit kerja</li>
            <li><Activity size={20} className="text-primary" /> Pemeliharaan preventif yang lebih terjadwal</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="/hospital-hero.png" alt="Hospital Building" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Siap Mengoptimalkan Operasional Rumah Sakit Anda?</h2>
        <p>Bergabunglah dengan PT AMK dan mulai kelola aset medis Anda secara cerdas hari ini.</p>
        <Link to="/login" className="btn-solid" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Login ke Dashboard <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <Activity size={24} />
            <span>AMK AssetSys</span>
          </div>
          <p>&copy; {new Date().getFullYear()} PT Adi Multi Kalibrasi. Hak Cipta Dilindungi.</p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
