import Image from 'next/image'
import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import dlHeader from '../../images/header3.jpg'
import style from './download.module.scss'

const Download = () => {
  return (
    <div className={style.download}>
    <Image src={dlHeader} className={style.download_bg_img} layout="fill" objectFit='cover' />
    <div className={style.download_txt_bg_color}></div>
        <div className={style.download_txt}>
            <h3>Trial Version Available</h3>
            <h1>Download Our Mobile App.</h1>
            <h1>You Can Ready Resume & Apply Job.</h1>

            <div className={style.download_btnss}>
                <div className={style.download_btn}>
                    <FaGooglePlay size={25} style={{marginRight: '5px'}} /> Google Play
                </div>

                <div className={style.download_btn}>
                    <FaApple size={25} style={{marginRight: '5px'}} /> App Store
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download