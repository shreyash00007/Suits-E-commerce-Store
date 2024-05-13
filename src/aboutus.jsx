import React from 'react';

const AboutUsSection = () => {
    return (
        <div className="bg-gray-100 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">About Us</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu lacus sit amet ligula condimentum fermentum. Aenean nec libero quis ipsum tempor luctus.
                        </p>
                    </div>
                    <div className="mt-10 -mx-4 relative lg:mt-0">
                        <img className="relative mx-auto rounded-lg" src="https://source.unsplash.com/V5vqWC9gyEU" alt="About Us" />
                        <img className="hidden lg:block absolute top-0 right-0 -mt-12 -mr-16 rounded-lg" src="https://source.unsplash.com/vdXMSiX-n6M" alt="About Us" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;
