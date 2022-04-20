import React from 'react'
// import required modules
import { Autoplay, Pagination } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from '../../images/client1.jpg'
import img2 from '../../images/client2.jpg'
import img3 from '../../images/client3.jpg'
import img4 from '../../images/client4.jpg'
import img5 from '../../images/client5.jpg'
import img6 from '../../images/client6.jpg'
import img7 from '../../images/client7.jpg'
import ReviewCard from '../ReviewCard/ReviewCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import style from './review.module.scss'



const reviewDetails = [
  {
    id: 1,
    image: img1,
    name: 'Jony Holand',
    position: 'Project Manager',
    text: 'A good day is one where I can not just read a book, but write a review of it. Maybe today I will be able to do that. I get for some reason somewhat stronger when the sun starts to go down. Dusk is a good time for me.'
  },
  {
    id: 2,
    image: img2,
    name: 'Andea John',
    position: 'Designer',
    text: 'Religion is part of the human make-up. It is also part of our cultural and intellectual history. Religion was our first attempt at literature,our first attempt at cosmology, making sense of where we are in the universe.'
  },
  {
    id: 3,
    image: img3,
    name: 'Julia Doe',
    position: 'CEO, Manager',
    text: 'One of the great questions of philosophy is, do we innately have morality, or do we get it from celestial dictation? A study of the Ten Commandments is a very good way of getting into and resolving that issue.'
  },
  {
    id: 4,
    image: img4,
    name: 'Deva Youth',
    position: 'Backend Developer',
    text: 'A good day is one where I can not just read a book, but write a review of it. Maybe today I will be able to do that. I get for some reason somewhat stronger when the sun starts to go down. Dusk is a good time for me.'
  },
  {
    id: 5,
    image: img5,
    name: 'Albera Gui',
    position: 'Project Manager',
    text: 'My own view is that this planet is used as a penal colony, lunatic asylum and dumping ground by a superior civilisation, to get rid of the undesirable and unfit. I can not prove it, but you can nott disprove it either.'
  },
  {
    id: 6,
    image: img6,
    name: 'Holand',
    position: 'Architect Manager',
    text: 'Religion is part of the human make-up. It is also part of our cultural and intellectual history. Religion was our first attempt at literature, our first attempt at cosmology, making sense of where we are in the universe.'
  },
  {
    id: 7,
    image: img7,
    name: 'Jony Holand',
    position: 'UI/UX Designer',
    text: 'A good day is one where I can not just read a book, but write a review of it. Maybe today I will be able to do that. I get for some reason somewhat stronger when the sun starts to go down. Dusk is a good time for me.'
  },
]

const Reviews = () => {
  return (
    <div className={style.review}>
        <SectionHeader title="Our Happy Clients" text="Customers that are watisfied with our services. We make sure customer satisfiction."/>

    <div className={style.review_main}>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviewDetails.map((details) => {
           return (
            <SwiperSlide key={details.id} >
              <ReviewCard reviewDetails={details} />
            </SwiperSlide>
           )
        })}
        </Swiper>
    </div>
    </div>
  )
}

export default Reviews