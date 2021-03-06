import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './JobsCard.module.scss';

const JobsCard = ({jobDetail}) => {
  return (
    <div className={style.job_card}>
        <div className={style.job_card_header}>
            <Image src={jobDetail.image} className={style.job_card_header_img} height={55} width={55} />
            <div className={style.job_card_header_right}>
                <h3>{jobDetail.company}</h3>
                <p>{jobDetail.location}</p>
            </div>
        </div>
        
        <Link href={`jobs/${jobDetail.id}`}>
            <h2>{jobDetail.title}</h2>
        </Link>
        <p style={{
            color: jobDetail.type === 'Remote' ? 'rgb(3, 196, 3)' : 'blue'
        }}>{jobDetail.type}</p>
        <p className={style.job_card_skill}>{jobDetail.skills.map((skill, index) => {
           return <span key={index}>{skill}, </span>
        })}</p>

        <div className={style.job_card_footer}>
            <p><span className={style.job_card_footer_tk}>${jobDetail.sallery}</span>/month</p>
            
            <Link href={`jobs/${jobDetail.id}`}>
                <button type='button'>Apply Now</button>
            </Link>
        </div>
    </div>
  )
}

export default JobsCard