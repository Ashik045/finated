import React from 'react'
import Candidate from '../../components/Candidate/Candidate'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import Pagination from '../../components/Pagination/Pagination'
import image1 from '../../images/candidate1.jpg'
import image2 from '../../images/candidate2.jpg'
import image3 from '../../images/candidate3.jpg'
import image4 from '../../images/candidate4.jpg'
import image7 from '../../images/client1.jpg'
import image5 from '../../images/client4.jpg'
import image8 from '../../images/client6.jpg'
import image6 from '../../images/client7.jpg'
import style from '../../styles/candidate.module.scss'

const candidateDetail = [
    {
        id: 1,
        image: image1,
        name: 'Aguilera Shakia',
        title: 'UI/UX Designer',
        skills: 'CSS3, HTML5, Javascript, Jquery',
    },
    {
        id: 2,
        image: image2,
        name: 'Assunta Manson',
        title: 'Web Designer',
        skills: 'CSS3, HTML5, Javascript, Bootstrap, Jquery',
    },
    {
        id: 3,
        image: image3,
        name: 'Anders Valentine',
        title: 'App Developer',
        skills: 'CSS3, HTML5, Javascript, React-Native',
    },
    {
        id: 4,
        image: image4,
        name: 'Lauran Benitez',
        title: 'Full-stack Developer',
        skills: ' Javascript, Bootstrap, Jquery, NodeJs',
    },
    {
        id: 5,
        image: image5,
        name: 'Holand Dev',
        title: 'Full-stack Developer',
        skills: ' Javascript, Bootstrap, Jquery, PHP',
    },
    {
        id: 6,
        image: image6,
        name: 'Devid Bombal',
        title: 'UI/UX Designer',
        skills: ' Figma, Adobe, Javascript, Bootstrap',
    },
    {
        id: 7,
        image: image7,
        name: 'Joland Heri',
        title: 'Front-end Developer',
        skills: ' Javascript, Bootstrap, Jquery, Reactjs',
    },
    {
        id: 8,
        image: image8,
        name: 'Albarta Hre',
        title: 'Product Manager',
        skills: ' Javascript, Python, PHP, NodeJs',
    },
  ]

const index = () => {
  return (
    <div className={style.candidate_page}>
    <Navbar />
        <PageHeader  title="Candidates"/>
        <Candidate candidateDetail={candidateDetail} />
        <Pagination />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default index