import React, { useState } from 'react';
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/s1.jpeg";
import image2 from "../assets/s2.jpg";
import image3 from "../assets/s3.jpg";
import image4 from "../assets/s4.jpeg";

const CustomerReview = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Update current slide
    };

    const reviews = [
        {
            avatar: image1,
            name: "Ayan Chakraborty",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e",
            date: "3/10/2024",
            reviewHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            review: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ”"
        },
        {
            avatar: image2,
            name: "Shivanshu Das",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e",
            date: "31/05/2024",
            reviewHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            review: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ”"
        },
        {
            avatar: image3,
            name: "Reek Patra",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e",
            date: "13/11/2024",
            reviewHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            review: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ”"
        },
        {
            avatar: image4,
            name: "Mallika Bhattacharya",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e",
            date: "26/7/2024",
            reviewHeading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            review: "“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq ”"
        },
    ];

    return (
        <>
            <div className='flex flex-col gap-[70px] lg:gap-[120px] xl:gap-[136px]'>
                <h1 className='mt-[120px] md:mt-[80px] xl:mt-[192px] mb-14 lg:mb-16 text-[#131313] font-["otomanopee-one"] text-center text-[32px] md:text-[44px] xl:text-[56px]'>WHAT PEOPLE SAY ABOUT US</h1>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className='w-full flex items-center overflow-hidden'>
                            <div className='w-full max-w-[700px] mx-auto space-y-10 lg:space-y-12'>
                                <div className='flex items-center justify-center space-x-2 lg:space-x-4'>
                                    {reviews.map((review, idx) => (
                                        <img
                                            key={idx}
                                            src={review.avatar}
                                            alt={review.name}
                                            className={`h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full object-cover ${idx === currentSlide ? 'h-[80px] w-[80px] lg:h-[100px] lg:w-[100px]' : ''}`} // Conditionally increase size
                                        />
                                    ))}
                                </div>
                                <div className='space-y-4 lg:space-y-6'>
                                    <p className='text-base lg:text-2xl text-[#131313] text-center font-["Red_Hat_Display"]'>{review.reviewHeading}</p>
                                    <p className='text-sm leading-4 lg:text-lg lg:leading-5 text-[#131313] text-center font-["Philosopher"]'>{review.review}</p>
                                </div>
                                <div className='flex items-start justify-center mx-auto gap-4 md:gap-6 max-w-[400px] px-5 md:px-0'>
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className={`h-[80px] w-[80px] md:h-[90px] md:w-[90px] lg:h-[110px] lg:w-[110px] rounded-full object-cover ${index === currentSlide ? 'lg:h-[130px] lg:w-[130px]' : ''}`} // Increase avatar size for active slide
                                    />
                                    <div className='text-[#131313] space-y-0.5'>
                                        <h1 className='font-["Red_Hat_Display"] md:text-lg lg:text-2xl font-semibold'>{review.name}</h1>
                                        <p className='font-["Philosopher"] text-sm lg:text-base leading-4 lg:leading-5'>{review.about}</p>
                                        <p className='md:text-lg lg:text-2xl text-[#DAAE00]'>&#9733;&#9733;&#9733;&#9733;<span className='text-[#D9D9D9]'>&#9733;</span></p>
                                        <p className='font-["Philosopher"] lg:text-lg'>{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default CustomerReview;
