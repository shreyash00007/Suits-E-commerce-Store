import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-gray-300 text-sm">&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
