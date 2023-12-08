"use client"

import React from 'react'
import { useResult } from '../context/ResultContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import DeleteFromFav from '../components/DeleteFromFav'


export default function MoviesList() {
  const { fav } = useResult([])


  return (
    <div className="min-h-[50vh] w-full flex flex-col overflow-hidden bg-[#101230] pt-10 pb-32">
      <p className="text-white text-2xl flex mx-auto">Your favourite movies</p>
      <Swiper className="w-full flex flex-row justify-center items-center bg-transparent my-10"
        effect={'coverflow'}
        breakpointsBase={'window'}
        grabCursor={true}
        touchRatio={0.2}
        centeredSlides={true}
        slideToClickedSlide={true}
        centeredSlidesBounds={true}
        slidesPerView={'auto'}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifer: 1,
        }}

        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {fav.map(item =>
          <SwiperSlide className="sm:max-w-[40vw] lg:max-w-[20vw] bg-transparent flex justify-center items-center" key={item.Id}>
            <img src={item.Poster} className=" object-cover h-[400px] w-[250px]" />
            <DeleteFromFav item={item} color={'red'} text={'Delete from Fav'}/>
          </SwiperSlide>

      
        )}
        <div className="slider-controler mt-10">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  )
}