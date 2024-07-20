
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const SwiperComponent = forwardRef(({ productObj }, ref) => {
    const swiperRef = useRef(null);

    useImperativeHandle(ref, () => ({
        swiper: swiperRef.current.swiper,
    }));

    return (
        <div className="relative w-full h-80">
            <Swiper
                ref={swiperRef}
                loop={true}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination', 
                }}
                modules={[Navigation, Pagination]}
                className="swiper-container"
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1440: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
            >
                {productObj?.length > 0 ? (
                    productObj.map((s, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <div className="text-center">
                                <div className="p-9 bg-[#f5f5f5] rounded-full flex justify-center items-center w-[200px] h-[200px] mx-auto">
                                    <Image src={s.image} alt={`Slide ${index + 1}`} className="w-full h-full object-contain" />
                                </div>
                                <div className="mt-5">
                                    <p className="text-lg font-medium mb-1">{s.title}</p>
                                    <p className="text-xs text-[#403e3e]">Discover {s.count} Products</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="text-center">No categories available</div>
                )}
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    );
});

export default SwiperComponent;
