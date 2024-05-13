import React from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-white text-2xl font-bold">Suits</span>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-semibold text-white hover:text-gray-300 hover:border-gray-300">Home</a>
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-semibold text-white hover:text-gray-300 hover:border-gray-300">About Us</a>
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-semibold text-white hover:text-gray-300 hover:border-gray-300">Products</a>
                        <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-semibold text-white hover:text-gray-300 hover:border-gray-300">Contact Us</a>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Home</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">About Us</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Products</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
