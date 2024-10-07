import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Introduction from './pages/Introduction';
import Authentication from './pages/Authentication';
import Endpoints from './pages/Endpoints';
import Users from './pages/Users';
import Products from './pages/Products';
import ErrorHandling from './pages/ErrorHandling';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <TopBar companyName="Your Company" currentPage="API Documentation" toggleSidebar={toggleSidebar} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-grow p-6 lg:ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/getting-started/introduction" element={<Introduction />} />
              <Route path="/getting-started/authentication" element={<Authentication />} />
              <Route path="/endpoints" element={<Endpoints />} />
              <Route path="/endpoints/users" element={<Users />} />
              <Route path="/endpoints/products" element={<Products />} />
              <Route path="/error-handling" element={<ErrorHandling />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;