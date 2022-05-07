import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import style from '../../styles/candidateDetail.module.scss'

const candidateDetail = () => {
  return (
    <div className={style.candidateDetail}>
    <Navbar />
    <PageHeader title="Candidate Detail"/>

    {/* main */}

    <Newsletter />
    <Footer />
    </div>
  )
}

export default candidateDetail