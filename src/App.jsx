import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';

// Fitur Dashboard
import Assets from './pages/dashboard/Assets';
import AddAsset from './pages/dashboard/AddAsset';
import EditAsset from './pages/dashboard/EditAsset';
import Requests from './pages/dashboard/Requests';
import AddRequest from './pages/dashboard/AddRequest';
import Repairs from './pages/dashboard/Repairs';
import AddRepair from './pages/dashboard/AddRepair';
import Mutation from './pages/dashboard/Mutation';
import AddMutation from './pages/dashboard/AddMutation';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          
          {/* Rute Fitur Sidebar */}
          <Route path="assets" element={<Assets />} />
          <Route path="assets/add" element={<AddAsset />} />
          <Route path="assets/edit/:id" element={<EditAsset />} />
          
          <Route path="requests" element={<Requests />} />
          <Route path="requests/add" element={<AddRequest />} />
          
          <Route path="repairs" element={<Repairs />} />
          <Route path="repairs/add" element={<AddRepair />} />
          
          <Route path="mutation" element={<Mutation />} />
          <Route path="mutation/add" element={<AddMutation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
