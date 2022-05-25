import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen banner-bg-img">
            <div class="hero-overlay bg-opacity-50"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-7xl font-bold text-green-500">Car Makes You Crazy?</h1>
                    <p class="mb-5 text-white text-4xl font-border">Country's Largest Car Parts Manufacturer!</p>
                    <button class="btn btn-outline btn-xl text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;