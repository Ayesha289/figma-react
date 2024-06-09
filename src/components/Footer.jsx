import React from 'react'

const Footer = () => {
    return (
        <footer className="pb-8 mx-2 md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:mx-8">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center font-bold text-red-500 space-x-2">
                        <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3829 10.8852C26.1564 10.6651 25.8387 10.5651 25.5277 10.6163C25.2162 10.6672 24.9472 10.8628 24.8027 11.1434C24.3057 12.1089 23.6745 12.9961 22.9318 13.7805C23.0058 13.2139 23.0431 12.6439 23.0431 12.0724C23.0431 10.9759 22.8961 9.84742 22.6061 8.71805C21.6527 5.00853 19.1525 1.87144 15.7468 0.111205C15.4503 -0.0419942 15.097 -0.0366153 14.8053 0.125549C14.5136 0.287779 14.3226 0.585213 14.2964 0.917908C14.0309 4.28895 12.2945 7.35586 9.52981 9.33424C9.49322 9.3606 9.4569 9.38729 9.42057 9.41386C9.34534 9.46891 9.27441 9.52097 9.20814 9.56467C9.19778 9.57157 9.18749 9.57861 9.17739 9.58585C7.43861 10.8308 6.00391 12.4903 5.0282 14.3854C4.03675 16.3131 3.53406 18.3818 3.53406 20.5336C3.53406 21.6299 3.68101 22.7583 3.97088 23.8879C5.50055 29.8417 10.8585 33.9999 17.0004 33.9999C24.4253 33.9999 30.4659 27.9589 30.4659 20.5336C30.4659 16.872 29.0159 13.4454 26.3829 10.8852Z" fill="#FF5555" />
                            <circle cx="16" cy="20" r="4" fill="white" />
                        </svg>
                        Uifry
                    </div>
                    <p className="flex items-center space-x-2">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9394 3.70898C18.2804 3.70898 19.5704 4.23898 20.5194 5.18998C21.4694 6.13898 22.0004 7.41898 22.0004 8.75898V16.659C22.0004 19.449 19.7304 21.709 16.9394 21.709H7.06043C4.26943 21.709 2.00043 19.449 2.00043 16.659V8.75898C2.00043 5.96898 4.25943 3.70898 7.06043 3.70898H16.9394ZM18.0704 8.90898C17.8604 8.89798 17.6604 8.96898 17.5094 9.10898L13.0004 12.709C12.4204 13.19 11.5894 13.19 11.0004 12.709L6.50043 9.10898C6.18943 8.87898 5.75943 8.90898 5.50043 9.17898C5.23043 9.44898 5.20043 9.87898 5.42943 10.179L5.56043 10.309L10.1104 13.859C10.6704 14.299 11.3494 14.539 12.0604 14.539C12.7694 14.539 13.4604 14.299 14.0194 13.859L18.5304 10.249L18.6104 10.169C18.8494 9.87898 18.8494 9.45898 18.5994 9.16898C18.4604 9.01998 18.2694 8.92898 18.0704 8.90898Z" fill="#FF5555" />
                        </svg>
                        help@frybix.com
                    </p>
                    <p className="flex items-center space-x-2">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5317 13.1814C15.5208 17.1693 16.4258 12.5557 18.9656 15.0938C21.4143 17.5417 22.8216 18.0322 19.7192 21.1337C19.3306 21.446 16.8616 25.2032 8.1846 16.5287C-0.493478 7.85298 3.26158 5.38143 3.57397 4.99293C6.68387 1.88283 7.16586 3.29837 9.61449 5.74631C12.1544 8.28548 7.54266 9.1934 11.5317 13.1814Z" fill="#FF5555" />
                        </svg>
                        +1 234 456 678 89
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h3 className="flex items-center space-x-2 font-bold">Links</h3>
                    <p className="flex items-center space-x-2">Home</p>
                    <p className="flex items-center space-x-2">About Us</p>
                    <p className="flex items-center space-x-2">Bookings</p>
                    <p className="flex items-center space-x-2">Blog</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h3 className="flex items-center space-x-2 font-bold">Legal</h3>
                    <p className="flex items-center space-x-2">Terms of Use</p>
                    <p className="flex items-center space-x-2">Privacy Policy</p>
                    <p className="flex items-center space-x-2">Cookie Policy</p>
                </div>
                <div className="flex flex-col space-y-4">
                    <h3 className="flex items-center space-x-2 font-bold">Product</h3>
                    <p className="flex items-center space-x-2">Take Tour</p>
                    <p className="flex items-center space-x-2">Live Chat</p>
                    <p className="flex items-center space-x-2">Review</p>
                </div>
                <div className="flex flex-col space-y-4 col-span-2">
                    <h3 className="flex items-center space-x-2 font-bold">Newsletter</h3>
                    <p className="flex items-center space-x-2">Stay up to date</p>
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="px-4 py-2 bg-black text-white rounded hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>

                </div>
            </div>
            <div className="max-w-6xl mx-auto text-center pt-8">
                <hr />
                <p className="pt-8">© 2022 Uifry.com All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
