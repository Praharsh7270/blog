import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
    const { theme } = useSelector(state => state.theme);

    return (
        <div className={theme}>
            <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen'>
                {children}
            </div>
        </div>
    );
}

export default ThemeProvider;
