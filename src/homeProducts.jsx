import React from 'react';

const ProductSection = () => {
    const products = [
        {
            id: 1,
            title: 'Classic Navy Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            discount: '20% Off',
        },
        {
            id: 2,
            title: 'Charcoal Gray Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            price: '$249',
            discount: '10% Off',
        },
        {
            id: 3,
            title: 'Black Slim Fit Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            price: '$179',
            discount: '15% Off',
        },
        {
            id: 4,
            title: 'Blue Plaid Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            price: '$299',
            discount: '30% Off',
        },
        {
            id: 5,
            title: 'Gray Windowpane Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            price: '$219',
            discount: '25% Off',
        },
        {
            id: 6,
            title: 'Brown Tweed Suit',
            image: 'https://source.unsplash.com/eb0moHDPBI',
            price: '$189',
            discount: '12% Off',
        },
    ];

    return (
        <div className="bg-gray-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">Our Products</h2>
                <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {products.map(product => (
                        <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                            <img className="w-full h-64 object-cover" src={product.image} alt={product.title} />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="text-gray-600">{product.price}</span>
                                    <span className="text-green-600">{product.discount}</span>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add to Cart</button>
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
