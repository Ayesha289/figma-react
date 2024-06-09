import React from 'react'
import heroImage from '../assets/hero-image1.png'
import FeatureImage from './FeatureImage';
import featureImage from '../assets/hero-image2.png'

const HeroSection = () => {
    return (
        <section className="text-center py-10 text-black">
            <div className="grid grid-cols-2 gap-4 mx-4 md:mx-8 lg:mx-12">
                <div>
                    <h1 className="text-5xl font-bold mb-4">Make The Best Financial Decisions</h1>
                    <p className="mb-6">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="flex items-center px-6 py-3 bg-black text-white rounded">Get Started<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        </button>
                        <button className="flex items-center px-6 py-3 text-black rounded">Watch Video<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        </button>
                    </div>
                    <img src={heroImage} alt="Hero" className="mx-auto" />
                </div>
                <div>
                    <FeatureImage imageSrc={featureImage}/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
