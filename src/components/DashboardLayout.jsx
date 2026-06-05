import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, ClipboardList, PenTool, RefreshCw, LogOut, Search, Bell, Settings } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/dashboard/assets', label: 'Assets', icon: <Package size={20} /> },
    { path: '/dashboard/requests', label: 'Requests', icon: <ClipboardList size={20} /> },
    { path: '/dashboard/repairs', label: 'Repairs', icon: <PenTool size={20} /> },
    { path: '/dashboard/mutation', label: 'Mutation', icon: <RefreshCw size={20} /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          {/* Skeleton or Logo as per reference */}
          <div className="sidebar-header-skeleton"></div>
        </div>
        
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="btn-signout" onClick={handleSignOut}>
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Topbar */}
        <header className="dashboard-topbar">
          <h1 className="topbar-title">Dashboard</h1>
          
          <div className="topbar-search">
            <Search size={18} />
            <input type="text" placeholder="Search by asset id" />
          </div>

          <div className="topbar-actions">
            <Bell size={22} className="action-icon" />
            <Settings size={22} className="action-icon" />
            <div className="user-avatar">AD</div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
