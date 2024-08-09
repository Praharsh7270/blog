// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashProfile from '../component/dashProfile';
import DashSlide from '../component/dashSlide';

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    setTab(tabFromUrl);
    console.log(tabFromUrl);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-row">
      {/* Sidebar on the left */}
      <div className="w-1/4">
        <DashSlide />
      </div>

      {/* Content on the right */}
      <div className="w-3/4 p-4">
        {tab === 'profile' && <DashProfile />}
      </div>
    </div>
  );
}

export default Dashboard;
