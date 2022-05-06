import Link from 'next/link'
import React from 'react'
import { FaArtstation } from 'react-icons/fa'
import FooterCol from '../FooterCol/FooterCol'
import style from './footer.module.scss'

const footer_detail1 = [
    {
      id: 1,
      link: 'Star a Trial'
    },
    {
      id: 2,
      link: 'How It Works'
    },
    {
      id: 3,
      link: 'Features'
    },
    {
      id: 4,
      link: 'Price & Planing'
    },
]

const footer_detail2 = [
  {
    id: 1,
    link: 'Affiliate'
  },
  {
    id: 2,
    link: 'Blog'
  },
  {
    id: 3,
    link: 'Help & Support'
  },
  {
    id: 4,
    link: 'Careers'
  },
]

const footer_detail3 = [
  {
    id: 1,
    link: 'Quick Links'
  },
  {
    id: 2,
    link: 'Job Packages'
  },
  {
    id: 3,
    link: 'Post New Job'
  },
  {
    id: 4,
    link: 'Jobs Listing'
  },
]

const footer_detail4 = [
  {
    id: 1,
    link: 'About Us'
  },
  {
    id: 2,
    link: 'Contact With Us'
  },
  {
    id: 3,
    link: 'Our Partners'
  },
  {
    id: 4,
    link: 'Careers'
  },
]

const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footer_main}>
            <div className={style.footer_left}>
                <Link href="/">
                    <div className={style.nav_brand}>
                        <FaArtstation /> Finated
                    </div>
                  </Link>
                  <p>Find great job for build your bright career. Have many job in this plactform.</p>
            </div>

            <div className={style.footer_right}>
                <FooterCol footerDetail={footer_detail1} header="Products" />
                <FooterCol footerDetail={footer_detail2} header="Legal" />
                <FooterCol footerDetail={footer_detail3} header="Resourses" />
                <FooterCol footerDetail={footer_detail4} header="Company" />
            </div>  
        </div>
    </div>
  )
}

export default Footer