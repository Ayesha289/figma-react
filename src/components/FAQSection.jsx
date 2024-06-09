import React from 'react'
import FAQCard from './FAQCard'

const FAQSection = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-2">FAQ</h2>
                <h3 className="text-4xl font-bold mb-2">Frequently Asked Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="p-4">
                        <FAQCard bgColor="bg-red-500" textColor="text-white" />
                        <FAQCard bgColor="bg-white-500" textColor="text-black" />
                        <FAQCard bgColor="bg-red-500" textColor="text-white" />
                    </div>
                    <div className="p-4">
                    <FAQCard bgColor="bg-white-500" textColor="text-black" />
                    <FAQCard bgColor="bg-red-500" textColor="text-white" />
                    <FAQCard bgColor="bg-white-500" textColor="text-black" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
