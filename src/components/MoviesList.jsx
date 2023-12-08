"use client"

import React, { useState } from 'react'
import { useResult } from '../context/ResultContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AddToFav from '../components/AddToFav'


export default function MoviesList() {
  const { result, msg } = useResult([])


  return (
    <div className="min-h-[50vh] w-full flex flex-col overflow-hidden bg-[#101230]">
      <p className="text-black text-2xl flex mx-auto">Films</p>
      {msg}
      <Swiper className="w-full flex flex-row justify-center items-center bg-transparent my-10"
        effect={'coverflow'}
        breakpointsBase={'window'}
        grabCursor={true}
        touchRatio={0.2}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={'auto'}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
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
        {result.map(item =>
          <SwiperSlide className="sm:max-w-[40vw] lg:max-w-[20vw] bg-transparent flex justify-center items-center" key={item.imdbID}>
            <img src={item.Poster} className="relative object-cover h-[400px] w-[250px]" />
            <AddToFav item={item} text={"Add to Fav"} color={"white"}/>
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
