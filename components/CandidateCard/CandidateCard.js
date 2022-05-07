import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import style from './candidateCard.module.scss'

const CandidateCard = ({cdetails}) => {
  return (
    <div className={style.candidate_card}>
        <Link href={`candidate/${cdetails.id.toString()}`}>
          <Image src={cdetails.image} className={style.candidate_card_img} height={270} width={250} />
        </Link>
          <Link href={`candidate/${cdetails.id.toString()}`}>
            <h3>{cdetails.name}</h3>
          </Link>
      <p className={style.candidate_card_title}>{cdetails.title}</p>
      <p className={style.candidate_card_icon}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
      <p>{cdetails.skills}</p>
      <Link href={`candidate/${cdetails.id.toString()}`}>
        <button>View Profile</button>
      </Link>
    </div>
  )
}

export default CandidateCard