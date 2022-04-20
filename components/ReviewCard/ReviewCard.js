import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import style from './reviewCard.module.scss'

const ReviewCard = ({reviewDetails}) => {
  return (
    <div className={style.review_card}>
      <div className={style.review_card_top}>
          <Image src={reviewDetails.image} className={style.review_card_top_img} height={80} width={80}/>

        <div className={style.review_card_top_right}>
            <h3>{reviewDetails.name}</h3>
            <p>{reviewDetails.position}</p>
        </div>
      </div>
        
        <p className={style.review_card_txt}>{reviewDetails.text}</p>
        <p><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
    </div>
  )
}

export default ReviewCard