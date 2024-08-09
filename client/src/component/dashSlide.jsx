// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DashSlide = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        setTab(tabFromUrl);
        console.log(tabFromUrl);
    }, [location.search]);

    const handleTabClick = (tabName) => {
        window.location.href = `/dashboard?tab=${tabName}`;
    };

    return (
        <div className="p-4">
            <button
                className={`px-4 py-2 rounded-md ${tab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out`}
                onClick={() => handleTabClick('profile')}
            >
                Profile
            </button>
            <br />
            <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                onClick={() => alert('Signing out...')}
            >
                Sign Out
            </button>
        </div>
    );
};

export default DashSlide;
