import React from 'react';

const ContactUsSection = () => {
    return (
        <div className="bg-gray-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">Contact Us</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Have questions or need assistance? Contact our customer support team. We're here to help!
                        </p>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
                            <p className="mt-2 text-lg text-gray-600">Email: support@example.com</p>
                            <p className="mt-1 text-lg text-gray-600">Phone: +1 (800) 123-4567</p>
                        </div>
                    </div>
                    <div className="mt-10 -mx-4 relative lg:mt-0">
                        <img className="relative mx-auto rounded-lg" src="https://source.unsplash.com/SpVHcbuKi6E" alt="Contact Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsSection;
