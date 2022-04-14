import React from 'react';
import { FaLongArrowAltRight, FaRegFileAlt, FaRegPaperPlane, FaRegUser, FaSearch } from "react-icons/fa";
import SectionHeader from '../SectionHeader/SectionHeader';
import style from './howwork.module.scss';

const howDetails = [
    {
        id: 1,
        image: <FaRegUser />,
        title: 'Create an Account',
        text: 'Create an account with the right information about you.',
        next: true,
    },
    {
        id: 2,
        image: <FaRegFileAlt />,
        title: 'CV/Resume',
        text: 'Attach a CV/Resume so that we can know about you and your skills.',
        next: true,
    },
    {
        id: 3,
        image: <FaSearch />,
        title: 'Find Your Job',
        text: 'You can find many job post in this site. Find the right jobs for you.',
        next: true,
    },
    {
        id: 4,
        image: <FaRegPaperPlane />,
        title: 'Save & Apply',
        text: 'After doing this process you shold apply for the jobs with proper details.',
        next: false
    },
    
]

const HowWork = () => {
  return (
    <div className={style.how_work}>
        <SectionHeader title="How It Work?"  text="Process to apply for the right jobs for you & Reaching out to us"/>

        <div className={style.how_work_main}>
            {howDetails.map((detailss) => {
                return <div key={detailss.id} className={style.how_work_card}>
                    <div className={style.how_work_card_body}>
                        <span className={style.how_work_card_body_img}>{detailss.image}</span>
                        <div className={style.work_card_body_txt}>
                            <h3>{detailss.title}</h3>
                            <p>{detailss.text}</p>
                        </div>
                    </div>
                    {detailss.next && (
                    <div className={style.card_body_right}>
                        <FaLongArrowAltRight className={style.card_body_right_icon} />
                    </div>
                    )}
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default HowWork