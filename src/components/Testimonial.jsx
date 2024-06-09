import React, { useState } from 'react';
import image from '../assets/test.png'

const testimonials = [
    {
        id: 1,
        header: "The best financial accounting app ever!",
        text: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        image: image,
        name: "John Jacob"
    },
    {
        id: 2,
        header: "A must-have for personal finance management.",
        text: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        image: image,
        name: "Nick Jonas"
    },
    {
        id: 3,
        header: "Incredible user experience and features.",
        text: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        image: image,
        name: "Jane Doe"
    },
    {
        id: 4,
        header: "The best financial accounting app ever!",
        text: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        image: image,
        name: "John Smith"
    },
    {
        id: 5,
        header: "A must-have for personal finance management.",
        text: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”",
        image: image,
        name: "Tony Stark"
    }
];

const Testimonial = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0].id);

    return (
        <div className="flex flex-col pt-20 mt-10">
            <h1 className="text-2xl font-bold my-4 text-left">
                {testimonials.find(testimonial => testimonial.id === activeTestimonial).header}
            </h1>
            <p className="text-left mb-4">
                {testimonials.find(testimonial => testimonial.id === activeTestimonial).text}
            </p>
            <div className="flex space-x-2 my-2">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        onClick={() => setActiveTestimonial(testimonial.id)}
                        className={`cursor-pointer transition-opacity duration-300 ${activeTestimonial === testimonial.id ? 'opacity-100' : 'opacity-50'
                            }`}
                    >
                        <img src={testimonial.image} alt={`testimonial-${testimonial.id}`} className="w-12 h-12 object-cover" />
                    </div>
                ))}
            </div>
            <span className="text-sm text-left">{testimonials.find(testimonial => testimonial.id === activeTestimonial).name}</span>
        </div>
    );
};

export default Testimonial;
