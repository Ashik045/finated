import React from 'react'
import Footer from '../../components/Footer/Footer'
import Jobs from '../../components/Jobs/Jobs'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import Pagination from '../../components/Pagination/Pagination'
import img1 from '../../images/1.webp'
import img2 from '../../images/2.webp'
import img3 from '../../images/3.webp'
import img4 from '../../images/4.webp'
import img5 from '../../images/5.webp'
import img6 from '../../images/6.webp'
import img7 from '../../images/7.webp'
import img8 from '../../images/8.webp'
import img9 from '../../images/9.webp'
import style from '../../styles/jobs.module.scss'


const jobsDetail = [
    {
        id: 1,
        company: "Darkeno Ltd.",
        location: 'New York, USA',
        image: img1,
        title: 'Front-end Developer',
        type: 'Remote',
        skills: ["CSS3", "Reactjs", "Javascript", "Reactjs", "Javascript"],
        sallery: '3500'
    },
    {
        id: 2,
        company: "Flux Water Gear",
        location: 'America, USA',
        image: img2,
        title: 'Back-end Developer(PHP)',
        type: 'Full Time',
        skills: ["PHP", "Laravel", "Reactjs", "Javascript", "Typescript"],
        sallery: '5000'
    },
    {
        id: 3,
        company: "Cogent Data",
        location: 'London, America',
        image: img3,
        title: 'NodeJs Developer',
        type: 'Part Time',
        skills: ["CSS3", "Reactjs", "Javascript", "Node Js", "Mongodb"],
        sallery: '3000'
    },
    {
        id: 4,
        company: "Inspire Fitness Co.",
        location: 'New York, US',
        image: img4,
        title: 'Senior NodeJs Developer',
        type: 'Full Time',
        skills: ["Node Js", "Mongodb", "ExpressJs", "Reactjs", "Javascript"],
        sallery: '5500'
    },
    {
        id: 5,
        company: "Obelus Concepts",
        location: 'Malaysia',
        image: img5,
        title: 'Senior UI Designer',
        type: 'Remote',
        skills: ["Photoshop", "Sass", "Reactjs", "Javascript", "Javascript"],
        sallery: '3500'
    },
    {
        id: 6,
        company: "Darkeno Ltd.",
        location: 'New York, USA',
        image: img6,
        title: 'UX Researcher',
        type: 'Full Time',
        skills: ["CSS3", "Sass", "Reactjs", "Javascript",  "Javascript"],
        sallery: '3500'
    },
    {
        id: 7,
        company: "Sanguine Skincare",
        location: 'New York',
        image: img7,
        title: 'Android App Developer',
        type: 'Remote',
        skills: ["CSS3", "Reactjs", "Javascript"],
        sallery: '4500'
    },
    {
        id: 8,
        company: "Inspire Fitness Co.",
        location: 'London, USA',
        image: img8,
        title: 'Senior UI Designer',
        type: 'Remote',
        skills: ["CSS3", "Reactjs", "Javascript", "Bootstrap"],
        sallery: '5000'
    },
    {
        id: 9,
        company: "Cogent Data",
        location: 'Califonia',
        image: img9,
        title: 'Graphic Designer',
        type: 'Remote',
        skills: ["Photoshop", "Reactjs", "Javascript"],
        sallery: '3500'
    },
    
  ]

const index = () => {
  return (
    <div className={style.job_page}>
        <Navbar />
        <PageHeader title="Jobs"/>
        <Jobs jobsDetail={jobsDetail} />
        <Pagination />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default index