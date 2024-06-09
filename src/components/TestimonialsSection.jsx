import React from 'react'
import FeatureImage from './FeatureImage'
import featureImage from '../assets/testimonial.png'
import Testimonial from './Testimonial'

const TestimonialsSection = () => {
    return (
        <section className="pt-8 mb-8 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-2">Testimonials</h2>
                <h3 className="text-4xl font-bold mb-2">What Our Users Say About Us?</h3>
                <div className="grid grid-cols-2 gap-4 mx-4 md:mx-8 lg:mx-12">
                    <div>
                        <FeatureImage imageSrc={featureImage} />
                    </div>
                    <div>
                        <Testimonial />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
