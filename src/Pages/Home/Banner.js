import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen banner-bg-img">
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold text-green-500">Car Makes You Crazy?</h1>
                    <p className="mb-5 text-white text-4xl font-border">Country's Largest Car Parts Manufacturer!</p>
                    <button className="btn btn-outline btn-xl text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;